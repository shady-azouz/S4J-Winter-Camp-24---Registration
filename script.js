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
    document.getElementById('register-popup').style.display = 'block';

    // Add event listener to close the register-popup when clicking outside of the iframe
    document.getElementById('register-popup-overlay').addEventListener('click', closePopupOutside);
}

function closePopup() {
    document.getElementById('register-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', resizeIframe);
    window.addEventListener('load', resizeIframe);

    document.getElementById('registerButton').addEventListener('click', openPopup);
});

function openLinkTree() {
    window.open('https://linktr.ee/s4jmeeting', '_blank');
}

function showTooltip() {
    var logoContainer = document.getElementById('logo-container');
    logoContainer.classList.add('tooltip-visible');
}

function hideTooltip() {
    var logoContainer = document.getElementById('logo-container');
    logoContainer.classList.remove('tooltip-visible');
}

function visitSocialMedia() {
    window.open('https://linktr.ee/s4jmeeting', '_blank');
}

function openAccountPopup() {
    var accountPopup = document.getElementById("account-popup");
    accountPopup.style.display = "block";
}

// Add the following JavaScript function for closing the account-popup

function closeAccountPopup() {
    var accountPopup = document.getElementById("account-popup");
    accountPopup.style.display = "none";
}

