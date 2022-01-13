const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmlqYXlkYSIsImEiOiJja3lhMDVra28wMHFyMm9xbzFkdG8yOGhqIn0.OC1h9_gcGkKg_LcWTCLCFQ&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


// geocode('Delhi', (error, {latitude,longitude,location}={}) => {
//     console.log({
//         latitude:latitude,
//         longitude:longitude,
//         location:location
//     })
// })
module.exports = geocode