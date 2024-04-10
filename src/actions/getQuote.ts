import { BASE_URL } from "@/lib/consts";

export async function getQuote(symbol: string) {
  const res = await fetch(
    `${BASE_URL}query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
