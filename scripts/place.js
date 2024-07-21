document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;

    // Static data for Philippines
    const philippinesData = {
        area: '300,000 km²',
        population: '109 million',
        capital: 'Manila',
        languages: ['Filipino', 'English'],
        currency: 'Philippine peso (PHP)',
        timezone: 'UTC+8',
        callingCode: '+63',
        internetTLD: '.ph'
    };

    // Function to display country data
    function displayCountryData() {
        document.getElementById('country-area').textContent = philippinesData.area;
        document.getElementById('country-population').textContent = philippinesData.population;
        document.getElementById('country-capital').textContent = philippinesData.capital;
        document.getElementById('country-languages').textContent = philippinesData.languages.join(', ');
        document.getElementById('country-currency').textContent = philippinesData.currency;
        document.getElementById('country-timezone').textContent = philippinesData.timezone;
        document.getElementById('country-calling-code').textContent = philippinesData.callingCode;
        document.getElementById('country-internet-tld').textContent = philippinesData.internetTLD;
    }

    // Function to fetch weather data (static demonstration)
    function fetchWeather() {
        // Static demonstration of weather data
        const temperature = '28°C';
        const windSpeed = '5 km/h';
        const windChill = calculateWindChill(28, 5).toFixed(1) + '°C';

        document.getElementById('temperature').textContent = temperature;
        document.getElementById('wind-speed').textContent = windSpeed;
        document.getElementById('wind-chill').textContent = windChill;
    }

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    // Call functions to display country data and weather (static demonstration)
    displayCountryData();
    fetchWeather();
});
