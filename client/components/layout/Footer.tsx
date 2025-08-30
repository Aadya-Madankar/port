export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-24">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Aadya Madankar. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm">
          <a className="hover:opacity-70" href="mailto:hello@aadya.dev">hello@aadya.dev</a>
          <a className="hover:opacity-70" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:opacity-70" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:opacity-70" href="https://x.com" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>
    </footer>
  );
}
