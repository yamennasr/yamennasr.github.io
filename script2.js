document.getElementById('fetch-button').addEventListener('click', fetchDataFromWeb);

async function fetchDataFromWeb() {
    const url = prompt('Enter the URL to fetch data from:');
    if (!url) return;

    try {
        const response = await fetch(`https://your-backend-url.herokuapp.com/scrape?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        const output = document.getElementById('output');
        output.innerHTML = `<p>Fetched data:</p><pre>${data.data}</pre>`;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data from the web.');
    }
}
