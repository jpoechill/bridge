export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <main className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              Bridge
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A modern Next.js application built with the latest technologies and best practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="bg-foreground text-background px-8 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors">
              Get Started
            </button>
            <button className="border border-foreground/20 text-foreground px-8 py-3 rounded-lg font-medium hover:bg-foreground/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-foreground/10 bg-background/50">
            <h3 className="text-lg font-semibold mb-2">Modern Stack</h3>
            <p className="text-foreground/70">
              Built with Next.js 15, React 19, TypeScript, and Tailwind CSS for the best developer experience.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-foreground/10 bg-background/50">
            <h3 className="text-lg font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-foreground/70">
              Optimized for performance with the latest Next.js features including Turbopack for lightning-fast builds.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-foreground/10 bg-background/50">
            <h3 className="text-lg font-semibold mb-2">Ready to Scale</h3>
            <p className="text-foreground/70">
              Production-ready setup with ESLint, TypeScript, and modern development tools configured out of the box.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
