import Image from "next/image";

type Vendor = {
  name: string;
  logo: string;
  heroImage: string;
};

export default function VendorHeader({ vendor }: { vendor: Vendor }) {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <div className="relative h-[220px] sm:h-[300px] md:h-[360px]">
        <Image
          src={vendor.heroImage}
          alt={`${vendor.name} hero`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Vendor Info */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 pb-4 flex items-center gap-4">
          <div className="bg-white rounded-full p-2 shadow-md">
            <Image
              src={vendor.logo}
              alt={vendor.name}
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>

          <h1 className="text-white text-2xl sm:text-3xl font-bold">
            {vendor.name}
          </h1>
        </div>
      </div>
    </section>
  );
}
