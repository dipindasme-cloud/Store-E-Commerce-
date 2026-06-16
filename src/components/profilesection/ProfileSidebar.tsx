"use client";

export default function ProfileSidebar() {
  return (
    <aside className="w-full lg:w-[260px]">
      <nav className="flex flex-col gap-2">
        <button className="h-12 rounded-lg bg-black text-white px-4 text-left">
          Overview
        </button>

        <button className="h-12 rounded-lg border px-4 text-left">
          Orders
        </button>

        <button className="h-12 rounded-lg border px-4 text-left">
          Addresses
        </button>

        <button className="h-12 rounded-lg border px-4 text-left">
          Settings
        </button>
      </nav>
    </aside>
  );
}