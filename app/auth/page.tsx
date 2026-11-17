"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {

  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) { setMessage("Accounts are not enabled in this preview. You can plan without signing in."); return; }
    const supabase = createClient();
    setLoading(true);
    setMessage("");

    try {
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
      } else {
     router.push("/");
      }
    } else {
  const { error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    emailRedirectTo: `${window.location.origin}/auth/confirm`,
  },
});

      if (error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Account created. Please check your email if verification is required.",
        );
      }
    }

    } catch { setMessage("Unable to connect. Please try again."); } finally { setLoading(false); }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <p className="text-sm font-medium tracking-[0.2em]">BOURN.</p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight">
            {isLogin ? "Welcome back." : "Create your account."}
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">
            {isLogin
              ? "Sign in to continue planning your Bali trip."
              : "Create an account to save and manage your Bali trip."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2"
              placeholder="••••••••"
            />
          </div>

          {message && (
            <p className="rounded-lg border px-4 py-3 text-sm">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity disabled:opacity-50"
          >
            {loading
              ? "Please wait..."
              : isLogin
                ? "Sign In"
                : "Create Account"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
          className="mt-6 w-full text-center text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          {isLogin
            ? "Don't have an account? Create one"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}