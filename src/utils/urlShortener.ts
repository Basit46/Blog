const shortUrl = async (urlToShort: string) => {
  const url = "https://url-shortener-service.p.rapidapi.com/shorten";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "8c43990388msh6c9c96c9392d66bp1ef91bjsne9497caac83c",
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
