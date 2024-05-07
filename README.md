## Basic info
ExchangeRates is a single page web application used for displaying current exchange rates of a polish zloty (PLN) currency. The source of the data is from NBP's API.

## Technology stack
The app consists of three parts: a REST API, client application and an Azure Function. It was deployed using docker on fly.io.

### API
The API project is written in .NET 8.

### Client app
The client app was created using Vite for React + TypeScript

### Azure Function
The function runs once per day, adding new set of exchange rates from NBP's API if there are no records with today's date.

### URL
The app can be found here [https://exchangeratesinsert.fly.dev/](https://exchangeratesinsert.fly.dev/)
