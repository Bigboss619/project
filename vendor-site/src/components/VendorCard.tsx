import Link from "next/link";
import Image from "next/image";

export default function VendorCard({ vendor }: { vendor: any }) {
  return (
    <Link href={`/site/${vendor.slug}`}>
      <div className="border rounded-xl p-6 hover:shadow-lg transition cursor-pointer bg-white dark:bg-zinc-900">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={vendor.logo}
            alt={vendor.name}
            width={48}
            height={48}
          />
          <h3 className="text-lg font-semibold">{vendor.name}</h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          {vendor.description}
        </p>
      </div>
    </Link>
  );
}
