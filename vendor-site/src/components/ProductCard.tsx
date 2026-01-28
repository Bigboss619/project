import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">
          {product.name}
        </h3>
        <p className="text-[#159C47] font-bold mt-2">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
