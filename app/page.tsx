"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0b0a] text-[#f5f3ee]">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,color,backdrop-filter] duration-300 ${
          pastHero
            ? "border-black/10 bg-[#e9e5dc]/95 text-[#11110f] backdrop-blur-md"
            : "border-transparent bg-transparent text-[#f5f3ee]"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
    <Link
  href="/"
  aria-label="BOURN. home"
  className="text-xl font-medium tracking-[0.28em]"
>
  BOURN.
</Link>

          <nav
            className={`hidden items-center gap-8 text-sm md:flex ${
              pastHero ? "text-black/65" : "text-white/70"
            }`}
          >
            <a href="#journey" className="hover:opacity-100">
              Explore
            </a>
            <a href="#journey" className="hover:opacity-100">
              How It Works
            </a>
            <a href="/plan" className="hover:opacity-100">
              Trip planner
            </a>
            <a
              href="/plan"
              className={`rounded-full border px-5 py-2.5 ${
                pastHero
                  ? "border-black/20 hover:border-black/40"
                  : "border-white/20 hover:border-white/40"
              }`}
            >
              Plan My Trip
            </a>
          </nav>

          <a
            href="/plan"
            className={`rounded-full border px-4 py-2 text-sm md:hidden ${
              pastHero ? "border-black/20" : "border-white/20"
            }`}
          >
            Plan
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image fill sizes="(max-width: 768px) 100vw, 60vw"
  src="/images/home/hero.webp"
  priority
  alt=""
  aria-hidden="true"
  className="bourn-hero-image absolute inset-0 h-full w-full object-cover"
/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(120,110,85,0.28),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(70,75,60,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,10,0.35),rgba(11,11,10,0.72)_70%,#0b0b0a_100%)]" />

        <div className="absolute right-[-10%] top-[18%] h-[55vw] w-[55vw] max-h-[720px] max-w-[720px] rounded-full border border-white/[0.06]" />
        <div className="absolute right-[4%] top-[30%] h-[38vw] w-[38vw] max-h-[500px] max-w-[500px] rounded-full border border-white/[0.05]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-24">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/70">
              Bali Travel Planning & Concierge · Preview
            </p>

            <h1 className="max-w-4xl text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.84] tracking-[-0.055em]">
              YOUR BALI.
              <br />
              <span className="text-white/55">ARRANGED.</span>
            </h1>

            <div className="mt-10 flex max-w-xl flex-col gap-6">
              <p className="text-lg leading-8 text-white/65 md:text-xl">
                Plan, budget, and arrange your Bali trip — all in one place.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/plan"
                  className="inline-flex items-center justify-center rounded-full bg-[#f5f3ee] px-7 py-4 text-sm font-medium text-[#0b0b0a]"
                >
                  Plan My Trip
                </a>

                <a
                  href="#journey"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium"
                >
                  Help Me Plan
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-white/70">
            <span className="h-px w-10 bg-white/20" />
            Scroll to explore
          </div>
        </div>
      </section>

      <section id="journey" className="bg-[#e9e5dc] text-[#11110f]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
          <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.3em] text-black/60">
                  01
                </span>
                <span className="h-px w-12 bg-black/15" />
                <span className="text-xs uppercase tracking-[0.3em] text-black/60">
                  Arrive
                </span>
              </div>

              <p className="mt-8 max-w-[180px] text-sm leading-6 text-black/60">
                The journey starts before you leave the airport.
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[clamp(4.5rem,11vw,10rem)] font-medium leading-[0.82] tracking-[-0.065em]">
                ARRIVE.
              </h2>

              <p className="mt-10 max-w-xl text-xl leading-8 text-black/55 md:text-2xl md:leading-9">
                Your first moments in Bali should feel effortless. We help
                arrange the journey from the moment you land.
              </p>

              <div className="relative mt-16 min-h-[65vh] overflow-hidden rounded-[2rem] bg-[#171715]">
               <Image fill sizes="(max-width: 768px) 100vw, 60vw"
  src="/images/home/arrive.webp"
  alt="Traveler arriving in Bali and meeting a local driver"
  className="absolute inset-0 h-full w-full object-cover"
/>

<div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />

                <p className="absolute left-8 top-8 text-xs uppercase tracking-[0.3em] text-white/70">
                  Bali / Arrival
                </p>

                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
                  <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                    <div>
                      <p className="text-sm text-white/70">
                        Airport transfer · Assistance · Driver
                      </p>
                      <h3 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
                        ARRIVAL,
                        <br />
                        ARRANGED.
                      </h3>
                    </div>

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 text-xs tracking-[0.2em] text-white/70">
                      01
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid border-t border-black/10 md:grid-cols-3">
                {[
                  ["01", "Airport Transfer", "A reliable ride waiting when you arrive."],
                  ["02", "Airport Assistance", "Support when you need a smoother arrival."],
                  ["03", "Private Driver", "Continue your journey with local support."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  >
                    <p className="text-xs tracking-[0.2em] text-black/60">
                      {number}
                    </p>
                    <h3 className="mt-8 text-xl font-medium tracking-[-0.03em]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xs leading-7 text-black/50">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.25em] text-black/60">
              Next — Stay
            </p>
            <span className="text-sm text-black/60">↓</span>
          </div>
        </div>
      </section>
      <section className="bg-[#e9e5dc] text-[#11110f]">
  <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36">
    <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.3em] text-black/60">
            02
          </span>

          <span className="h-px w-12 bg-black/15" />

          <span className="text-xs uppercase tracking-[0.3em] text-black/60">
            Stay
          </span>
        </div>

        <p className="mt-8 max-w-[200px] text-sm leading-6 text-black/60">
          Find a place that fits how you want to experience Bali.
        </p>

        <div className="mt-10 space-y-5 text-sm text-black/55">
          <div>Villa</div>
          <div>Hotel</div>
          <div>Resort</div>
          <div>Boutique Stay</div>
        </div>

        <Link
          href="/plan"
          className="mt-12 text-sm font-medium transition-opacity hover:opacity-60"
        >
          Plan your stay <span className="ml-2">→</span>
        </Link>
      </div>

      <div>
        <div className="relative min-h-[65vh] overflow-hidden rounded-[2rem] bg-[#171715]"><Image fill sizes="(max-width: 768px) 100vw, 60vw"
  src="/images/home/stay.webp"
  alt="Bali villa with pool and ocean view at sunset"
  className="absolute inset-0 h-full w-full object-cover"
/>

<div className="absolute inset-0 bg-black/20" />
     

          <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />

          <p className="absolute left-8 top-8 text-xs uppercase tracking-[0.3em] text-white/70">
            Bali / Stay
          </p>

          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <p className="text-sm text-white/70">
                  Villas · Hotels · Resorts · Boutique Stays
                </p>

                <h3 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
                  STAY,
                  <br />
                  YOUR WAY.
                </h3>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 text-xs tracking-[0.2em] text-white/70">
                02
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#e9e5dc] text-[#11110f]">
  <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36">
    <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.3em] text-black/60">
            03
          </span>

          <span className="h-px w-12 bg-black/15" />

          <span className="text-xs uppercase tracking-[0.3em] text-black/60">
            Move
          </span>
        </div>

        <p className="mt-8 max-w-[200px] text-sm leading-6 text-black/60">
          Move through Bali without worrying about how to get there.
        </p>

        <div className="mt-10 space-y-5 text-sm text-black/55">
          <div>Private Driver</div>
          <div>Airport Transfer</div>
          <div>Car Rental</div>
          <div>Scooter Rental</div>
        </div>

        <Link
          href="/plan"
          className="mt-12 text-sm font-medium transition-opacity hover:opacity-60"
        >
          Plan your transport <span className="ml-2">→</span>
        </Link>
      </div>

      <div>
        <div className="relative min-h-[65vh] overflow-hidden rounded-[2rem] bg-[#171715]">
          <Image fill sizes="(max-width: 768px) 100vw, 60vw"
            src="/images/home/move.webp"
            alt="Driving through Bali with rice fields, temples, palms and mountains"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />

          <p className="absolute left-8 top-8 text-xs uppercase tracking-[0.3em] text-white/70">
            Bali / Move
          </p>

          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <p className="text-sm text-white/70">
                  Driver · Car Rental · Scooter · Transfer
                </p>

                <h3 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
                  MOVE,
                  <br />
                  YOUR WAY.
                </h3>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 text-xs tracking-[0.2em] text-white/70">
                03
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#e9e5dc] text-[#11110f]">
  <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36">
    <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.3em] text-black/60">
            04
          </span>

          <span className="h-px w-12 bg-black/15" />

          <span className="text-xs uppercase tracking-[0.3em] text-black/60">
            Experience
          </span>
        </div>

        <p className="mt-8 max-w-[210px] text-sm leading-6 text-black/60">
          Don’t just visit Bali. Experience it.
        </p>

        <div className="mt-10 space-y-5 text-sm text-black/55">
          <div>Culture</div>
          <div>Nature</div>
          <div>Adventure</div>
          <div>Beach</div>
          <div>Wellness</div>
          <div>Food</div>
          <div>Nightlife</div>
        </div>

        <Link
          href="/plan"
          className="mt-12 text-sm font-medium transition-opacity hover:opacity-60"
        >
          Plan your experiences <span className="ml-2">→</span>
        </Link>
      </div>

      <div>
        <div className="relative min-h-[65vh] overflow-hidden rounded-[2rem] bg-[#171715]">
          <Image fill sizes="(max-width: 768px) 100vw, 60vw"
            src="/images/home/experience.webp"
            alt="Balinese cultural experience at sunset"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />

          <p className="absolute left-8 top-8 text-xs uppercase tracking-[0.3em] text-white/70">
            Bali / Experience
          </p>

          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <p className="text-sm text-white/70">
                  Culture · Nature · Adventure · Wellness
                </p>

                <h3 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
                  EXPERIENCE,
                  <br />
                  YOUR WAY.
                </h3>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 text-xs tracking-[0.2em] text-white/70">
                04
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#11110f] text-[#f5f3ee]">
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
    <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
      <div>
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.3em] text-white/70">
            05
          </span>

          <span className="h-px w-12 bg-white/15" />

          <span className="text-xs uppercase tracking-[0.3em] text-white/70">
            Budget
          </span>
        </div>

        <p className="mt-8 max-w-[210px] text-sm leading-6 text-white/70">
          See what your Bali journey could cost before you commit.
        </p>
      </div>

      <div>
        <h2 className="max-w-4xl text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
          SEE THE
          <br />
          <span className="text-white/70">COST.</span>
        </h2>

        <div className="mt-16 border-t border-white/15">
          {[
            ["Accommodation", "Rp 4.500.000"],
            ["Transportation", "Rp 1.200.000"],
            ["Experiences", "Rp 2.000.000"],
            ["Estimated Food", "Rp 1.500.000"],
            ["Additional Services", "Rp 500.000"],
          ].map(([label, price]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-white/10 py-6"
            >
              <span className="text-sm text-white/70 md:text-base">
                {label}
              </span>

              <span className="text-lg font-medium tracking-[-0.02em] md:text-xl">
                {price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">
              Estimated Trip Cost
            </p>

            <p className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              Rp 9.700.000
            </p>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/30 sm:block">
            Estimate only
          </span>
        </div>

        <p className="mt-8 max-w-xl text-sm leading-7 text-white/70">
          Prices are estimates and may vary depending on your dates,
          preferences, availability, and selected services.
        </p>
      </div>
    </div>
  </div>

  <div className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <p className="text-xs uppercase tracking-[0.25em] text-white/30">
        Next — Arrange
      </p>

      <span className="text-sm text-white/30">↓</span>
    </div>
  </div>
</section>
<section className="bg-[#e9e5dc] text-[#11110f]">
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
    <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr]">
      <div>
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.3em] text-black/60">
            06
          </span>

          <span className="h-px w-12 bg-black/15" />

          <span className="text-xs uppercase tracking-[0.3em] text-black/60">
            Arrange
          </span>
        </div>

        <p className="mt-8 max-w-[210px] text-sm leading-6 text-black/60">
          Tell us what you need. We’ll help arrange the rest.
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">
          Your Bali, arranged.
        </p>

        <h2 className="mt-8 max-w-4xl text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.84] tracking-[-0.06em]">
          TELL US
          <br />
          <span className="text-black/60">WHAT YOU NEED.</span>
        </h2>

        <p className="mt-10 max-w-xl text-xl leading-8 text-black/55 md:text-2xl md:leading-9">
          From airport transfers to stays, transport, experiences, and
          special requests — we’ll help bring your Bali plans together.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/plan"
            className="inline-flex items-center justify-center rounded-full bg-[#11110f] px-7 py-4 text-sm font-medium text-[#f5f3ee] transition-opacity hover:opacity-80"
          >
            Arrange My Trip
          </a>

          <a
            href="/plan"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-sm font-medium transition-colors hover:border-black/30"
          >
            Help Me Plan
          </a>
        </div>

        <div className="mt-20 grid border-t border-black/10 md:grid-cols-3">
          {[
            ["01", "Choose", "Select the services that fit your journey."],
            ["02", "Request", "Tell us what you need and when."],
            ["03", "Arrange", "We coordinate the details for you."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="text-xs tracking-[0.2em] text-black/60">
                {number}
              </p>

              <h3 className="mt-8 text-xl font-medium tracking-[-0.03em]">
                {title}
              </h3>

              <p className="mt-3 max-w-xs leading-7 text-black/50">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-black/10">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <p className="text-xs uppercase tracking-[0.25em] text-black/60">
        Next — Your Bali
      </p>

      <span className="text-sm text-black/60">↓</span>
    </div>
  </div>
</section>
<section className="bg-[#11110f] text-[#f5f3ee]">
  <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
    <div className="max-w-5xl">
      <p className="text-xs uppercase tracking-[0.3em] text-white/70">
        Your Bali starts here.
      </p>

      <h2 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.06em]">
        READY FOR
        <br />
        <span className="text-white/70">YOUR BALI?</span>
      </h2>

      <p className="mt-10 max-w-xl text-xl leading-8 text-white/55 md:text-2xl">
        Plan it. Budget it. Arrange it.
      </p>

      <a
        href="/plan"
        className="mt-12 inline-flex items-center justify-center rounded-full bg-[#f5f3ee] px-8 py-4 text-sm font-medium text-[#11110f] transition-opacity hover:opacity-80"
      >
        Plan My Trip <span className="ml-3">→</span>
      </a>
    </div>
  </div>
</section>

<footer className="bg-[#11110f] text-[#f5f3ee]">
  <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-10 lg:px-10">
    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
      <div>
      <Link
  href="/"
  className="text-xl font-medium tracking-[0.28em]"
>
  BOURN.
</Link>

        <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
          Beyond destinations. Bali travel planning and concierge.
        </p>
      </div>

      <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/70">
        <a href="#journey" className="transition-colors hover:text-white">
          Explore
        </a>

        <a href="/plan" className="transition-colors hover:text-white">
          Plan My Trip
        </a>

        <a href="/plan" className="transition-colors hover:text-white">
          Trip planner
        </a>

        <a href="/plan" className="transition-colors hover:text-white">
          Concierge
        </a>
      </nav>
    </div>

    <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
      <p>© 2026 BOURN. All rights reserved.</p>

      <p>Bali, Indonesia</p>
    </div>
  </div>
</footer>
    </main>
  );
}