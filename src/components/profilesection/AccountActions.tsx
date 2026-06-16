"use client";

export default function AccountActions() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Account Actions
      </h2>

      <div className="flex flex-wrap gap-4">
        <button className="h-12 px-6 rounded-lg border">
          Edit Profile
        </button>

        <button className="h-12 px-6 rounded-lg border">
          Change Password
        </button>

        <button className="h-12 px-6 rounded-lg bg-red-500 text-white">
          Logout
        </button>
      </div>
    </section>
  );
}