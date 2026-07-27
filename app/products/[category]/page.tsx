import { redirect } from "next/navigation";
import { categoriesData } from "@/lib/productsData";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = categoriesData.find((c) => c.slug === categorySlug);
  if (category) {
    redirect(`/products/${categorySlug}/all`);
  }
  redirect("/");
}
