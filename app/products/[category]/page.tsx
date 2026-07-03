import { redirect } from "next/navigation";
import { categoriesData } from "@/lib/productsData";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = categoriesData.find((c) => c.slug === categorySlug);
  if (category && category.subcategories[0]?.items[0]?.slug) {
    redirect(`/products/${categorySlug}/${category.subcategories[0].items[0].slug}`);
  }
  redirect("/");
}
