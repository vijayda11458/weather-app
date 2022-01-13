const request = require('request')

const forecasting = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f740275aae15b5ab51181ebe22e1722e&query=' + latitude + ',' + longitude 

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}



module.exports=forecasting