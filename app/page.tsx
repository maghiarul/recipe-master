import { getAllRecipes, getAllCategories } from '@/lib/recipes';
import HomeClient from '@/components/HomeClient';

export default function Home() {
  // Server component - fetch data here
  const allRecipes = getAllRecipes();
  const recipes = allRecipes.slice(0, 9); // Show first 9 recipes
  const totalRecipes = allRecipes.length;
  const categories = getAllCategories();

  return <HomeClient recipes={recipes} totalRecipes={totalRecipes} categories={categories} />;
}
