import VendorGrid from "../components/VendorGrid";
import { getVendors } from "../lib/getVendorData";

export default async function HomePage() {
  const vendors = await getVendors();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#159C47] text-white py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Padisquare
        </h1>
        <p className="max-w-xl mx-auto text-lg opacity-90">
          Discover unique storefronts from trusted vendors — all in one place.
        </p>
      </section>

      {/* Vendors */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Explore Vendors
        </h2>

        <VendorGrid vendors={vendors} />
      </section>
    </main>
  );
}
