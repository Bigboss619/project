"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-10 text-center">
      <p className="text-red-600 mb-4">
        Something went wrong loading this vendor.
      </p>
      <button
        onClick={reset}
        className="bg-[#159C47] text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}
