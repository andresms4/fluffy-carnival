import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StockTable from "@/components/StockTable";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function StockTabs({
  symbol,
  interval,
  timeSeries,
}: {
  symbol: string;
  interval: string;
  timeSeries: string;
}) {
  return (
    <Tabs defaultValue={timeSeries} className="w-full">
      <TabsList>
        <TabsTrigger value="TIME_SERIES_INTRADAY">
          <Link
            href={`/?symbol=${symbol}&interval=5min&timeSeries=TIME_SERIES_INTRADAY`}
          >
            Intraday
          </Link>
        </TabsTrigger>
        <TabsTrigger value="TIME_SERIES_DAILY">
          <Link href={`/?symbol=${symbol}&timeSeries=TIME_SERIES_DAILY`}>
            Daily
          </Link>
        </TabsTrigger>
        <TabsTrigger value="TIME_SERIES_WEEKLY">
          <Link href={`/?symbol=${symbol}&timeSeries=TIME_SERIES_WEEKLY`}>
            Weekly
          </Link>
        </TabsTrigger>
        <TabsTrigger value="TIME_SERIES_MONTHLY">
          <Link href={`/?symbol=${symbol}&timeSeries=TIME_SERIES_MONTHLY`}>
            Monthly
          </Link>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="TIME_SERIES_INTRADAY">
        <StockTable
          symbol={symbol}
          interval={interval}
          timeSeries={timeSeries}
          period={`Time Series (${interval})`}
        ></StockTable>
      </TabsContent>
      <TabsContent value="TIME_SERIES_DAILY">
        <StockTable
          symbol={symbol}
          timeSeries={timeSeries}
          period={"Time Series (Daily)"}
        ></StockTable>
      </TabsContent>
      <TabsContent value="TIME_SERIES_WEEKLY">
        <StockTable
          symbol={symbol}
          timeSeries={timeSeries}
          period={"Weekly Time Series"}
        ></StockTable>
      </TabsContent>
      <TabsContent value="TIME_SERIES_MONTHLY">
        <StockTable
          symbol={symbol}
          timeSeries={timeSeries}
          period={"Monthly Time Series"}
        ></StockTable>
      </TabsContent>
    </Tabs>
  );
}
