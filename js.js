document.addEventListener("DOMContentLoaded", function() {
    // Wait for the HTML document to finish loading before executing the code

    const sidebar = document.querySelector(".sidebar");
    // Get a reference to the sidebar element

    const menuItems = document.querySelectorAll(".menu-item");
    // Get a reference to all the menu item elements

    const submenus = document.querySelectorAll(".submenu");
    // Get a reference to all the submenu elements

    function adjustSubmenuHeight() {
        // This function adjusts the height of the submenus
        const sidebarHeight = sidebar.offsetHeight;
        // Get the height of the sidebar
        submenus.forEach(submenu => {
            submenu.style.height = `${sidebarHeight}px`;
            // Set the height of each submenu to match the sidebar height
        });
    }

    function adjustSubmenuPosition() {
        // This function adjusts the position of the submenus
        const sidebarTop = sidebar.getBoundingClientRect().top;
        // Get the top position of the sidebar
        menuItems.forEach(menuItem => {
            const submenu = menuItem.querySelector('.submenu');
            // Get the submenu element for each menu item
            const menuItemTop = menuItem.getBoundingClientRect().top;
            // Get the top position of the menu item
            const offset = menuItemTop - sidebarTop;
            // Calculate the offset between the menu item and the sidebar
            submenu.style.transform = `translateY(-${offset}px)`;
            // Translate the submenu upwards by the calculated offset
        });
    }

    function initialize() {
        // This function calls the other two functions to set the initial state
        adjustSubmenuHeight();
        adjustSubmenuPosition();
    }

    // Call the initialize function to set the initial state
    initialize();

    // Add event listeners to handle window resize and scroll events
    window.addEventListener("resize", initialize);
    window.addEventListener("scroll", adjustSubmenuPosition);
});
