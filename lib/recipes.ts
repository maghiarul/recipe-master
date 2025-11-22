import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Recipe, RecipeMetadata } from './types';

const recipesDirectory = path.join(process.cwd(), 'content/recipes');

/**
 * Parse markdown content and convert to HTML
 */
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

/**
 * Get all recipe slugs for static path generation
 */
export function getAllRecipeSlugs(): string[] {
  if (!fs.existsSync(recipesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(recipesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Get all recipe metadata sorted by date (newest first)
 */
export function getAllRecipes(): RecipeMetadata[] {
  if (!fs.existsSync(recipesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(recipesDirectory);
  const allRecipesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(recipesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled Recipe',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        image: data.image,
        category: data.category || 'Uncategorized',
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        servings: data.servings,
      } as RecipeMetadata;
    });

  // Sort by date, newest first
  return allRecipesData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single recipe by slug with full content
 */
export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const fullPath = path.join(recipesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Parse ingredients
    let ingredients: string[] = [];
    if (Array.isArray(data.ingredients)) {
      ingredients = data.ingredients;
    } else if (typeof data.ingredients === 'string') {
      ingredients = data.ingredients.split('\n').filter((line: string) => line.trim());
    }

    // Convert markdown content to HTML
    const htmlContent = await markdownToHtml(content);

    return {
      slug,
      title: data.title || 'Untitled Recipe',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      ingredients,
      image: data.image,
      category: data.category || 'Uncategorized',
      prepTime: data.prepTime,
      cookTime: data.cookTime,
      servings: data.servings,
      content: htmlContent,
    };
  } catch (error) {
    console.error(`Error reading recipe ${slug}:`, error);
    return null;
  }
}

/**
 * Get all unique categories from recipes
 */
export function getAllCategories(): string[] {
  const recipes = getAllRecipes();
  const categories = recipes.map((recipe) => recipe.category);
  return Array.from(new Set(categories)).sort();
}

/**
 * Get recipes by category
 */
export function getRecipesByCategory(category: string): RecipeMetadata[] {
  const allRecipes = getAllRecipes();
  // Normalize category: replace dashes with spaces to handle URL slugs
  const normalizedCategory = category.toLowerCase().replace(/-/g, ' ');
  
  return allRecipes.filter(
    (recipe) => recipe.category.toLowerCase() === normalizedCategory
  );
}

/**
 * Get paginated recipes
 */
export function getPaginatedRecipes(
  page: number = 1,
  perPage: number = 9
): {
  recipes: RecipeMetadata[];
  totalPages: number;
  currentPage: number;
  totalRecipes: number;
} {
  const allRecipes = getAllRecipes();
  const totalRecipes = allRecipes.length;
  const totalPages = Math.ceil(totalRecipes / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const recipes = allRecipes.slice(start, end);

  return {
    recipes,
    totalPages,
    currentPage: page,
    totalRecipes,
  };
}
