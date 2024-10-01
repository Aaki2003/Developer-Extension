// popup.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('queryForm');
    const resultContainer = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const query = document.getElementById('query').value;

        chrome.runtime.sendMessage({ action: "fetchData", query: query }, (response) => {
            if (response.error) {
                resultContainer.textContent = response.error;
            } else {
                const results = response.result.items.map(item => `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`).join('');
                resultContainer.innerHTML = `<ul>${results}</ul>`;
            }
        });
    });
});
