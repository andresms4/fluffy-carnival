import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBox from "@/components/SearchBox";
import SymbolDetails from "@/components/SymbolDetails";
import StockTabs from "@/components/StockTabs";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { symbol, interval, timeSeries } = searchParams;
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-20">
      <SearchBox />
      {symbol && (
        <section className="w-full flex flex-row gap-20">
          <SymbolDetails symbol={symbol as string} />
          <StockTabs
            symbol={symbol as string}
            interval={interval as string}
            timeSeries={timeSeries as string}
          />
        </section>
      )}
    </main>
  );
}
