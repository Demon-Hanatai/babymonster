function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            window.location.href = '/babymonster/error.html';
        });
}

function displayErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = `Something went wrong: ${message}`;
    document.body.appendChild(errorMessage);
}



window.onload = function() {
    if (window.location.pathname === '/babymonster/' || window.location.pathname === '') {
        loadContent('Home.html');
    }
};
