// script.js

// Add event listener to book now buttons
document.querySelectorAll('.btn-book').forEach(button => {
    button.addEventListener('click', () => {
        // Get the package ID from the button's parent element
        const packageId = button.parentNode.id;
        console.log(`Book now button clicked for package ${packageId}`);
        // Call a function to book the package (e.g., make an API request)
        bookPackage(packageId);
    });
});

// Function to book a package (e.g., make an API request)
function bookPackage(packageId) {
    console.log(`Booking package ${packageId}...`);
    // Make an API request to book the package
    // ...
}