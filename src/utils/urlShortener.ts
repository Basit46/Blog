const shortUrl = async (urlToShort: string) => {
  const url = "https://url-shortener-service.p.rapidapi.com/shorten";
  const rapidAPIKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": rapidAPIKey,
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: new URLSearchParams({
      url: urlToShort,
    }),
  };

  try {
    const response = await fetch(url, options);
    const resultText = await response.text();
    const jsonResponse = await JSON.parse(resultText);
    const resultUrl = jsonResponse.result_url;
    return resultUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default shortUrl;
