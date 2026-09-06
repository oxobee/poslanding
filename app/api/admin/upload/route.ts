import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });
    }

    // Check if Vercel Blob is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      // Fallback: return a placeholder URL for local dev
      return NextResponse.json({
        url: `/placeholder-${Date.now()}.jpg`,
        filename: file.name,
        size: file.size,
        warning: "BLOB_READ_WRITE_TOKEN tanımlı değil. Vercel ortamında çalışacak.",
      });
    }

    // Dynamic import to avoid errors when token not present
    const { put } = await import("@vercel/blob");
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      size: file.size,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Yükleme başarısız" }, { status: 500 });
  }
}
