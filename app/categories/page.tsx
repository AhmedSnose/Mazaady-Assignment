import CategoryForm from "@/components/categories/CategoryForm"

export default function CategoriesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Categories</h1>
        <p className="text-muted-foreground mt-2">Browse and explore different categories and their properties.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <CategoryForm />
      </div>
    </div>
  )
}
