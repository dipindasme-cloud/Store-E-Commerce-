"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";

export default function ProfilePage() {
  const wishlist = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: "$199",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: "$179",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: "$149",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    },
    {
      id: 4,
      name: "New Balance 550",
      price: "$169",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
  ];

  const orders = [
    {
      id: "#ORD-1001",
      product: "Nike Air Max 270",
      status: "Delivered",
      price: "$199",
    },
    {
      id: "#ORD-1002",
      product: "Adidas Ultraboost",
      status: "Processing",
      price: "$179",
    },
    {
      id: "#ORD-1003",
      product: "Puma RS-X",
      status: "Delivered",
      price: "$149",
    },
  ];

  return (
    <section className="py-8">
      <Container>
        <div className="space-y-8">

          <div className="grid gap-8 lg:grid-cols-[360px_1fr]">

            {/* LEFT COLUMN */}
            <div className="space-y-6">

              {/* PROFILE */}
              <div className="rounded-3xl border border-neutral-200 p-6">
                <div className="flex flex-col items-center text-center">

                  <div className="size-24 rounded-full bg-neutral-200" />

                  <h1 className="mt-4 text-2xl font-semibold">
                    Dipin Das
                  </h1>

                  <p className="mt-1 text-neutral-500">
                    dipin@example.com
                  </p>

                  <button className="mt-5 h-11 rounded-xl border px-5">
                    Edit Profile
                  </button>

                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border p-5">
                  <h3 className="text-3xl font-bold">24</h3>
                  <p className="text-sm text-neutral-500">
                    Orders
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="text-3xl font-bold">12</h3>
                  <p className="text-sm text-neutral-500">
                    Wishlist
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="text-3xl font-bold">8</h3>
                  <p className="text-sm text-neutral-500">
                    Reviews
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="text-3xl font-bold">250</h3>
                  <p className="text-sm text-neutral-500">
                    Points
                  </p>
                </div>

              </div>

              {/* ADDRESS */}
              <div className="rounded-3xl border border-neutral-200 p-6">

                <h2 className="mb-4 text-lg font-semibold">
                  Saved Address
                </h2>

                <p className="text-sm text-neutral-500">
                  123 Main Street
                  <br />
                  New York, NY 10001
                </p>

              </div>

              {/* SETTINGS */}
              <div className="rounded-3xl border border-neutral-200 p-6">

                <h2 className="mb-4 text-lg font-semibold">
                  Account
                </h2>

                <div className="space-y-3">

                  <button className="w-full rounded-xl border px-4 py-3 text-left">
                    Edit Profile
                  </button>

                  <button className="w-full rounded-xl border px-4 py-3 text-left">
                    Change Password
                  </button>

                  <button className="w-full rounded-xl border px-4 py-3 text-left">
                    Logout
                  </button>

                </div>

              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div>

              <div className="rounded-3xl border border-neutral-200 p-6">

                <div className="mb-6 flex items-center justify-between">

                  <h2 className="text-2xl font-semibold">
                    Recent Orders
                  </h2>

                  <button className="text-sm font-medium">
                    View All
                  </button>

                </div>

                <div className="space-y-3">

                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-2xl border p-4"
                    >
                      <div className="flex items-center justify-between">

                        <div>
                          <h3 className="font-medium">
                            {order.product}
                          </h3>

                          <p className="mt-1 text-sm text-neutral-500">
                            {order.id}
                          </p>
                        </div>

                        <div className="text-right">

                          <p className="font-semibold">
                            {order.price}
                          </p>

                          <p className="mt-1 text-sm text-neutral-500">
                            {order.status}
                          </p>

                        </div>

                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* WISHLIST */}
          <div className="rounded-3xl border border-neutral-200 p-6">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-semibold">
                Wishlist
              </h2>

              <button className="text-sm font-medium">
                View All
              </button>

            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">

              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-neutral-200"
                >

                  <div className="relative aspect-square overflow-hidden">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="p-4">

                    <h3 className="line-clamp-1 font-medium">
                      {product.name}
                    </h3>

                    <p className="mt-2 font-semibold">
                      {product.price}
                    </p>

                    <button className="mt-4 h-10 w-full rounded-xl border text-sm font-medium hover:bg-black hover:text-white">
                      Move To Cart
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}