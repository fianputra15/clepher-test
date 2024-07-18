type PayloadExchangeRates = {
  from_currency: string;
  to_currency: string;
};
type ExchangeRatesItems = {
    "1. From_Currency Code": string;
    "2. From_Currency Name": string;
    "3. To_Currency Code": string;
    "4. To_Currency Name": string;
    "5. Exchange Rate": string;
    "6. Last Refreshed": string;
    "7. Time Zone": string;
    "8. Bid Price": string;
    "9. Ask Price": string;
  }

type ExchangeReponse = {
    "Realtime Currency Exchange Rate": ExchangeRatesItems  | null;
};

export type { PayloadExchangeRates, ExchangeRatesItems, ExchangeReponse };
