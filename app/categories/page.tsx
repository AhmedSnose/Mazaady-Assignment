import CategoryForm from '@/components/categories/CategoryForm'
import { getAllCategories } from '../actions/categories'

export default async function CategoriesPage() {
  const allMainCategories = await getAllCategories();
  
  return (
    <div className="bg-white rounded-lg p-6 m-2">
      <CategoryForm allMainCategoriesAtTheFirst={allMainCategories}/>
    </div>
  )
}

