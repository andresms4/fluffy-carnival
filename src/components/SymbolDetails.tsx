import { getQuote } from "@/actions/getQuote";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function SymbolDetails({ symbol }: { symbol: string }) {
  const quote = await getQuote(symbol);

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>{quote["Global Quote"]["01. symbol"]}</CardTitle>
          <CardDescription>
            Change:&nbsp;{quote["Global Quote"]["09. change"]}
          </CardDescription>
          <CardDescription>
            Change percent:&nbsp;{quote["Global Quote"]["10. change percent"]}
          </CardDescription>
        </CardHeader>
        <CardContent className="[&>*:nth-child(odd)]:text-gray-500 [&>*:nth-child(even)]:text-gray-800">
          <p>Open:&nbsp;{quote["Global Quote"]["02. open"]}</p>
          <p>High:&nbsp;{quote["Global Quote"]["03. high"]}</p>
          <p>Low:&nbsp;{quote["Global Quote"]["04. low"]}</p>
          <p>Price:&nbsp;{quote["Global Quote"]["05. price"]}</p>
          <Separator className="my-4" />
          <p>Volume:&nbsp;{quote["Global Quote"]["06. volume"]}</p>
          <p>
            Previous close:&nbsp;{quote["Global Quote"]["08. previous close"]}
          </p>
        </CardContent>
        <CardFooter>
          <p>
            Latest trading day:&nbsp;
            {quote["Global Quote"]["07. latest trading day"]}
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
