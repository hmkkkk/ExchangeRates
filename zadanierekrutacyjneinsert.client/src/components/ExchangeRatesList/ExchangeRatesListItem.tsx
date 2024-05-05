import { IExchangeRate } from "../../interfaces/IExchangeRate"

type ExchangeRateListItemProps = {
    item: IExchangeRate
}

const ExchangeRateListItem: React.FC<ExchangeRateListItemProps> = ({ item }) => {
    return (
        <div className="list-item">
            <label className="currency-name" style={{ textTransform: "capitalize" }}>{item.currency}</label>
            <label>{item.code}</label>
            <label className={item.difference > 0 ? "label-green": "label-red"}>{item.difference === 0 ? "no data" : `${item.difference}%`}</label>
            <label>{item.mid}</label>
        </div>
    )
}

export default ExchangeRateListItem