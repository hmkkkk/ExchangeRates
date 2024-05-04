const ExchangeRatesListHeader = () => {
    return (
        <>
            <div className="list-item">
                <label className="currency-name">Currency</label>
                <label>Code</label>
                <label>Difference% (24h)</label>
                <label>Exchange rate</label>
            </div>
            <div className="list-item bg-indigo">
                <label className="currency-name">Polish Zloty</label>
                <label>PLN</label>
                <label></label>
                <label>1</label>
            </div>
        </>
    )
}

export default ExchangeRatesListHeader;