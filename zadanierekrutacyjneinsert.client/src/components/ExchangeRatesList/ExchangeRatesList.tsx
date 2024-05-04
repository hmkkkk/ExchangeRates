import { IExchangeRate } from '../../interfaces/IExchangeRate';
import ExchangeRatesNotFound from '../ExchangeRatesNotFound/ExchangeRatesNotFound';
import ExchangeRateListItem from './ExchangeRatesListItem';

type ExchangeRatesListProps = {
    exchangeRates: IExchangeRate[] | undefined,
    filterValue: string
}

const ExchangeRatesList: React.FC<ExchangeRatesListProps> = ({ exchangeRates, filterValue }) => {

    if (exchangeRates === undefined) return (
        <ExchangeRatesNotFound />
    )

    const exchangeRatesToShow = exchangeRates
        .filter((x: IExchangeRate) => x.currency.toLowerCase().includes(filterValue.toLowerCase()) || x.code.toLowerCase().includes(filterValue.toLowerCase()))

    return (
        <>
            {exchangeRatesToShow.map((exchangeRate: IExchangeRate) => 
                <ExchangeRateListItem key={exchangeRate.code} item={exchangeRate} />
            )}
        </>
    )
}

export default ExchangeRatesList