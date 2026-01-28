import { getVendorData } from "@/lib/getVendorData";
import { notFound } from "next/navigation";
import VendorHeader from "@/components/VendorHeader";
import ProductGrid from "@/components/ProductGrid";
import ThemeToggle from "@/components/ThemeToggle";

export async function generateMetadata({ params }: { params: Promise<{ vendorSlug: string }> }) {
  const { vendorSlug } = await params;
  const data = await getVendorData(vendorSlug);

  if (!data) {
    return { title: "Vendor Not Found" };
  }

  return {
    title: data.vendor.name,
    description: `${data.vendor.name} storefront`,
  };
}

export default async function VendorPage({ params }: { params: Promise<{ vendorSlug: string }> }) {
  const { vendorSlug } = await params;
  const data = await getVendorData(vendorSlug);

  if (!data) return notFound();

  return (
    <div className="min-h-screen">
      <VendorHeader vendor={data.vendor} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>
        <ProductGrid products={data.products} />
      </div>
    </div>
  );
}
