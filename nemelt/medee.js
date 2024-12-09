async function getData() {
    const url = "https://example.org/products.jsonhttps://padman83.github.io/Chuck-Norris-Jokes-App/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }