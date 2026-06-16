"use client";

export default function SavedAddresses() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Saved Addresses
      </h2>

      <div className="rounded-xl border p-4">
        <h3 className="font-medium">
          Home
        </h3>

        <p className="mt-2 text-neutral-500">
          123 Main Street,
          New York,
          NY 10001
        </p>
      </div>
    </section>
  );
}