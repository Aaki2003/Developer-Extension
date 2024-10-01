// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchData") {
        const query = request.query;

        // Example API request (Replace with your actual data source)
        fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=AIzaSyAL_hDYlApA_hPRqJpQ15rLUNuSGF_3EJg&cx=476aaea86c55945b1`)
            .then(response => response.json())
            .then(data => {
                sendResponse({ result: data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                sendResponse({ error: 'Failed to fetch data' });
            });

        return true; // Keep the message channel open for async response
    }
});
