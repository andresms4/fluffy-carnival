"use server";
import { searchSymbols } from "@/actions/searchSymbols";

export async function getSymbols(keyword: string) {
  try {
    return await searchSymbols(keyword);
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
