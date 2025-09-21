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
          <div className="max-w-2xl">
            <h1 className="text-[14vw] leading-[0.9] md:text-[8rem] font-semibold tracking-tight select-none">
              Aadya
              <br />
              Madankar
            </h1>
          </div>
          <div className="hidden md:flex flex-col items-end gap-6 pt-4">
            <p className="max-w-sm text-sm leading-relaxed opacity-80">
              AI engineer and GenAI developer building agentic systems, RAG
              pipelines, and developer experience for high‑impact products.
            </p>
            <div className="relative">
              <div className="size-28 rounded-full border border-border grid place-items-center">
                <span className="text-[10px] uppercase tracking-widest">
                  Available
                </span>
              </div>
            </div>
          </div>
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
          <div className="md:col-span-2">
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
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
            <img
              alt="Portrait"
              src="/images/portrait.svg"
              className="h-full w-full object-cover"
            />
          </div>
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
            title="RAG Platform"
            subtitle="Vector‑backed Retrieval"
            year="2024"
            image="/images/project-1.svg"
          />
          <ProjectCard
            title="Agent Orchestrator"
            subtitle="Multi‑tool Agents"
            year="2023"
            image="/images/project-2.svg"
          />
          <ProjectCard
            title="Code Copilot"
            subtitle="Developer UX"
            year="2023"
            image="/images/project-3.svg"
          />
          <ProjectCard
            title="Real‑time Analytics"
            subtitle="Streaming & Dashboards"
            year="2022"
            image="/images/project-4.svg"
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
}: {
  title: string;
  subtitle: string;
  year: string;
  image: string;
}) {
  return (
    <a
      className="group relative overflow-hidden rounded-2xl border border-border"
      href="#contact"
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
    </a>
  );
}
