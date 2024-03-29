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
    
// Callback function for adding an item to the order
function addToOrder(itemName) {
        const orderItemsList = document.getElementById('order-items');
        const orderTotalElement = document.getElementById('order-total');
    
        const listItemElement = document.createElement('li');
        listItemElement.textContent = itemName;
        orderItemsList.appendChild(listItemElement);
    
        // Assign fixed prices based on the item name
        let itemPrice;
        switch (itemName) {
            case "Garlic Bread":
            case "Bruschetta":
                itemPrice = 6.99; // Set the price for Starters
                break;
            case "Shrimp Cocktail":
            case "Beef Carpaccio":
            case "Caprese Salad":
                itemPrice = 8.99; // Set the price for Starters
                break;
            case "Margherita Pizza":
            case "Spaghetti Carbonara":
                itemPrice = 12.99; // Set the price for Main Courses
                break;
            case "Butternut Squash Ravioli with Sage Butter Sauce":
            case "Lobster Risotto":
            case "Vegetarian Lasagna":
                itemPrice = 15.99; // Set the price for Main Courses
                break;
            case "Tiramisu":
            case "Cheesecake":
                itemPrice = 7.99; // Set the price for Desserts
                break;
            case "Crème Brûlée":
            case "Red Velvet Cake":
            case "Affogato":
                itemPrice = 9.99; // Set the price for Desserts
                break;
            default:
                itemPrice = 0; // Default price if item name not recognized
                break;
        }
    
        const currentTotal = parseFloat(orderTotalElement.textContent);
        const newTotal = currentTotal + itemPrice;
        orderTotalElement.textContent = newTotal.toFixed(2); // Displaying total with two decimal plac
}

// Function to initialize the menu system
function initMenuSystem(menu) {
        displayMenuItems(menu);

    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
