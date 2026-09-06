"use client";

import { useState, useRef } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import Image from "next/image";

interface UploadedFile {
  id: string;
  url: string;
  filename: string;
  size: number;
  uploadedAt: string;
  type: string;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export default function AdminMediaPage() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (data.url) {
        const newFile: UploadedFile = {
          id: Math.random().toString(36).substr(2, 9),
          url: data.url,
          filename: data.filename || file.name,
          size: data.size || file.size,
          uploadedAt: new Date().toISOString(),
          type: file.type,
        };
        setFiles((prev) => [newFile, ...prev]);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    Array.from(fileList).forEach(uploadFile);
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="flex h-screen overflow-hidden text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white">Medya Galerisi</h1>
            <p className="text-slate-500 text-sm mt-1">Görsel yükleyin ve URL&apos;lerini kopyalayın</p>
          </div>

          {/* Upload area */}
          <div
            className={`border-2 border-dashed rounded-2xl p-12 text-center mb-8 transition-all cursor-pointer ${
              dragOver
                ? "border-amber-500 bg-amber-500/10"
                : "border-white/20 hover:border-amber-500/50 hover:bg-white/3"
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFiles(e.dataTransfer.files);
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-3 border-amber-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-amber-400 font-medium">Yükleniyor...</p>
              </div>
            ) : (
              <div>
                <div className="text-5xl mb-3">📤</div>
                <p className="text-white font-semibold text-lg mb-1">Dosyaları buraya sürükleyin</p>
                <p className="text-slate-500 text-sm">veya tıklayarak seçin</p>
                <p className="text-slate-600 text-xs mt-2">PNG, JPG, GIF, WebP • Maks 50MB</p>
              </div>
            )}
          </div>

          {/* File grid */}
          {files.length > 0 ? (
            <div>
              <h2 className="text-lg font-bold text-white mb-4">Bu Oturumda Yüklenenler ({files.length})</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {files.map((file) => (
                  <div key={file.id} className="glass border border-white/10 rounded-xl overflow-hidden group">
                    <div className="relative h-40">
                      {file.type.startsWith("image/") ? (
                        <Image src={file.url} alt={file.filename} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white/5 text-4xl">
                          📄
                        </div>
                      )}
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => copyUrl(file.url)}
                          className="px-3 py-1.5 bg-amber-500 text-[#0f172a] rounded-lg text-xs font-bold hover:bg-amber-400 transition-colors"
                        >
                          {copied === file.url ? "✓ Kopyalandı" : "URL Kopyala"}
                        </button>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="w-7 h-7 bg-red-500/80 rounded-lg flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-white text-xs font-medium truncate">{file.filename}</p>
                      <p className="text-slate-600 text-xs">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="glass border border-white/10 rounded-2xl p-8">
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🖼️</div>
                <p className="text-slate-400 mb-2">Henüz görsel yüklenmedi</p>
                <p className="text-slate-600 text-sm">
                  Yüklediğiniz görsellerin URL&apos;lerini kopyalayarak hero slider, SEO ve diğer alanlarda kullanabilirsiniz.
                </p>
              </div>

              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <p className="text-amber-400 text-sm font-medium mb-1">💡 Vercel Blob Hakkında</p>
                <p className="text-amber-400/70 text-xs leading-relaxed">
                  Görseller Vercel Blob&apos;a yüklenir. Vercel&apos;de <code className="font-mono bg-black/30 px-1 rounded">BLOB_READ_WRITE_TOKEN</code> environment variable tanımlı olması gerekir.
                  Yerel geliştirmede placeholder URL döner.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
