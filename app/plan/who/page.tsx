"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {tripNights} from "@/lib/planner/engine";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const travelTypes = [
  "SOLO",
  "COUPLE",
  "FAMILY",
  "FRIENDS",
  "GROUP",
];

export default function WhoPage() {
  const searchParams = useSearchParams();

  const arrival = searchParams.get("arrival") ?? "";
  const departure = searchParams.get("departure") ?? "";

  const [travelType, setTravelType] = useState("");
  const [travellers, setTravellers] = useState(2);

  const tripLength = useMemo(() => {
    if (!arrival || !departure) return null;

    const nights = tripNights(arrival, departure);
    if (!nights) return null;

    return `${nights} nights · ${nights + 1} days`;
  }, [arrival, departure]);

  const canContinue =
    Boolean(travelType) &&
    travellers >= 1 &&
    Boolean(tripLength) &&
    Boolean(arrival) &&
    Boolean(departure);

  const nextUrl = canContinue
    ? `/plan/feel?arrival=${arrival}&departure=${departure}&type=${travelType.toLowerCase()}&travellers=${travellers}`
    : "#";

  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Header */}
        <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <Link
            href="/plan"
            className="text-sm font-semibold tracking-[0.28em]"
          >
            BOURN.
          </Link>

          <div className="text-xs tracking-[0.2em] text-black/50">
            02 / 06
          </div>
        </header>

        {/* Main */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 px-6 pb-12 pt-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:pb-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs font-medium tracking-[0.3em] text-black/60">
                WHO
              </p>

              <h1 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                WHO ARE YOU
                <br />
                TRAVELLING WITH?
              </h1>

              <p className="mt-7 max-w-md text-base leading-7 text-black/60">
                A little context helps us shape a better Bali
                experience for you.
              </p>

              {/* Travel type */}
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-3">
                {travelTypes.map((type) => {
                  const selected = travelType === type;

                  return (
                    <button
                      key={type}
                      aria-pressed={selected}
                      type="button"
                      onClick={() => {
                        setTravelType(type);

                        if (type === "SOLO") {
                          setTravellers(1);
                        } else if (type === "COUPLE") {
                          setTravellers(2);
                        } else if (travellers < 2) {
                          setTravellers(2);
                        }
                      }}
                      className={`h-14 border px-4 text-xs tracking-[0.16em] transition-colors ${
                        selected
                          ? "border-[#171717] bg-[#171717] text-white"
                          : "border-black/15 bg-transparent text-black/65 hover:border-black/40"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>

              {/* Traveller count */}
              <div className="mt-10 max-w-xl">
                <span className="text-xs font-medium tracking-[0.2em] text-black/60">
                  HOW MANY TRAVELLERS?
                </span>

                <div className="mt-4 flex h-16 items-center border-b border-black/20">
                  <button
                    type="button"
                    aria-label="Decrease travellers"
                    onClick={() =>
                      setTravellers((current) =>
                        Math.max(1, current - 1),
                      )
                    }
                    className="flex h-full w-14 items-center justify-start text-xl text-black/50 transition-colors hover:text-black"
                  >
                    −
                  </button>

                  <span className="min-w-16 text-center text-lg">
                    {travellers}
                  </span>

                  <button
                    type="button"
                    aria-label="Increase travellers"
                    onClick={() =>
                      setTravellers((current) =>
                        Math.min(20, current + 1),
                      )
                    }
                    className="flex h-full w-14 items-center justify-end text-xl text-black/50 transition-colors hover:text-black"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Trip summary */}
              <div className="mt-8 min-h-8">
                {tripLength ? (
                  <p className="text-sm text-black/55">
                    {tripLength} · {travellers}{" "}
                    {travellers === 1 ? "traveller" : "travellers"}
                  </p>
                ) : (
                  <p className="text-sm text-black/60">
                    Your dates are missing. Go back to WHEN.
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
                  The people you travel with shape the journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="relative z-20 px-6 pb-6 md:px-10 md:pb-8">
          <div className="mx-auto flex max-w-[1500px] items-center gap-3">
            <div className="h-px flex-1 bg-black/15">
              <div className="h-px w-2/6 bg-black" />
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