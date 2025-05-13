document.addEventListener("DOMContentLoaded", () => {
    updateStatistics();
});

function updateStatistics() {
    document.getElementById("viewedCount").innerText = "0";  // Example data
    document.getElementById("searchCount").innerText = "0";  // Example data
    document.getElementById("downloadCount").innerText = "0"; // Example data
}

function displaySection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");

    document.querySelectorAll(".nav-item a").forEach(link => {
        link.classList.remove("active");
    });
    document.querySelector(`.nav-item a[href*='${sectionId}']`).classList.add("active");
}

