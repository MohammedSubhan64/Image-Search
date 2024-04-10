
window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var searchTerm = urlParams.get('search');
    if (searchTerm) {
        document.getElementById('searchInput').value = searchTerm;
        displayImage();
    }
}

function displayImage() {
    var searchTerm = document.getElementById('searchInput').value;
    var imageUrl = "https://source.unsplash.com/1600x900/?" + searchTerm;
    var imageElement = document.querySelector('.result-image');

    imageElement.onload = function() {
        imageElement.parentElement.classList.add('loaded');
    };

    imageElement.onerror = function() {
        alert('Failed to load image. Please try again.');
    };

    imageElement.src = imageUrl;
    imageElement.parentElement.classList.remove('loaded');
}

function refreshPage() {
    var searchTerm = document.getElementById('searchInput').value;
    window.location.href = window.location.pathname + "?search=" + searchTerm;
}
