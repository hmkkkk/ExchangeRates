const baseUrl = import.meta.env.VITE_BASEURL

export const getExchangeRates = async () => {
    const response = await fetch(`${baseUrl}/exchangerates`);
    const data = await response.json();
    return data;
}