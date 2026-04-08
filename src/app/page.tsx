"use client";

import { useState, useCallback } from "react";
import { categories } from "@/data/prompts";
import type { Category, Section } from "@/data/prompts";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="px-2 py-1 text-xs rounded bg-[var(--border)] hover:bg-[var(--accent)] hover:text-white transition-colors shrink-0"
      title="클립보드에 복사"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function PromptTag({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--border)] text-sm hover:bg-[var(--accent)]/30 transition-colors cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }}
      title="클릭하여 복사"
    >
      <span className={copied ? "text-[var(--accent)]" : "text-[var(--foreground)]"}>
        {copied ? "Copied!" : prompt}
      </span>
    </span>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-3">
        {images.map((url, i) => (
          <div
            key={i}
            className="aspect-[3/4] relative overflow-hidden rounded-lg bg-[var(--card-bg)] cursor-pointer hover:ring-2 hover:ring-[var(--accent)] transition-all"
            onClick={() => setLightboxIdx(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={url}
              alt={`sample ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-[var(--accent)]"
            onClick={() => setLightboxIdx(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[var(--accent)] px-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) =>
                prev !== null ? (prev - 1 + images.length) % images.length : null
              );
            }}
          >
            &#8249;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[lightboxIdx]}
            alt="enlarged"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[var(--accent)] px-2"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) =>
                prev !== null ? (prev + 1) % images.length : null
              );
            }}
          >
            &#8250;
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

function SectionCard({ section }: { section: Section }) {
  const allPrompts = section.prompts.join(", ");

  return (
    <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] p-5 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {section.title}
        </h3>
        {section.prompts.length > 0 && <CopyButton text={allPrompts} />}
      </div>

      {section.description && (
        <p className="text-sm text-[var(--muted)] mb-3 leading-relaxed">
          {section.description}
        </p>
      )}

      {section.prompts.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {section.prompts.map((p, i) => (
            <PromptTag key={i} prompt={p} />
          ))}
        </div>
      )}

      <ImageGrid images={section.images} />
    </div>
  );
}

function CategoryContent({ category }: { category: Category }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)] flex items-center gap-3">
        <span className="w-1 h-7 bg-[var(--accent)] rounded-full" />
        {category.title}
      </h2>
      {category.sections.map((section, i) => (
        <SectionCard key={i} section={section} />
      ))}
    </div>
  );
}

function SearchResults({
  query,
  onSelectCategory,
}: {
  query: string;
  onSelectCategory: (id: string) => void;
}) {
  const results: { category: Category; section: Section; matchedPrompts: string[] }[] = [];
  const q = query.toLowerCase();

  for (const cat of categories) {
    for (const sec of cat.sections) {
      const matched = sec.prompts.filter((p) => p.toLowerCase().includes(q));
      if (
        matched.length > 0 ||
        sec.title.toLowerCase().includes(q) ||
        cat.title.toLowerCase().includes(q)
      ) {
        results.push({
          category: cat,
          section: sec,
          matchedPrompts: matched.length > 0 ? matched : sec.prompts.slice(0, 5),
        });
      }
    }
  }

  if (results.length === 0) {
    return (
      <div className="text-center text-[var(--muted)] py-20">
        <p className="text-xl mb-2">&ldquo;{query}&rdquo;에 대한 결과가 없습니다</p>
        <p className="text-sm">다른 키워드로 검색해보세요</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-[var(--muted)]">
        &ldquo;{query}&rdquo; 검색 결과 ({results.length}건)
      </h2>
      {results.map((r, i) => (
        <div
          key={i}
          className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] p-4 mb-3 cursor-pointer hover:border-[var(--accent)] transition-colors"
          onClick={() => onSelectCategory(r.category.id)}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-0.5 rounded bg-[var(--accent)]/20 text-[var(--accent)]">
              {r.category.title}
            </span>
            <span className="text-sm font-medium">{r.section.title}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {r.matchedPrompts.map((p, j) => (
              <PromptTag key={j} prompt={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const handleSelectCategory = (id: string) => {
    setActiveCategory(id);
    setSearchQuery("");
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar toggle */}
      <button
        className="fixed top-3 left-3 z-40 md:hidden bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-30 top-0 left-0 h-full w-64 bg-[var(--background)] border-r border-[var(--border)] flex flex-col transition-transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-[var(--border)]">
          <h1 className="text-lg font-bold text-[var(--accent)]">Prompt DB</h1>
          <p className="text-xs text-[var(--muted)] mt-0.5">AI Image Prompt Database</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--card-bg)] border-l-3 border-transparent ${
                activeCategory === cat.id ? "nav-active" : ""
              }`}
            >
              {cat.title}
              <span className="ml-1 text-xs text-[var(--muted)]">
                ({cat.sections.reduce((a, s) => a + s.prompts.length, 0)})
              </span>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-[var(--border)] text-xs text-[var(--muted)]">
          {categories.length} categories &middot;{" "}
          {categories.reduce(
            (a, c) => a + c.sections.reduce((b, s) => b + s.prompts.length, 0),
            0
          )}{" "}
          prompts
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] px-6 py-3">
          <div className="max-w-5xl mx-auto flex items-center gap-4">
            <div className="md:hidden w-8" />
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="프롬프트 검색... (예: smile, ponytail, bikini)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
                  onClick={() => setSearchQuery("")}
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-6">
          {searchQuery.trim().length >= 2 ? (
            <SearchResults
              query={searchQuery.trim()}
              onSelectCategory={handleSelectCategory}
            />
          ) : (
            <CategoryContent category={currentCategory} />
          )}
        </div>
      </main>
    </div>
  );
}
