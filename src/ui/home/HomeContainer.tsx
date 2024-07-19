import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import { ExchangeReponse, PayloadExchangeRates, ExchangeRatesItems } from "@/modules/exchange/itemEntity";
import { getExchangeRates } from "@/modules/exchange/itemSevices";
import { EXCHANGE_SAMPLE_RESPONSE } from "@/modules/exchange/samples";

export default function HomeContainer(){
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [exchangeRates, setExchangeRates] = useState<ExchangeReponse>({"Realtime Currency Exchange Rate": null});
    const handleGetExchangeRates = async ({from_currency, to_currency}: PayloadExchangeRates) => {
        try {
            setIsLoading(true)
            const res = await getExchangeRates({
                from_currency,
                to_currency
            })
            setExchangeRates(res);
        } catch (e){
            console.log(e)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleGetExchangeRates({
            from_currency: 'USD',
            to_currency: 'JPY'
        })
    }, [])

    return (
        <HomePage isLoading={isLoading} exchangeRates={exchangeRates['Realtime Currency Exchange Rate']} />
    )
}