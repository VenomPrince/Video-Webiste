// Enhanced Video Gallery Script
const defaultUsername = "username";
const defaultPassword = "password";

// DOM Elements
const loginPage = document.getElementById("login-page");
const mainContent = document.getElementById("main-content");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const categoryPage = document.getElementById("category-page");
const videoPage = document.getElementById("video-page");

// State Management
let currentCategoryIndex = 0;
let currentVideoIndex = 0;
const itemsPerPage = 12;

// Enhanced Categories with Metadata
const categories = {
  youtube: {
    title: "YouTube Trending",
    videos: [
      { url: "https://youtube.com/embed/25KpNP8MuXs", title: "Nature Documentary" },
      { url: "https://youtube.com/embed/PEl0fJXW1KU", title: "Space Exploration" },
      // ... other videos
    ]
  },
  movies: {
    title: "Featured Films",
    videos: [
      { url: "https://youtube.com/embed/6nFbvWnsukA", title: "Classic Cinema" },
      { url: "https://youtube.com/embed/oSHf-gcqZ6Y", title: "Modern Masterpiece" },
      // ... other videos
    ]
  },
  // ... other categories
};

// Authentication
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === defaultUsername && password === defaultPassword) {
    loginPage.style.display = "none";
    mainContent.style.display = "block";
    displayCategories();
    // Add smooth entrance animation
    mainContent.style.opacity = 0;
    requestAnimationFrame(() => {
      mainContent.style.transition = "opacity 0.5s ease";
      mainContent.style.opacity = 1;
    });
  } else {
    loginError.style.display = "block";
    // Shake animation for error
    loginForm.style.animation = "shake 0.5s ease";
    setTimeout(() => loginForm.style.animation = "", 500);
  }
});

// Category Display
function displayCategories() {
  categoryPage.style.display = "block";
  videoPage.style.display = "none";
  
  const categoryList = document.querySelector(".category-list");
  categoryList.innerHTML = "";

  const start = currentCategoryIndex * itemsPerPage;
  const categoryEntries = Object.entries(categories);
  const categoriesToShow = categoryEntries.slice(start, start + itemsPerPage);

  categoriesToShow.forEach(([key, category]) => {
    const button = document.createElement("button");
    button.textContent = category.title;
    button.addEventListener("click", () => openCategory(key));
    button.className = "category-button";
    categoryList.appendChild(button);
  });

  updateNavigationButtons();
}

// Video Display
function openCategory(categoryKey) {
  categoryPage.style.display = "none";
  videoPage.style.display = "block";
  
  const videoList = document.querySelector(".video-list");
  videoList.innerHTML = "";

  const category = categories[categoryKey];
  const start = currentVideoIndex * itemsPerPage;
  const videosToShow = category.videos.slice(start, start + itemsPerPage);

  videosToShow.forEach((video, index) => {
    const videoItem = document.createElement("div");
    videoItem.className = "video-item";
    videoItem.innerHTML = `
      <iframe src="${video.url}" allowfullscreen></iframe>
      <div class="video-title">${video.title}</div>
    `;
    videoList.appendChild(videoItem);
  });

  updateNavigationButtons();
}

// Navigation Controls
function updateNavigationButtons() {
  const categoryEntries = Object.entries(categories);
  const prevCategoryBtn = document.getElementById("prev-category-page");
  const nextCategoryBtn = document.getElementById("next-category-page");
  const prevVideoBtn = document.getElementById("prev-video-page");
  const nextVideoBtn = document.getElementById("next-video-page");

  if (categoryPage.style.display !== "none") {
    prevCategoryBtn.disabled = currentCategoryIndex === 0;
    nextCategoryBtn.disabled = (currentCategoryIndex + 1) * itemsPerPage >= categoryEntries.length;
  } else {
    const currentCategory = categories[Object.keys(categories)[currentCategoryIndex]];
    prevVideoBtn.disabled = currentVideoIndex === 0;
    nextVideoBtn.disabled = (currentVideoIndex + 1) * itemsPerPage >= currentCategory.videos.length;
  }
}

// Navigation Event Listeners
document.getElementById("prev-category-page").addEventListener("click", () => {
  if (currentCategoryIndex > 0) {
    currentCategoryIndex--;
    displayCategories();
  }
});

document.getElementById("next-category-page").addEventListener("click", () => {
  const categoryEntries = Object.entries(categories);
  if ((currentCategoryIndex + 1) * itemsPerPage < categoryEntries.length) {
    currentCategoryIndex++;
    displayCategories();
  }
});

document.getElementById("prev-video-page").addEventListener("click", () => {
  if (currentVideoIndex > 0) {
    currentVideoIndex--;
    openCategory(Object.keys(categories)[currentCategoryIndex]);
  }
});

document.getElementById("next-video-page").addEventListener("click", () => {
  const currentCategory = categories[Object.keys(categories)[currentCategoryIndex]];
  if ((currentVideoIndex + 1) * itemsPerPage < currentCategory.videos.length) {
    currentVideoIndex++;
    openCategory(Object.keys(categories)[currentCategoryIndex]);
  }
});

document.getElementById("back-to-categories").addEventListener("click", () => {
  currentVideoIndex = 0;
  displayCategories();
});

// Logout Function
function logout() {
  mainContent.style.opacity = 0;
  setTimeout(() => {
    mainContent.style.display = "none";
    loginPage.style.display = "flex";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    loginError.style.display = "none";
    currentCategoryIndex = 0;
    currentVideoIndex = 0;
    loginPage.style.opacity = 0;
    requestAnimationFrame(() => {
      loginPage.style.transition = "opacity 0.5s ease";
      loginPage.style.opacity = 1;
    });
  }, 500);
}

// Add shake animation keyframes
const style = document.createElement("style");
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);
