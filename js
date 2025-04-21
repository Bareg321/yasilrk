// Select the developer name element
const developerName = document.getElementById("developer-name");

// Change background color on hover
developerName.addEventListener("mouseenter", () => {
    developerName.style.backgroundColor = "#1b5e20"; // Darker green
});

// Restore original background color on mouse leave
developerName.addEventListener("mouseleave", () => {
    developerName.style.backgroundColor = "#2e7d32"; // Original green
});
