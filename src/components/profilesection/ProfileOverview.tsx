"use client";

export default function ProfileOverview() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Account Overview
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border p-4">
          <p className="text-sm text-neutral-500">
            Orders
          </p>

          <h3 className="mt-2 text-3xl font-semibold">
            24
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-neutral-500">
            Wishlist
          </p>

          <h3 className="mt-2 text-3xl font-semibold">
            12
          </h3>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-neutral-500">
            Reviews
          </p>

          <h3 className="mt-2 text-3xl font-semibold">
            8
          </h3>
        </div>
      </div>
    </section>
  );
}