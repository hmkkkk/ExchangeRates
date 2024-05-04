import { useEffect, useState } from "react";
import { getExchangeRates } from "../../services/ExchangeRateService";
import ExchangeRatesListHeader from "./ExchangeRatesListHeader";
import ExchangeRatesList from "./ExchangeRatesList";
import { IExchangeRate } from "../../interfaces/IExchangeRate";

type ExchangeRatesContainerProps = {
    filterValue: string
}

const ExchangeRatesContainer: React.FC<ExchangeRatesContainerProps> = ({filterValue}) => {
    const [exchangeRates, setExchangeRates] = useState<IExchangeRate[]>();

    useEffect(() => {
        populateExchangeRateData();
    }, []);

    return (
        <div className="container list-container">
            <ExchangeRatesListHeader />
            <ExchangeRatesList exchangeRates={exchangeRates} filterValue={filterValue} />
        </div>
    )

    async function populateExchangeRateData() {
        setExchangeRates(await getExchangeRates());
    }
}

export default ExchangeRatesContainer;