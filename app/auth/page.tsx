"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../src/lib/supabaseClient"

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      setError(error.message)
    } else {
      router.push("/")
    }
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>ログイン</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          メールアドレス
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          パスワード
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        ログインする
      </button>
    </main>
  )
}
