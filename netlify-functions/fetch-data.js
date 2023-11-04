const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Replace 'your-github-raw-data-url' with your actual GitHub raw data URL
  const url = 'your-github-raw-data-url';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      // If the server returns a bad response, throw an error
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text(); // or .json() if your data is in JSON format

    return {
      statusCode: 200,
      body: data
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
