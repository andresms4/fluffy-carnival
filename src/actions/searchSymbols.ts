import { BASE_URL } from "@/lib/consts";

export async function searchSymbols(keywords: string) {
  const res = await fetch(
    `${BASE_URL}query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.ALPHA_API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
