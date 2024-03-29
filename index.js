// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Shrimp Cocktail", "Beef Carpaccio", "Caprese Salad"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Butternut Squash Ravioli with Sage Butter Sauce", "Lobster Risotto", "Vegetarian Lasagna"],
    Desserts: ["Tiramisu", "Cheesecake", "Crème Brûlée", "Red Velvet Cake", "Affogato"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            const categoryElement = document.createElement('h3');
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);

            const itemListElement = document.createElement('ul');
            menuContainer.appendChild(itemListElement);

            menu[category].forEach(item => {
                const listItemElement = document.createElement('li');
                listItemElement.textContent = item;
                listItemElement.addEventListener('click', () => addToOrder(item));
                itemListElement.appendChild(listItemElement);
            });

        }
    }
}
    

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
