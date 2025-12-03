document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filters button");
    const restaurantCards = document.querySelectorAll(".restaurant-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            restaurantCards.forEach(card => {
                const categories = card.getAttribute("data-category").split(",");

                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "block"; // show
                } else {
                    card.style.display = "none"; // hide
                }
            });
        });
    });
});

// Home page search functionality
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        if(query) {
            // Redirect to restaurants page with query in URL
            window.location.href = `restaurants.html?search=${encodeURIComponent(query)}`;
        } else {
            // If empty, just go to restaurants page
            window.location.href = "restaurants.html";
        }
    });
}
