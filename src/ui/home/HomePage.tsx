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
          <div
            className={clsx(
              "shimmer",
              "h-40",
              "mb-4",
              "rounded",
              "lg:w-[300px]",
              "md:w-[300px]",
              "sm:w-full"
            )}
          ></div>
        ) : (
          <div
            className={clsx(
              "shadow-lg",
              "p-2",
              "lg:w-[300px]",
              "md:w-[300px]",
              "sm:w-full"
            )}
          >
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
    </main>
  );
}
