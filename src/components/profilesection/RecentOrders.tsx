"use client";

export default function RecentOrders() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Orders
      </h2>

      <div className="space-y-4">
        <div className="rounded-xl border p-4">
          <div className="flex items-center justify-between">
            <span>#ORD-1001</span>
            <span>Delivered</span>
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="flex items-center justify-between">
            <span>#ORD-1002</span>
            <span>Processing</span>
          </div>
        </div>
      </div>
    </section>
  );
}