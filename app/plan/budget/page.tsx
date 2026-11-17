"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {tripNights} from "@/lib/planner/engine";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const budgets = [
  "UNDER RP5M",
  "RP5–10M",
  "RP10–20M",
  "RP20–40M",
  "RP40M+",
  "NOT SURE",
];

export default function BudgetPage() {
  const searchParams = useSearchParams();

  const arrival = searchParams.get("arrival") ?? "";
  const departure = searchParams.get("departure") ?? "";
  const type = searchParams.get("type") ?? "";
  const travellers = Number(searchParams.get("travellers") ?? "0");
  const feel = searchParams.get("feel") ?? "";
  const area = searchParams.get("area") ?? "";
  const stay = searchParams.get("stay") ?? "";
  const transport = searchParams.get("transport") ?? "";

  const [budget, setBudget] = useState("");

  const tripLength = useMemo(() => {
    if (!arrival || !departure) return null;

    const nights = tripNights(arrival, departure);
    if (!nights) return null;

    return `${nights} nights · ${nights + 1} days`;
  }, [arrival, departure]);

  const canContinue =
    Boolean(tripLength) &&
    Boolean(arrival) &&
    Boolean(departure) &&
    Boolean(type) &&
    travellers >= 1 &&
    Boolean(feel) &&
    Boolean(area) &&
    Boolean(stay) &&
    Boolean(transport) &&
    Boolean(budget);

  const nextUrl = canContinue
    ? `/plan/anything?arrival=${arrival}&departure=${departure}&type=${type}&travellers=${travellers}&feel=${feel}&area=${encodeURIComponent(area)}&stay=${encodeURIComponent(stay)}&transport=${encodeURIComponent(transport)}&budget=${encodeURIComponent(budget)}`
    : "#";

  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Header */}
        <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <Link
            href={`/plan/way?arrival=${arrival}&departure=${departure}&type=${type}&travellers=${travellers}&feel=${feel}&area=${encodeURIComponent(area)}&stay=${encodeURIComponent(stay)}&transport=${encodeURIComponent(transport)}`}
            className="text-sm font-semibold tracking-[0.28em]"
          >
            BOURN.
          </Link>

          <div className="text-xs tracking-[0.2em] text-black/50">
            05 / 06
          </div>
        </header>

        {/* Main */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 px-6 pb-12 pt-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:pb-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs font-medium tracking-[0.3em] text-black/60">
                BUDGET
              </p>

              <h1 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                HOW MUCH DO
                <br />
                YOU WANT
                <br />
                TO SPEND?
              </h1>

              <p className="mt-7 max-w-md text-base leading-7 text-black/60">
                An approximate range is enough. We&apos;ll help
                shape the trip around it.
              </p>

              {/* Budget options */}
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-3">
                {budgets.map((item) => {
                  const selected = budget === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBudget(item)}
                      aria-pressed={selected}
                      className={`h-14 border px-4 text-xs tracking-[0.12em] transition-colors ${
                        selected
                          ? "border-[#171717] bg-[#171717] text-white"
                          : "border-black/15 bg-transparent text-black/65 hover:border-black/40"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              {/* Budget note */}
              <div className="mt-8 min-h-8">
                {budget ? (
                  <p className="text-sm text-black/55">
                    Budget range: {budget}
                  </p>
                ) : (
                  <p className="text-sm text-black/60">
                    Choose the range that feels right.
                  </p>
                )}
              </div>

              {/* Trip summary */}
              <div className="mt-2">
                {tripLength ? (
                  <p className="text-sm text-black/60">
                    {tripLength} · {travellers}{" "}
                    {travellers === 1 ? "traveller" : "travellers"}{" "}
                    · {area}
                  </p>
                ) : (
                  <p className="text-sm text-black/60">
                    Some trip details are missing.
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
                src="/images/home/stay.webp"
                alt="A stay in Bali"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 max-w-xs text-white md:bottom-8 md:left-8">
                <p className="text-xs tracking-[0.25em] text-white/70">
                  YOUR BALI
                </p>

                <p className="mt-2 text-lg font-medium leading-tight">
                  Your budget helps us find the right balance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="relative z-20 px-6 pb-6 md:px-10 md:pb-8">
          <div className="mx-auto flex max-w-[1500px] items-center gap-3">
            <div className="h-px flex-1 bg-black/15">
              <div className="h-px w-5/6 bg-black" />
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