"use client";

export default function ProfileHeader() {
  return (
    <section className="border-b border-neutral-200 pb-6">
      <div className="flex items-center gap-4">
        <div className="size-20 rounded-full bg-neutral-200" />

        <div>
          <h1 className="text-2xl font-semibold">
            John Doe
          </h1>

          <p className="text-neutral-500">
            john@example.com
          </p>
        </div>
      </div>
    </section>
  );
}