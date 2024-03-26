import { Category } from "~/app/components/category/Category";

export default function CategoryPage({ params }) {
  return (
    <>
      <Category categoryId={params.categoryId} />
    </>
  );
}
