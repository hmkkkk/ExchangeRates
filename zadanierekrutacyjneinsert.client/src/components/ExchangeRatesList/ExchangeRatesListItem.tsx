import { IExchangeRate } from "../../interfaces/IExchangeRate"

type ExchangeRateListItemProps = {
    item: IExchangeRate
}

const ExchangeRateListItem: React.FC<ExchangeRateListItemProps> = ({ item }) => {
    return (
        <div className="list-item">
            <label className="currency-name" style={{ textTransform: "capitalize" }}>{item.currency}</label>
            <label>{item.code}</label>
            <label>{item.mid}</label>
        </div>
    )
}

export default ExchangeRateListItem