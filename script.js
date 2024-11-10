// Default username and password
const defaultUsername = "username";
const defaultPassword = "password";

// Handle login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Validate credentials
    if (usernameInput === defaultUsername && passwordInput === defaultPassword) {
        document.getElementById("login-page").style.display = "none"; // Hide login page
        document.getElementById("main-content").style.display = "block"; // Show main content
    } else {
        document.getElementById("login-error").style.display = "block"; // Show error message
    }
});

// Video Gallery Code
const categories = {
    youtube: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    Movies: [
     "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    Musics: [
       "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    One: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    two: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    three: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    four: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    five: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ], 
    youtu: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    Movie: [
     "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    Music: [
       "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH",
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    On: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    tw: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    thee: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    for: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ],
    fiv: [
        "https://youtube.com/embed/25KpNP8MuXs?si=UwxA2TMYJWkAuBPO",
        "https://youtube.com/embed/PEl0fJXW1KU?si=XKfCGRg-6fJ2maz1",
        "https://youtube.com/embed/6nFbvWnsukA?si=wOzqPyoXVXsUndOu",
        "https://youtube.com/embed/oSHf-gcqZ6Y?si=yLENEqVnWYTyyWXG",
        "https://youtube.com/embed/FPuCaEUtRcA?si=12dQY4iyw-GLez2t",
        "https://youtube.com/embed/In5se4R7RRk?si=2pbx2E8soEEmVtOH"
    ]
};

const categoryKeys = Object.keys(categories);
const itemsPerPage = 10;
let currentCategoryIndex = 0;
let currentVideoIndex = 0;

// Display Categories
// Function to calculate distance and apply glow
function calculateDistance(event, element) {
    const rect = element.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(Math.pow(centerX - mouseX, 2) + Math.pow(centerY - mouseY, 2));
    return distance;
}

function handleMouseMove(event) {
    const videoItems = document.querySelectorAll('.video-item');
  
    // Remove 'near-glow' class from all video items
    videoItems.forEach(item => item.classList.remove('near-glow'));
  
    let closestItem = null;
    let closestDistance = Infinity;

    // Check the distance between the mouse and each video item
    videoItems.forEach(item => {
        const distance = calculateDistance(event, item);
        const maxDistance = 200; // Adjust max distance for glow effect if needed

        if (distance < maxDistance && distance < closestDistance) {
            closestDistance = distance;
            closestItem = item;
        }
    });

    // Apply the glow effect only to the closest video item
    if (closestItem) {
        closestItem.classList.add('near-glow');
    }
}

// Attach the mouse move listener
document.addEventListener('mousemove', handleMouseMove);

function displayCategories() {
    document.getElementById("category-page").style.display = "block";
    document.getElementById("video-page").style.display = "none";
    const categoryList = document.querySelector(".category-list");
    categoryList.innerHTML = "";

    const start = currentCategoryIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const categoriesToShow = categoryKeys.slice(start, end);

    categoriesToShow.forEach((category) => {
        const button = document.createElement("button");
        button.textContent = category;
        button.onclick = () => openCategory(category);
        categoryList.appendChild(button);
    });

    document.getElementById("prev-category-page").disabled = currentCategoryIndex === 0;
    document.getElementById("next-category-page").disabled = end >= categoryKeys.length;
}

// Open Video Category
function openCategory(category) {
    document.getElementById("category-page").style.display = "none";
    document.getElementById("video-page").style.display = "block";

    const videoListContainer = document.querySelector(".video-list");
    videoListContainer.innerHTML = "";

    const videoList = categories[category];
    const start = currentVideoIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const videosToShow = videoList.slice(start, end);

    videosToShow.forEach((videoUrl, index) => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        videoItem.innerHTML = `
            <iframe width="100%" height="180" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
            <div class="video-title">Video ${start + index + 1}</div>
        `;
        videoListContainer.appendChild(videoItem);
    });

    document.getElementById("prev-video-page").disabled = currentVideoIndex === 0;
    document.getElementById("next-video-page").disabled = end >= videoList.length;
}

// Category Navigation Controls
document.getElementById("prev-category-page").onclick = () => {
    if (currentCategoryIndex > 0) {
        currentCategoryIndex--;
        displayCategories();
    }
};

document.getElementById("next-category-page").onclick = () => {
    if ((currentCategoryIndex + 1) * itemsPerPage < categoryKeys.length) {
        currentCategoryIndex++;
        displayCategories();
    }
};

// Video Navigation Controls
document.getElementById("prev-video-page").onclick = () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        openCategory(categoryKeys[currentCategoryIndex]);
    }
};

document.getElementById("next-video-page").onclick = () => {
    if ((currentVideoIndex + 1) * itemsPerPage < categories[categoryKeys[currentCategoryIndex]].length) {
        currentVideoIndex++;
        openCategory(categoryKeys[currentCategoryIndex]);
    }
};

// Back to Categories
document.getElementById("back-to-categories").onclick = () => {
    currentVideoIndex = 0;
    displayCategories();
};

function logout() {
    alert("You have been logged out.");
    window.location.href = 'login.html'; // Redirect to login page
}


displayCategories();
