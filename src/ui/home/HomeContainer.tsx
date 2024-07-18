import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import { ExchangeReponse, PayloadExchangeRates, ExchangeRatesItems } from "@/modules/exchange/itemEntity";
import { getExchangeRates } from "@/modules/exchange/itemSevices";
import { EXCHANGE_SAMPLE_RESPONSE } from "@/modules/exchange/samples";

export default function HomeContainer(){
    const [exchangeRates, setExchangeRates] = useState<ExchangeReponse>({"Realtime Currency Exchange Rate": EXCHANGE_SAMPLE_RESPONSE});
    const handleGetExchangeRates = async ({from_currency, to_currency}: PayloadExchangeRates) => {
        try {
            // const res = await getExchangeRates({
            //     from_currency,
            //     to_currency
            // })
            // setExchangeRates(res);
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        handleGetExchangeRates({
            from_currency: 'JPY',
            to_currency: 'USD'
        })
    }, [])

    console.log(exchangeRates);
    return (
        <HomePage exchangeRates={exchangeRates['Realtime Currency Exchange Rate']} />
    )
}