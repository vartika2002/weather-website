const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e1977f18e208f31f5edd64f7f50464a0&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". The current temperature is " +
          body.current.temperature +
          " degrees and it feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
