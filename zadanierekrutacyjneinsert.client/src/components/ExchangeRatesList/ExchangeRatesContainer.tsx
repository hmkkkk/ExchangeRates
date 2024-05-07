import { useEffect, useState } from "react";
import { getExchangeRates } from "../../services/ExchangeRateService";
import ExchangeRatesListHeader from "./ExchangeRatesListHeader";
import ExchangeRatesList from "./ExchangeRatesList";
import { IExchangeRate } from "../../interfaces/IExchangeRate";
import Spinner from "../shared/Spinner";

type ExchangeRatesContainerProps = {
    filterValue: string
}

const ExchangeRatesContainer: React.FC<ExchangeRatesContainerProps> = ({filterValue}) => {
    const [exchangeRates, setExchangeRates] = useState<IExchangeRate[]>();
    const [loading, setLoading] = useState<boolean>();

    useEffect(() => {
        populateExchangeRateData();
    }, []);

    return (
        <div className="container list-container">
            <ExchangeRatesListHeader />

            {loading
            ? <Spinner />
            : <ExchangeRatesList exchangeRates={exchangeRates} filterValue={filterValue} />}

        </div>
    )

    async function populateExchangeRateData() {
        try {
            setLoading(true)
            setExchangeRates(await getExchangeRates());
        }
        finally {
            setLoading(false)
        }
    }
}

export default ExchangeRatesContainer;