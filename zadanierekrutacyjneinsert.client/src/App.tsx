import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import ExchangesSearchBar from './components/Searchbar/ExchangeRatesSearchBar';
import Footer from './components/Layout/Footer';
import ExchangeRatesContainer from './components/ExchangeRatesList/ExchangeRatesContainer';
import ExchangeRatesTitle from './components/ExchangeRatesTitle/ExchangeRatesTitle';

function App() {
    const [searchInput, setSearchInput] = useState("");

    return (
        <>
            <Header />
            <div className="h-screen container p-64">
                <ExchangeRatesTitle />
                <ExchangesSearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
                <ExchangeRatesContainer filterValue={searchInput} />
            </div>
            <Footer />
        </>
    );
}

export default App;