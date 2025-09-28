"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="container mx-auto flex max-w-md flex-col gap-6 px-4 py-12">
      <header>
        <h1 className="text-3xl font-bold">Reset password</h1>
        <p className="text-muted-foreground">We’ll send a reset link to your email.</p>
      </header>
      {!sent ? (
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <Button>Send reset link</Button>
        </form>
      ) : (
        <p className="text-sm">If an account exists, a reset link has been sent.</p>
      )}
    </main>
  )
}
