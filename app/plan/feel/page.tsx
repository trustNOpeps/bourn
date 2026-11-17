"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {tripNights} from "@/lib/planner/engine";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const feelings = [
  "RELAXED",
  "ADVENTURE",
  "BEACH",
  "CULTURE",
  "FOOD",
  "WELLNESS",
  "NATURE",
  "NIGHTLIFE",
  "ROMANTIC",
];

export default function FeelPage() {
  const searchParams = useSearchParams();

  const arrival = searchParams.get("arrival") ?? "";
  const departure = searchParams.get("departure") ?? "";
  const type = searchParams.get("type") ?? "";
  const travellers = Number(searchParams.get("travellers") ?? "0");

  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);

  const tripLength = useMemo(() => {
    if (!arrival || !departure) return null;

    const nights = tripNights(arrival, departure);
    if (!nights) return null;

    return `${nights} nights · ${nights + 1} days`;
  }, [arrival, departure]);

  const toggleFeeling = (feeling: string) => {
    setSelectedFeelings((current) =>
      current.includes(feeling)
        ? current.filter((item) => item !== feeling)
        : [...current, feeling],
    );
  };

  const canContinue =
    Boolean(tripLength) &&
    Boolean(arrival) &&
    Boolean(departure) &&
    Boolean(type) &&
    travellers >= 1 &&
    selectedFeelings.length > 0;

  const nextUrl = canContinue
    ? `/plan/way?arrival=${arrival}&departure=${departure}&type=${type}&travellers=${travellers}&feel=${selectedFeelings.join(",")}`
    : "#";

  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Header */}
        <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <Link
            href={`/plan/who?arrival=${arrival}&departure=${departure}`}
            className="text-sm font-semibold tracking-[0.28em]"
          >
            BOURN.
          </Link>

          <div className="text-xs tracking-[0.2em] text-black/50">
            03 / 06
          </div>
        </header>

        {/* Main */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 px-6 pb-12 pt-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:pb-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs font-medium tracking-[0.3em] text-black/60">
                FEEL
              </p>

              <h1 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                WHAT DO YOU
                <br />
                WANT BALI
                <br />
                TO FEEL LIKE?
              </h1>

              <p className="mt-7 max-w-md text-base leading-7 text-black/60">
                Choose as many as you like. There is no wrong
                answer.
              </p>

              {/* Feelings */}
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-3">
                {feelings.map((feeling) => {
                  const selected = selectedFeelings.includes(feeling);

                  return (
                    <button
                      key={feeling}
                      type="button"
                      onClick={() => toggleFeeling(feeling)}
                      aria-pressed={selected}
                      className={`h-14 border px-4 text-xs tracking-[0.14em] transition-colors ${
                        selected
                          ? "border-[#171717] bg-[#171717] text-white"
                          : "border-black/15 bg-transparent text-black/65 hover:border-black/40"
                      }`}
                    >
                      {feeling}
                    </button>
                  );
                })}
              </div>

              {/* Selection summary */}
              <div className="mt-8 min-h-8">
                {selectedFeelings.length > 0 ? (
                  <p className="text-sm text-black/55">
                    {selectedFeelings.length}{" "}
                    {selectedFeelings.length === 1
                      ? "feeling"
                      : "feelings"}{" "}
                    selected
                  </p>
                ) : (
                  <p className="text-sm text-black/60">
                    Choose at least one.
                  </p>
                )}
              </div>

              {/* Trip summary */}
              <div className="mt-2">
                {tripLength && type ? (
                  <p className="text-sm text-black/60">
                    {tripLength} · {travellers}{" "}
                    {travellers === 1 ? "traveller" : "travellers"}{" "}
                    · {type}
                  </p>
                ) : (
                  <p className="text-sm text-black/60">
                    Your trip details are missing.
                  </p>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={nextUrl}
                  aria-disabled={!canContinue}
                  onClick={(event) => {
                    if (!canContinue) {
                      event.preventDefault();
                    }
                  }}
                  className={`inline-flex h-14 items-center justify-center px-7 text-xs font-medium tracking-[0.2em] transition-all ${
                    canContinue
                      ? "bg-[#171717] text-white hover:bg-black/80"
                      : "cursor-not-allowed bg-black/10 text-black/60"
                  }`}
                >
                  CONTINUE →
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[680px]">
              <Image fill sizes="(max-width: 768px) 100vw, 60vw"
                src="/images/home/experience.webp"
                alt="A Bali cultural experience"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 max-w-xs text-white md:bottom-8 md:left-8">
                <p className="text-xs tracking-[0.25em] text-white/70">
                  YOUR BALI
                </p>

                <p className="mt-2 text-lg font-medium leading-tight">
                  Tell us what you want to feel. We&apos;ll help
                  shape the rest.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="relative z-20 px-6 pb-6 md:px-10 md:pb-8">
          <div className="mx-auto flex max-w-[1500px] items-center gap-3">
            <div className="h-px flex-1 bg-black/15">
              <div className="h-px w-3/6 bg-black" />
            </div>

            <span className="text-[10px] tracking-[0.2em] text-black/60">
              PLAN YOUR BALI
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}