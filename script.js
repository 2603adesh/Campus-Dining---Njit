// Function to filter menu items based on both dropdown and radio filters
function applyFilters() {
    const selectedMeal = document.getElementById("meal-dropdown").value; // Get selected meal type
    const selectedDiet = document.querySelector('input[name="filter"]:checked').value; // Get selected dietary filter

    // Get all menu items
    const menuItems = document.querySelectorAll(".menu-list .item");

    // Loop through all menu items and apply filters
    menuItems.forEach(item => {
        const matchesMeal = selectedMeal === "all" || item.classList.contains(selectedMeal); // Check if item matches meal type
        const matchesDiet = selectedDiet === "all" || item.classList.contains(selectedDiet); // Check if item matches dietary filter

        // Show item if it matches both filters, hide otherwise
        if (matchesMeal && matchesDiet) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Event listener for dropdown filter
document.getElementById("meal-dropdown").addEventListener("change", applyFilters);

// Event listener for radio button filters
document.querySelectorAll('input[name="filter"]').forEach((radio) => {
    radio.addEventListener('change', applyFilters);
});

// Dropdown button functionality for allergens (optional, can be kept separate)
document.querySelectorAll('.dropdown-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !expanded);

        const allergenDetails = document.getElementById(button.getAttribute('aria-controls'));
        if (!expanded) {
            allergenDetails.style.display = 'block';
        } else {
            allergenDetails.style.display = 'none';
        }
    });
});
