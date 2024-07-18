import { apinext } from "@/adapters/xhr/apiNext";
import { ExchangeReponse, PayloadExchangeRates } from "./itemEntity";

const functionService = "CURRENCY_EXCHANGE_RATE";
async function getExchangeRates({
  to_currency = "",
  from_currency = "",
}: PayloadExchangeRates) {
  const res = await apinext.get<ExchangeReponse>(
    `query?function=${functionService}&from_currency=${from_currency}&to_currency=${to_currency}`
  );
  return res.data;
}

export { getExchangeRates };
