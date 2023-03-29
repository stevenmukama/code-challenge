const urls = [];

const shortenUrl = (url) => {
  const shortUrl = `https://short.microsoft/${Math.random()
    .toString(36)
    .substring(2, 7)}`;
  urls.push({ originalUrl: url, shortUrl });
  console.log(
    shortUrl,
    "This is the shortened url, copy it to visit the original url"
  );
  return shortUrl;
};

shortenUrl(
  "https://learn.microsoft.com/en-us/dotnet/csharp/?WT.mc_id=dotnet-35129-website"
);

const visitUrl = (shortUrl) => {
  const url = urls.find((url) => url.shortUrl === shortUrl);
  if (!url) {
    return "Url not found";
  }
  return url.originalUrl;
};
console.log(
  "This is what you get when you enter short url",
  visitUrl(urls[urls.length - 1].shortUrl)
);
