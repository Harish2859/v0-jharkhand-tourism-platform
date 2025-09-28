"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 600)
  }
  return (
    <main className="container mx-auto flex max-w-md flex-col gap-6 px-4 py-12">
      <header>
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-muted-foreground">Welcome back to Jharkhand Tourism.</p>
      </header>
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
      </form>
      <div className="flex items-center justify-between text-sm">
        <Link href="/auth/forgot-password" className="underline">
          Forgot password?
        </Link>
        <Link href="/auth/register" className="underline">
          Create account
        </Link>
      </div>
    </main>
  )
}
