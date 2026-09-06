import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel — OxonomPos",
  robots: "noindex, nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {children}
    </div>
  );
}
