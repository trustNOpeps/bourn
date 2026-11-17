"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const assistanceOptions = [
  "AIRPORT ASSISTANCE",
  "VISA ASSISTANCE",
  "PRIVATE SECURITY",
  "SPECIAL OCCASION",
  "CUSTOM REQUEST",
];

export default function AnythingPage() {
  const searchParams = useSearchParams();

  const arrival = searchParams.get("arrival") ?? "";
  const departure = searchParams.get("departure") ?? "";
  const type = searchParams.get("type") ?? "";
  const travellers = searchParams.get("travellers") ?? "";
  const feel = searchParams.get("feel") ?? "";
  const area = searchParams.get("area") ?? "";
  const stay = searchParams.get("stay") ?? "";
  const transport = searchParams.get("transport") ?? "";
  const budget = searchParams.get("budget") ?? "";

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    [],
  );
  const [customRequest, setCustomRequest] = useState("");

  const toggleOption = (option: string) => {
    setSelectedOptions((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  };

  const nextUrl =
    `/plan/result?arrival=${arrival}` +
    `&departure=${departure}` +
    `&type=${type}` +
    `&travellers=${travellers}` +
    `&feel=${feel}` +
    `&area=${encodeURIComponent(area)}` +
    `&stay=${encodeURIComponent(stay)}` +
    `&transport=${encodeURIComponent(transport)}` +
    `&budget=${encodeURIComponent(budget)}` +
    `&assistance=${encodeURIComponent(selectedOptions.join(","))}`;

  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#171717]">
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Header */}
        <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <Link
            href={`/plan/budget?arrival=${arrival}&departure=${departure}&type=${type}&travellers=${travellers}&feel=${feel}&area=${encodeURIComponent(area)}&stay=${encodeURIComponent(stay)}&transport=${encodeURIComponent(transport)}`}
            className="text-sm font-semibold tracking-[0.28em]"
          >
            BOURN.
          </Link>

          <div className="text-xs tracking-[0.2em] text-black/50">
            06 / 06
          </div>
        </header>

        {/* Main */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 px-6 pb-12 pt-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:pb-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs font-medium tracking-[0.3em] text-black/60">
                ANYTHING ELSE
              </p>

              <h1 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                IS THERE
                <br />
                ANYTHING ELSE
                <br />
                WE SHOULD KNOW?
              </h1>

              <p className="mt-7 max-w-md text-base leading-7 text-black/60">
                Optional. Tell us if there&apos;s anything special
                you&apos;d like BOURN. to help arrange.
              </p>

              {/* Assistance options */}
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
                {assistanceOptions.map((option) => {
                  const selected = selectedOptions.includes(option);

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleOption(option)}
                      aria-pressed={selected}
                      className={`min-h-14 border px-4 text-left text-xs tracking-[0.12em] transition-colors ${
                        selected
                          ? "border-[#171717] bg-[#171717] text-white"
                          : "border-black/15 bg-transparent text-black/65 hover:border-black/40"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Custom request */}
              <div className="mt-8 max-w-xl">
                <label
                  htmlFor="custom-request"
                  className="mb-3 block text-xs font-medium tracking-[0.2em] text-black/60"
                >
                  TELL US ANYTHING ELSE
                </label>

                <textarea
                  id="custom-request"
                  value={customRequest}
                  onChange={(event) =>
                    setCustomRequest(event.target.value)
                  }
                  placeholder="A special occasion, accessibility need, or anything else..."
                  rows={4}
                  maxLength={500}
                  className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm leading-6 outline-none placeholder:text-black/60 focus:border-black"
                />

                <p className="mt-2 text-right text-[10px] text-black/60">
                  {customRequest.length}/500
                </p>
              </div>

              {/* CTA */}
              <div className="mt-7">
                <Link
                  href={nextUrl}
                  onClick={() => { try { sessionStorage.setItem("bourn-request", customRequest); } catch { /* storage disabled; result remains usable */ } }}
                  className="inline-flex h-14 items-center justify-center bg-[#171717] px-7 text-xs font-medium tracking-[0.2em] text-white transition-colors hover:bg-black/80"
                >
                  SEE MY BALI →
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[680px]">
              <Image fill sizes="(max-width: 768px) 100vw, 60vw"
                src="/images/home/experience.webp"
                alt="A curated Bali experience"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute bottom-6 left-6 max-w-xs text-white md:bottom-8 md:left-8">
                <p className="text-xs tracking-[0.25em] text-white/70">
                  YOUR BALI
                </p>

                <p className="mt-2 text-lg font-medium leading-tight">
                  Nothing is too specific. Tell us what matters to
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="relative z-20 px-6 pb-6 md:px-10 md:pb-8">
          <div className="mx-auto flex max-w-[1500px] items-center gap-3">
            <div className="h-px flex-1 bg-black/15">
              <div className="h-px w-full bg-black" />
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