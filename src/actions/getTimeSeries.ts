import { BASE_URL } from "@/lib/consts";

export async function getTimeSeries(symbol: string, timeSeries: string) {
  const URL = `${BASE_URL}query?function=${timeSeries}&symbol=${symbol}&apikey=${process.env.ALPHA_API_KEY}`;
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
