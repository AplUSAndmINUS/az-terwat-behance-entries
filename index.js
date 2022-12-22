const fetchBehanceEntries = async () => {
  try {
    // Replace 'YOUR_API_KEY' with your Behance API key
    const apiKey = 'YOUR_API_KEY';

    // Make a GET request to the Behance API to retrieve all of the entries
    const response = await fetch(`https://api.behance.net/v2/users/USERNAME/projects?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};