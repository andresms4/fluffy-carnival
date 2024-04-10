import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getIntradayTimeSeries } from "@/actions/getIntradayTimeSeries";
import { getTimeSeries } from "@/actions/getTimeSeries";

interface StockData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
  timestamp: string;
}
export default async function StockTable({
  symbol,
  timeSeries,
  interval,
  period,
}: {
  symbol: string;
  timeSeries: string;
  interval?: string;
  period?: string;
}) {
  let series;
  if (timeSeries === "TIME_SERIES_INTRADAY") {
    series = await getIntradayTimeSeries(symbol, timeSeries, interval!);
  } else {
    series = await getTimeSeries(symbol, timeSeries);
  }

  if (series.hasOwnProperty("Error Message")) {
    return <h2 className="text-lg font-bold">No data available</h2>;
  }

  const seriesArray: StockData[] = [];

  for (const timestamp in series[`${period}`]) {
    const values = series[`${period}`][timestamp];
    values.timestamp = timestamp;
    seriesArray.push(values);
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Datetime</TableHead>
          <TableHead>Open</TableHead>
          <TableHead>High</TableHead>
          <TableHead>Low</TableHead>
          <TableHead>Close</TableHead>
          <TableHead className="text-right">Volume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {seriesArray.map((item: StockData, index: number) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.timestamp}</TableCell>
              <TableCell>{item["1. open"]}</TableCell>
              <TableCell>{item["2. high"]}</TableCell>
              <TableCell>{item["3. low"]}</TableCell>
              <TableCell>{item["4. close"]}</TableCell>
              <TableCell className="text-right">{item["5. volume"]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
