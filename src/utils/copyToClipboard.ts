import shortUrl from "./urlShortener";

export const copyToClipboard = async (text: string) => {
  try {
    const resultUrl = await shortUrl(text);
    await navigator.clipboard.writeText(resultUrl);
    return true;
  } catch (err) {
    console.log("Error", err);
    return false;
  }
};
