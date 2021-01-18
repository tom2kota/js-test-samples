const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date; weather: string }): void => console.log(`${forecast.date} and ${forecast.weather}`)
logWeather(forecast)

const logWeatherDestructuring = ({
                                   date,
                                   weather
                               }: { date: Date, weather: string }): void => console.log(`${date} and ${weather}`)
logWeatherDestructuring(forecast)
