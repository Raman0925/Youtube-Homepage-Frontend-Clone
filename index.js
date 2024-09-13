// Select the sidebar and container elements
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

// Function to toggle sidebar size and container padding
const addingSidebarClass = () => {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
};

// Example of adding an event listener to a menu icon
const menuIcon = document.querySelector('.menu-icon');
if (menuIcon) {
    menuIcon.addEventListener('click', addingSidebarClass);
}
