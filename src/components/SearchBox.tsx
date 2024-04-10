"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getSymbols } from "@/lib/searchSymbols";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IMatch {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

export default function SearchBox() {
  const [matches, setMatches] = useState<IMatch[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const getResults = (keyword: string) => {
    setLoading(true);
    getSymbols(keyword)
      .then((res) => {
        setMatches(res.bestMatches);
      })
      .catch((err) => toast(err.message))
      .finally(() => setLoading(false));
  };
  return (
    <>
      <Command shouldFilter={false} className="w-full md:w-1/2">
        <CommandInput
          value={value}
          placeholder="Type a command or search..."
          onChangeCapture={(e) => {
            getResults(e.currentTarget.value);
            setValue(e.currentTarget.value);
          }}
        />
        <CommandList>
          {loading && <CommandEmpty>Loading...</CommandEmpty>}
          {matches?.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          {matches!?.length > 0 && (
            <CommandGroup heading="Suggestions">
              {matches?.map((item, index) => {
                return (
                  <CommandItem
                    key={index}
                    className="w-full flex flex-row items-center justify-between"
                    onSelect={(e) => {
                      setValue("");
                      setMatches(null);
                      router.push(
                        `/?symbol=${e}&interval=5min&timeSeries=TIME_SERIES_INTRADAY`,
                      );
                    }}
                  >
                    <span>{item["1. symbol"]}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </>
  );
}
