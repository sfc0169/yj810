import React from "react";
import { supabase } from "../../src/lib/supabaseClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランキング",
};

interface Score {
  user_id: string;
  score: number;
}

export default async function RankingPage() {
  const { data, error } = await supabase
    .from<Score>("scores")
    .select("user_id, score")
    .order("score", { ascending: false });

  if (error) {
    return (
      <main>
        <h1>ランキング</h1>
        <p>エラーが発生しました: {error.message}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>全ユーザーランキング</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>順位</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>ユーザーID</th>
            <th style={{ textAlign: "right", padding: "0.5rem" }}>スコア</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, idx) => (
            <tr key={row.user_id}>
              <td style={{ padding: "0.5rem" }}>{idx + 1}</td>
              <td style={{ padding: "0.5rem" }}>{row.user_id}</td>
              <td style={{ padding: "0.5rem", textAlign: "right" }}>
                {row.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
