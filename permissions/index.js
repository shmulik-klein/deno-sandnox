const url = "http://hn.algolia.com/api/v1/search?query=deno";
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    const entries = response.hits.map((entry) => ({
      title: entry.title,
      url: entry.url,
      author: entry.author,
    }));
    console.log(entries);
  });
