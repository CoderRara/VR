// Define the downloadLinks object to store links and headings for each language
const downloadLinks = {
  "turbo": {
      android: "https://link-to-turbo-cpp-android.com",
      apple: "https://google.com",
      heading: "Best Turbo C++ App For Mobile"
  },
  "html": {
      android: "https://link-to-html-android.com",
      apple: "https://youtube.com",
      heading: "Best HTML App For Mobile"
  },
  "vb": {
      android: "https://link-to-vb-android.com",
      apple: "https://Amazon.in",
      heading: "Best VBScript App For Mobile"
  }
};

// Wait until the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // No default language is set; it's fully dynamic on click.
});

// Set Active state, Color, and update Links & Heading
function setActive(element, language) {
  // 1. Remove the 'active' class from all navbar items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));

  // 2. Add the 'active' class to the clicked element
  element.classList.add('active');

  // 3. Update the CSS variable based on the selected language
  updateButtonColor(language);

  // 4. Update the download links and heading based on the selected language
  updateDownloadLinks(downloadLinks[language].android, downloadLinks[language].apple);
  updateHeadingText(downloadLinks[language].heading);
}

// Update button color dynamically based on language
function updateButtonColor(language) {
  if (language === 'html') {
      document.documentElement.style.setProperty('--button-color', 'rgba(255, 0, 0, 0.7)');  // HTML red
  } else if (language === 'turbo') {
      document.documentElement.style.setProperty('--button-color', 'rgb(0,120,212)');  // Turbo C++ blue
  } else if (language === 'vb') {
      document.documentElement.style.setProperty('--button-color', 'rgb(0, 180, 120)');  // VB greenish teal
  }
}

// Update download links for Android and Apple
function updateDownloadLinks(androidLink, appleLink) {
  // Update the download links for Android and Apple using the correct ids
  document.getElementById("downloadLink1").href = androidLink;  // Android link
  document.getElementById("downloadLink2").href = appleLink;    // Apple link
}

// Update dynamic heading text based on the selected language
function updateHeadingText(text) {
  document.getElementById("dynamic-heading").textContent = text;
}
