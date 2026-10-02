import { useState } from "react";
import { ArrowUpRight, Award, Crown, X } from "lucide-react";

const navItems = ["Projects", "Studio", "Offerings", "Inquire"];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Navbar */}
      <header className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <a
          href="#"
          className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
        >
          VANGUARD
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-inter text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10 md:flex"
        >
          GET IN TOUCH
          <ArrowUpRight className="h-4 w-4" />
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="flex flex-col items-end gap-1.5 md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-4 bg-white" />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay header */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
          >
            VANGUARD
          </a>
          <button
            type="button"
            aria-label="Close menu"
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* Overlay links */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`transform font-podium text-4xl uppercase text-white transition-all duration-500 sm:text-5xl ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              {item}
            </a>
          ))}

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`mt-4 flex transform items-center gap-2 border border-white/30 px-8 py-4 font-inter text-xs uppercase tracking-widest text-white transition-all duration-500 hover:border-white/60 hover:bg-white/10 sm:text-sm ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: `${navItems.length * 80 + 100}ms` }}
          >
            GET IN TOUCH
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-24 sm:px-10 lg:px-16 lg:pt-32">
        <div className="max-w-5xl">
          {/* Tagline */}
          <div className="mb-6 flex items-center gap-3 animate-fade-up lg:mb-8">
            <Crown className="h-4 w-4 text-white/70" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              World-Class Digital Collective
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-podium text-[clamp(2.8rem,8vw,7rem)] font-bold uppercase leading-[0.92] tracking-tight text-white animate-fade-up-delay-1">
            <span className="block">Design.</span>
            <span className="block">Disrupt.</span>
            <span className="block">Conquer.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 animate-fade-up-delay-2 sm:text-base lg:mt-8">
            We build fierce brand identities
            <br />
            that don't just turn heads —{" "}
            <span className="font-bold text-white">they lead.</span>
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10 animate-fade-up-delay-3">
            <a
              href="#"
              className="group flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
            >
              SEE OUR WORK
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="hidden items-center gap-3 sm:flex">
              <Award className="h-8 w-8 text-white/50" />
              <div className="font-inter text-xs uppercase tracking-wider text-white/60">
                <p>Top-Rated</p>
                <p>Brand Studio</p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16 animate-fade-up-delay-4">
            <div>
              <p className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                250+
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                Brands Transformed
              </p>
            </div>
            <div>
              <p className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                95%
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                Client Retention
              </p>
            </div>
            <div>
              <p className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                10+
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                Years in the Game
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
