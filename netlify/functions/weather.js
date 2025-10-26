// Netlify serverless function to proxy OpenWeatherMap requests
// Requires an environment variable OPENWEATHERMAP_API_KEY to be set in Netlify (or your hosting provider)

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const params = event.queryStringParameters || {};
    // Accept either q=city,country or city & country separately
    let query = params.q;
    if (!query) {
      const city = params.city || '';
      const country = params.country || '';
      if (!city) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Missing required parameter: city' }),
          headers: { 'Content-Type': 'application/json' }
        };
      }
      query = `${city},${country}`;
    }

    const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
    if (!API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Server misconfiguration: OPENWEATHERMAP_API_KEY is not set' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`;
    const res = await fetch(weatherUrl);
    const data = await res.json();

    // Pass through the exact response from OpenWeatherMap and keep status codes
    const status = res.ok ? 200 : (res.status || 500);

    return {
      statusCode: status,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  } catch (err) {
    console.error('Error in weather proxy function', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};
