import {Suspense} from "react";
export default function PlannerLayout({children}: {children: React.ReactNode}) {
 return <Suspense fallback={<main className="p-10">Preparing your journey…</main>}>{children}</Suspense>;
}
