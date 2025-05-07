import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ゲームスタート",
};

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>ゲームへようこそ</h1>
      <nav style={{ margin: "2rem 0" }}>
        <Link href="/auth" style={{ marginRight: "1rem" }}>ログイン</Link>
        <Link href="/ranking">ランキング</Link>
      </nav>
      <button
        onClick={() => {/* ゲーム開始ロジックをここに追加 */}}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        ゲームスタート
      </button>
    </main>
  );
}
