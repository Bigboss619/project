import VendorCard from "@/components/VendorCard";

export default function VendorGrid({ vendors }: { vendors: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.slug} vendor={vendor} />
      ))}
    </div>
  );
}
