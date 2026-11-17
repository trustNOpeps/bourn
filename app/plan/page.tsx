"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {tripNights} from "@/lib/planner/engine";
import Image from "next/image";

export default function PlanPage() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const tripLength = useMemo(() => {
    if (!arrival || !departure) return null;

    const nights = tripNights(arrival, departure);
    if (!nights) return null;

    return {
      nights,
      days: nights + 1,
    };
  }, [arrival, departure]);

  const canContinue =
    Boolean(tripLength) &&
    Boolean(arrival) &&
    Boolean(departure) &&
    Boolean(tripLength);

  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#171717]">
      <section className="relative flex min-h-screen flex-col overflow-hidden">

        {/* ───────────────── HEADER ───────────────── */}
        <header className="relative z-20 flex items-center justify-between px-6 py-7 md:px-10 md:py-8 lg:px-14">
          <Link
            href="/"
            className="text-[13px] font-semibold tracking-[0.28em] transition-opacity hover:opacity-60"
          >
            BOURN.
          </Link>

          <div className="text-[11px] tracking-[0.22em] text-black/60">
            01 / 06
          </div>
        </header>

        {/* ───────────────── MAIN ───────────────── */}
        <div className="relative z-10 flex flex-1 items-center">
          <div
            className="
              mx-auto grid w-full max-w-[1540px]
              grid-cols-1
              gap-14
              px-6 pb-14 pt-8
              md:px-10
              lg:grid-cols-[0.88fr_1.12fr]
              lg:gap-20
              lg:px-14
              lg:pb-20
            "
          >

            {/* ─────────────── CONTENT ─────────────── */}
            <div className="flex flex-col justify-center lg:py-10">

              {/* Step */}
              <p className="mb-6 text-[11px] font-medium tracking-[0.34em] text-black/60">
                WHEN
              </p>

              {/* Headline */}
              <h1
                className="
                  max-w-[720px]
                  text-[clamp(3.4rem,6.4vw,6.8rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.055em]
                "
              >
                WHEN ARE
                <br />
                YOU COMING?
              </h1>

              {/* Description */}
              <p
                className="
                  mt-8
                  max-w-[410px]
                  text-[15px]
                  leading-7
                  text-black/55
                  md:text-base
                "
              >
                Tell us when your Bali journey begins and ends.
                We&apos;ll take care of the rest.
              </p>

              {/* ───────────── DATE INPUTS ───────────── */}
              <div className="mt-12 grid max-w-[620px] gap-9 sm:grid-cols-2 sm:gap-10">

                {/* Arrival */}
                <label className="group block">
                  <span className="mb-3 block text-[10px] font-medium tracking-[0.24em] text-black/60">
                    ARRIVAL
                  </span>

                  <div className="relative">
                    <input
                      type="date"
                      value={arrival}
                      onChange={(event) =>
                        setArrival(event.target.value)
                      }
                      className="
                        h-14
                        w-full
                        appearance-none
                        rounded-none
                        border-0
                        border-b
                        border-black/20
                        bg-transparent
                        px-0
                        text-[15px]
                        outline-none
                        transition-colors
                        focus:border-black
                      "
                    />
                  </div>
                </label>

                {/* Departure */}
                <label className="group block">
                  <span className="mb-3 block text-[10px] font-medium tracking-[0.24em] text-black/60">
                    DEPARTURE
                  </span>

                  <div className="relative">
                    <input
                      type="date"
                      min={arrival || undefined}
                      value={departure}
                      onChange={(event) =>
                        setDeparture(event.target.value)
                      }
                      className="
                        h-14
                        w-full
                        appearance-none
                        rounded-none
                        border-0
                        border-b
                        border-black/20
                        bg-transparent
                        px-0
                        text-[15px]
                        outline-none
                        transition-colors
                        focus:border-black
                      "
                    />
                  </div>
                </label>
              </div>

              {/* Trip information */}
              <div className="mt-7 min-h-6">
                {tripLength ? (
                  <p className="text-[13px] tracking-wide text-black/50">
                    {tripLength.nights} nights&nbsp; · &nbsp;
                    {tripLength.days} days
                  </p>
                ) : (
                  <p className="text-[13px] text-black/60">
                    Choose your dates to continue.
                  </p>
                )}
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  href={
                    canContinue
                      ? `/plan/who?arrival=${arrival}&departure=${departure}`
                      : "#"
                  }
                  aria-disabled={!canContinue}
                  onClick={(event) => {
                    if (!canContinue) {
                      event.preventDefault();
                    }
                  }}
                  className={`
                    inline-flex
                    h-12
                    items-center
                    px-6
                    text-[10px]
                    font-medium
                    tracking-[0.24em]
                    transition-all
                    duration-300
                    ${
                      canContinue
                        ? "bg-[#171717] text-white hover:bg-black/80"
                        : "cursor-not-allowed bg-black/[0.07] text-black/25"
                    }
                  `}
                >
                  CONTINUE
                  <span className="ml-4 text-sm leading-none">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* ─────────────── VISUAL ─────────────── */}
            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                lg:min-h-[680px]
              "
            >
              <Image fill sizes="(max-width: 768px) 100vw, 60vw"
                src="/images/home/arrive.webp"
                alt="Arriving in Bali"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  hover:scale-[1.015]
                "
              />

              <div className="absolute inset-0 bg-black/[0.08]" />

              <div className="absolute bottom-7 left-7 max-w-[280px] text-white md:bottom-9 md:left-9">
                <p className="text-[10px] tracking-[0.28em] text-white/65">
                  YOUR BALI
                </p>

                <p className="mt-3 text-[17px] font-medium leading-[1.25]">
                  It starts with knowing when you&apos;ll arrive.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────── FOOTER PROGRESS ───────────────── */}
        <div className="relative z-20 px-6 pb-6 md:px-10 md:pb-8 lg:px-14">
          <div className="mx-auto flex max-w-[1540px] items-center gap-4">

            <div className="h-px flex-1 bg-black/10">
              <div className="h-px w-1/6 bg-black/70" />
            </div>

            <span className="shrink-0 text-[9px] tracking-[0.24em] text-black/60">
              PLAN YOUR BALI
            </span>
          </div>
        </div>

      </section>
    </main>
  );
}