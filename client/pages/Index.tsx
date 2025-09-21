import { useEffect } from "react";
import useRevealOnScroll from "@/hooks/use-reveal";
import { motion } from "framer-motion";

export default function Index() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  useRevealOnScroll();

  return (
    <div>
      {/* Hero */}
      <section className="container pb-20 pt-8 md:pt-16 reveal">
        <div className="flex items-start justify-between gap-6">
          <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <motion.h1 className="text-[14vw] leading-[0.9] md:text-[8rem] font-semibold tracking-tight select-none" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.8, ease: "easeOut" }}>
              Aadya
              <br />
              Madankar
            </motion.h1>
          </motion.div>
          <motion.div className="hidden md:flex flex-col items-end gap-6 pt-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}>
            <p className="max-w-sm text-sm leading-relaxed opacity-80">
              AI engineer and GenAI developer building agentic systems, RAG
              pipelines, and developer experience for high‑impact products.
            </p>
            <div className="relative">
              <motion.div className="size-28 rounded-full border border-border grid place-items-center" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ scale: 1.05 }}>
                <span className="text-[10px] uppercase tracking-widest">
                  Available
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="mt-10 overflow-hidden border-y border-border py-3">
          <div className="flex whitespace-nowrap animate-marquee gap-10 text-sm uppercase tracking-[0.2em]">
            <span>RAG</span>
            <span>—</span>
            <span>Agents</span>
            <span>—</span>
            <span>LLMOps</span>
            <span>—</span>
            <span>Tool Use</span>
            <span>—</span>
            <span>Vector Search</span>
            <span>—</span>
            <span>Evaluation</span>
            <span>—</span>
            <span>Observability</span>
            <span>—</span>
            <span>Streaming</span>
            <span>—</span>
            <span>RAG</span>
            <span>—</span>
            <span>Agents</span>
            <span>—</span>
            <span>LLMOps</span>
            <span>—</span>
            <span>Tool Use</span>
            <span>—</span>
            <span>Vector Search</span>
            <span>—</span>
            <span>Evaluation</span>
            <span>—</span>
            <span>Observability</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-20 reveal">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              About
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              I design and build GenAI systems: retrieval‑augmented generation,
              multi‑agent orchestration, and production‑ready APIs with strong
              evaluation and observability. Pragmatic about latency, cost, and
              reliability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {[
                "Python",
                "TypeScript",
                "FastAPI",
                "React",
                "LangChain",
                "LlamaIndex",
                "vLLM",
                "OpenAI",
                "Anthropic",
                "Pinecone",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
            <img
              alt="Portrait"
              src="https://cdn.builder.io/api/v1/image/assets%2F9674347e407d47f0bb2125b1c6e66204%2F73b8e9fe8c5e411abbc29af03738f6c0?format=webp&width=800"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container py-20 reveal">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Selected projects
          </h2>
          <a
            href="#contact"
            className="text-sm underline underline-offset-4 hover:no-underline"
          >
            Get in touch
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Giving Abilities to AI"
            subtitle="Vision, ASR and TTS with Gemini"
            year="Live"
            image="https://aadya-madankar.github.io/Portfolio/assets/projectt.png"
            link="https://jarvis-sand.vercel.app/"
          />
          <ProjectCard
            title="Colab‑Devin"
            subtitle="Run Open‑Devin in Google Colab"
            year="2024"
            image="https://aadya-madankar.github.io/Portfolio/assets/project.png"
            link="https://colab.research.google.com/drive/1HuOz-QIo0Vj2C7dJYaKHNS1HbLUa50No?usp=sharing"
          />
          <ProjectCard
            title="Multi‑Modal Screen Assistant"
            subtitle="See screen, hear voice, act"
            year="2024"
            image="https://aadya-madankar.github.io/Portfolio/assets/projectttt.jpg"
            link="https://github.com/Aadya1603/Multi-Modal-Screen-to-Voice-Assistant"
          />
          <ProjectCard
            title="Ollama × Streamlit UI"
            subtitle="Interactive UI for Ollama"
            year="2023"
            image="https://aadya-madankar.github.io/Portfolio/assets/ollama.png"
            link="https://github.com/Aadya1603/Ollama_UI"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20 reveal">
        <div className="border border-border rounded-2xl p-10 md:p-14 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.06),_transparent)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                Let’s ship your GenAI product
              </h3>
              <p className="mt-3 opacity-80">
                Available worldwide · Remote friendly
              </p>
            </div>
            <a
              href="mailto:hello@aadya.dev"
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 hover:opacity-90"
            >
              hello@aadya.dev
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  title,
  subtitle,
  year,
  image,
  link,
}: {
  title: string;
  subtitle: string;
  year: string;
  image: string;
  link?: string;
}) {
  return (
    <motion.a
      className="group relative overflow-hidden rounded-2xl border border-border"
      href={link ?? "#contact"}
      target={link ? "_blank" : undefined}
      rel={link ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-transparent group-hover:bg-foreground/10 transition-colors" />
      </div>
      <div className="relative z-10 flex h-72 flex-col justify-between p-6 md:h-[28rem]">
        <div />
        <div className="flex items-end justify-between">
          <div>
            <h4 className="text-xl md:text-2xl font-semibold tracking-tight">
              {title}
            </h4>
            <p className="opacity-80 text-sm md:text-base">{subtitle}</p>
          </div>
          <span className="text-sm opacity-60">{year}</span>
        </div>
      </div>
    </motion.a>
  );
}
