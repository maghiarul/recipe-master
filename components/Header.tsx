import { getAllCategories } from '@/lib/recipes';
import HeaderClient from './HeaderClient';

export default function Header() {
  const categories = getAllCategories();

  return <HeaderClient categories={categories} />;
}
