import React from "react";
import { Text } from "@/components";
import clsx from "clsx";
import { ExchangeRatesItems } from "@/modules/exchange/itemEntity";

export default function HomePage(props: {
  exchangeRates: ExchangeRatesItems | null;
  isLoading: boolean;
}) {
  const { exchangeRates, isLoading } = props;

  return (
    <main className={clsx("relative", "w-full", "justify-center", "p-10")}>
      <Text textType="heading" className={clsx("text-3xl")}>
        Exchange Rates
      </Text>
      <br />
      <section>
        {isLoading ? (
          <div className="max-w-sm mx-auto">
            <div className={clsx('shimmer','h-40', 'mb-4', 'rounded')}></div>
          </div>
        ) : (
          <div className="p-2 shadow-lg w-[300px]">
            <div className={clsx("flex", "flex-col")}>
              <Text
                textType="subtitle"
                className={clsx("text-sm", "text-gray-500")}
              >
                1 {exchangeRates?.["2. From_Currency Name"]} equals
              </Text>
              <Text
                textType="subtitle"
                className={clsx("text-xl", "text-black")}
              >
                {exchangeRates?.["5. Exchange Rate"]}{" "}
                {exchangeRates?.["4. To_Currency Name"]}
              </Text>
            </div>
            <div className="mt-10">
              <Text textType="subtitle" className="text-xs text-gray-400">
                Last Refreshed {exchangeRates?.["6. Last Refreshed"]}
              </Text>
            </div>
          </div>
        )}
      </section>
      <section></section>
    </main>
  );
}
