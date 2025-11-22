export interface Recipe {
  slug: string;
  title: string;
  date: string;
  description: string;
  ingredients: string[];
  image?: string;
  category: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  content: string;
}

export interface RecipeMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category: string;
  prepTime?: string;
  cookTime?: string;
  servings?: number;
}
