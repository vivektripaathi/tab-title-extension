document.addEventListener("DOMContentLoaded", function () {
    const titleDisplay = document.getElementById("title");
    const getTitleButton = document.getElementById("getTitleButton");
    const darkModeCSSLink = document.getElementById("dark-mode-css");

    getTitleButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        const tabTitle = currentTab.title;
        titleDisplay.textContent = tabTitle;
        });
    });

    function toggleDarkMode() {
        darkModeCSSLink.disabled = !window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    toggleDarkMode();
});