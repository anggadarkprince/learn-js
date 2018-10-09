const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

function getWeather() {
    weather.getWeather()
        .then(data => {
            if(data !== null) {
                ui.paint(data);
                storage.setLocationData(weather.city, weather.state);
            } else {
                alert('Weather data not found');
            }
        })
        .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    getWeather();

    $('#location-modal').modal('hide');
});