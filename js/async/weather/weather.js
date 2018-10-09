class Weather {
    constructor(city, state) {
        this.apiKey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${decodeURIComponent(this.state)}/${decodeURIComponent(this.city)}.json`);
        const responseData = await response.json();
        return responseData.current_observation ? responseData.current_observation : null;
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}