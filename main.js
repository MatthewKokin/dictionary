async function fetch_word(word) {
    const url = `http://localhost:3000/api/word/${word.toLowerCase()}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data;  // Return the fetched data
    } catch (error) {
        console.error("Error fetching word data:", error);
    }
}

// Call the function and log the data
fetch_word("ace")
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
