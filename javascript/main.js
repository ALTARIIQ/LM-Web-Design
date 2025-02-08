// Check login status(Ensures that users cannot access protected pages without being logged in).
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname !== '/login.html') {
        window.location.href = 'login.html';
    }
}

// logout functionality (clearing their login status and redirecting them to the login page).
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

/* Dynamically populates a grid with brand cards based on the data in the `brandsData` array.
   Each card includes a link, image, name, and description of a brand. */
function populateBrands() {
    const brandGrid = document.getElementById('brandGrid');
    brandsData.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        brandCard.innerHTML = `
            <a href="${brand.link}" target="_blank" >
            <img src="${brand.image}" alt="${brand.name}">
            <div class="brand-info">
                <h3>${brand.name}</h3>
                <p>${brand.description}</p>
            </div>
        `;
        brandGrid.appendChild(brandCard);
    });
}

// Creates an HTML structure for a single vehicle card.
function createVehicleCard(vehicle) {
    return `
        <div class="vehicle-card">
            <img src="${vehicle.image}" alt="${vehicle.name}">
            ${vehicle.bounty ? `<div class="bounty-tag">${vehicle.bounty}</div>` : ''}
            <div class="vehicle-info">
                <h3 class="vehicle-name">${vehicle.name}</h3>
                <div class="vehicle-price">${formatPrice(vehicle.price)}</div>
                <div class="vehicle-specs">
                    <div class="spec">Engine: ${vehicle.specs.engine}</div>
                    <div class="spec">Power: ${vehicle.specs.power}</div>
                    <div class="spec">acceleration: ${vehicle.specs.acceleration}</div>
                    <div class="spec">Top Speed: ${vehicle.specs.topSpeed}</div>
                    
                 </div>      
            </div>
        </div>
    `;
}

//Filters vehicles based on the given category, If 'FEATURED', return vehicles where the 'bounty' property contains 'BUY NOW'
function filterVehicles(category) {
    if (!Array.isArray(vehicles)) {
        throw new Error("vehicles must be an array");
    }
    
    if (category === 'FEATURED') {
        return vehicles.filter(v => v.bounty?.includes('BUY NOW'));
    }
    
    return vehicles.filter(v => v.category === category);
}

//Formats a numeric price value as a currency string. Example: 123456.78 => "$123,456.78"
function formatPrice(price) {
    return '$' + price.toLocaleString();
}

//Responsible for filtering and sorting the list of vehicles based on the provided category and sort order, then displaying them on the page.
function displayVehicles(category = 'FEATURED', sortOrder = '') {
    let filteredVehicles = filterVehicles(category);
    
    if (sortOrder === 'low') {
        filteredVehicles.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
        filteredVehicles.sort((a, b) => b.price - a.price);
    }

    const vehicleGrid = document.querySelector('.vehicle-grid');
    vehicleGrid.innerHTML = filteredVehicles.map(createVehicleCard).join('');
}

// Event Listeners to the dropdown element with ID 'sortPrice',Executing whenever the user selects an option in the dropdown
document.getElementById('sortPrice').addEventListener('change', (e) => {
    const activeCategory = document.querySelector('.category-btn.active').textContent;
    displayVehicles(activeCategory, e.target.value);
});

// Select all elements with the class 'category-btn'
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayVehicles(button.textContent);
    });
});

/* Handle Contact Form
   Validates input fields, Checks for Empty Fields, and resets the form fields.
*/
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    populateBrands();
    displayVehicles();
});
