"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Placeholder only
    setTimeout(() => setLoading(false), 800)
  }
  return (
    <main className="container mx-auto flex max-w-md flex-col gap-6 px-4 py-12">
      <header>
        <h1 className="text-3xl font-bold">Create account</h1>
        <p className="text-muted-foreground">Join to plan trips and shop authentic crafts.</p>
      </header>
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button disabled={loading}>{loading ? "Creating..." : "Sign up"}</Button>
      </form>
      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/auth/login" className="underline">
          Sign in
        </Link>
      </p>
    </main>
  )
}
