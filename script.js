// script.js

function resizeIframe() {
    var iframe = document.getElementById('airtable-iframe');
    var body = iframe.contentDocument.body,
        html = iframe.contentDocument.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    iframe.style.height = height + 'px';

    // Iframe comes into full view before allowing the page to scroll
    if (window.innerHeight > height) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'auto';
    }
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';

    // Add event listener to close the popup when clicking outside of the iframe
    document.getElementById('popup-overlay').addEventListener('click', closePopupOutside);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to close the popup when clicking outside of the iframe
function closePopupOutside(event) {
    var iframe = document.getElementById('airtable-iframe');
    var popup = document.getElementById('popup');

    // Check if the click is outside of the iframe
    if (!iframe.contains(event.target) && !popup.contains(event.target)) {
        closePopup();
        // Remove the event listener to prevent multiple bindings
        document.getElementById('popup-overlay').removeEventListener('click', closePopupOutside);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', resizeIframe);
    window.addEventListener('load', resizeIframe);

    document.getElementById('registerButton').addEventListener('click', openPopup);
});

function openSocialPopup() {
    document.getElementById('social-popup').style.display = 'block';
}

function closeSocialPopup() {
    document.getElementById('social-popup').style.display = 'none';
}
