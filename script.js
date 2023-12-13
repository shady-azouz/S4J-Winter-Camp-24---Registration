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
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', resizeIframe);
    window.addEventListener('load', resizeIframe);

    document.getElementById('registerButton').addEventListener('click', openPopup);
});
