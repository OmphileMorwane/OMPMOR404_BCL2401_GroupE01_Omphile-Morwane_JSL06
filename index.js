// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Shrimp Cocktail", "Beef Carpaccio", "Caprese Salad"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Butternut Squash Ravioli with Sage Butter Sauce", "Lobster Risotto", "Vegetarian Lasagna"],
    Desserts: ["Tiramisu", "Cheesecake", "Crème Brûlée", "Red Velvet Cake", "Affogato"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu'); 

    for (const category in menu) {       //Iterate through each category in the menu object.
        if (menu.hasOwnProperty(category)) {
            const categoryElement = document.createElement('h3');     //represents the category name
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);       //append the h3 element to the html

            const itemListElement = document.createElement('ul');     //Function represents a list of items for the category.
            menuContainer.appendChild(itemListElement);      // appends ul to the menu container in HTML

            menu[category].forEach(item => {                    // Iterate through each item in the currrent category
                const listItemElement = document.createElement('li');           //<li> element to represent current item.
                listItemElement.textContent = item;                // set text content of the <li> element to the item name.
                listItemElement.addEventListener('click', () => addToOrder(item));   //Add click event lstener to add items to the order
                itemListElement.appendChild(listItemElement);      //append the <ki> element to the list of items for the category.
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
            case "Shrimp Cocktail":
            case "Beef Carpaccio":
            case "Caprese Salad":
                itemPrice = 40; // Set the price for Starters
                break;
            case "Margherita Pizza":
            case "Spaghetti Carbonara":
                itemPrice = 150; // Set the price for Main Courses
                break;
            case "Butternut Squash Ravioli with Sage Butter Sauce":
            case "Lobster Risotto":
            case "Vegetarian Lasagna":
                itemPrice = 300; // Set the price for Main Courses
                break;
            case "Tiramisu":
            case "Cheesecake":
                itemPrice = 80; // Set the price for Desserts
                break;
            case "Crème Brûlée":
            case "Red Velvet Cake":
            case "Affogato":
                itemPrice = 70; // Set the price for Desserts
                break;
            default:
                itemPrice = 0; // Default price if item name not recognized
                break;
        }
    
        const currentTotal = parseFloat(orderTotalElement.textContent);
        const newTotal = currentTotal + itemPrice;
        orderTotalElement.textContent = newTotal.toFixed(2); // Displaying total with two decimal place
}

// Function to initialize the menu system
function initMenuSystem(menu) {
        displayMenuItems(menu);

    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
