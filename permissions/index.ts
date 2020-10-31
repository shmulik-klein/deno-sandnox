const url = 'http://hn.algolia.com/api/v1/search?query=deno';
fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
