"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface Snippet {
  title: string;
  code: string;
  lang: string;
}

const defaultSnippets: Snippet[] = [
  {
    title: "RAG Pipeline Pattern",
    code: `async function retrieveAndGenerate(query: string) {
  const embedding = await embed(query);
  const docs = await qdrant.search(embedding);
  const context = docs.map(d => d.text).join("\\n");
  return generate(context, query);
}`,
    lang: "TypeScript",
  },
  {
    title: "Redis Queue Worker",
    code: `async function processQueue() {
  while (true) {
    const job = await redis.brpop("jobs", 0);
    const result = await processJob(job);
    await redis.lpush("results", result);
  }
}`,
    lang: "TypeScript",
  },
  {
    title: "FastAPI Embedding Endpoint",
    code: `@app.post("/embed")
async def embed_text(text: str):
    model = SentenceTransformer(
        "all-MiniLM-L6-v2"
    )
    embedding = model.encode(text)
    return {"embedding": embedding.tolist()}`,
    lang: "Python",
  },
  {
    title: "Rust Vector Search",
    code: `fn search_vectors(
    query: &[f32],
    index: &AnnIndex,
    k: usize,
) -> Vec<SearchResult> {
    index.search(query, k)
        .iter()
        .map(|r| SearchResult {
            id: r.id,
            score: r.distance,
        })
        .collect()
}`,
    lang: "Rust",
  },
];

export default function Snippets() {
  const [snippets, setSnippets] = useState<Snippet[]>(defaultSnippets);

  const updateSnippet = (i: number, field: keyof Snippet, value: string) => {
    setSnippets((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], [field]: value };
      return next;
    });
  };

  const addSnippet = () => {
    setSnippets((prev) => [
      ...prev,
      { title: "New Snippet", code: "// write your code here", lang: "TypeScript" },
    ]);
  };

  const removeSnippet = (i: number) => {
    setSnippets((prev) => prev.filter((_, idx) => idx !== i));
  };

  return (
    <AnimatedSection>
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Code
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl mt-2">
              Snippets
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-3 border border-border rounded-lg" />
              <div className="relative overflow-hidden rounded-lg bg-card">
                <Image
                  src="/images/snippet.jpeg"
                  alt="Code Snippet"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <div className="space-y-6">
              {snippets.map((snippet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <input
                      type="text"
                      value={snippet.title}
                      onChange={(e) => updateSnippet(i, "title", e.target.value)}
                      className="font-serif text-sm bg-transparent border-b border-transparent hover:border-border focus:border-accent outline-none transition-colors"
                    />
                    <div className="flex items-center gap-2">
                      <select
                        value={snippet.lang}
                        onChange={(e) => updateSnippet(i, "lang", e.target.value)}
                        className="font-mono text-[10px] text-accent tracking-wider uppercase bg-transparent border border-border rounded outline-none cursor-pointer hover:border-accent transition-colors"
                      >
                        <option value="TypeScript">TypeScript</option>
                        <option value="Python">Python</option>
                        <option value="Rust">Rust</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Go">Go</option>
                      </select>
                      <button
                        onClick={() => removeSnippet(i)}
                        className="text-muted hover:text-red-500 transition-colors text-xs"
                        title="Delete snippet"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  <textarea
                    value={snippet.code}
                    onChange={(e) => updateSnippet(i, "code", e.target.value)}
                    className="w-full bg-card border border-border rounded-lg p-4 text-xs font-mono leading-relaxed group-hover:border-accent transition-colors duration-300 text-foreground/85 resize-y min-h-[100px] outline-none"
                    spellCheck={false}
                  />
                </motion.div>
              ))}

              <motion.button
                onClick={addSnippet}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full py-3 border-2 border-dashed border-border rounded-lg text-sm text-muted hover:border-accent hover:text-accent transition-colors"
              >
                + Add Snippet
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
