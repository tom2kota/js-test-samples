var forecast = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (forecast) { return console.log(forecast.date + " and " + forecast.weather); };
logWeather(forecast);
var logWeatherDestructuring = function (_a) {
    var date = _a.date, weather = _a.weather;
    return console.log(date + " and " + weather);
};
logWeatherDestructuring(forecast);
