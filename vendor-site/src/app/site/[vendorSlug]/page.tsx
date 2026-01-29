import { getVendorData } from "@/lib/getVendorData";
import { notFound } from "next/navigation";
import VendorHeader from "@/components/VendorHeader";
import ProductGrid from "@/components/ProductGrid";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

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

  if (data.products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          There are no items at the moment
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Please check back later or explore other vendors.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#159C47] text-white px-6 py-3 rounded-lg"
        >
          Go back
        </Link>
      </div>
    );
  }
  
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
