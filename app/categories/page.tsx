"use server";
import CategoryForm from '@/components/categories/CategoryForm'
import { CategoryService } from '@/services/CategoryService';
const categoryService = new CategoryService();
export default async function Home() {
  const allMainCategories = await categoryService.getAllCategories();
  

  return (
    <div className="bg-white rounded-lg p-6 m-2">
      <CategoryForm allMainCategoriesAtTheFirst={allMainCategories}/>
    </div>
  )
}

