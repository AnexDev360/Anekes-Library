// Simulated data
const books = [
    { id: 1, title: "Book 1", author: "Author 1", category: "Fiction" },
    { id: 2, title: "Book 2", author: "Author 2", category: "Non-Fiction" },
    { id: 3, title: "Book 3", author: "Author 3", category: "Mystery" }
];

// Function to display books
function displayBooks() {
    const container = document.querySelector('.container');
    container.innerHTML = '<h2>Browse Books</h2>';

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <button onclick="addToFavorites(${book.id})">Add to Favorites</button>
        `;
        container.appendChild(bookElement);
    });
}

// Function to add a book to favorites
function addToFavorites(bookId) {
    const book = books.find(book => book.id === bookId);
    if (book) {
        // Simulated action: Add book to favorites list
        console.log(`Added "${book.title}" to favorites.`);
    }
}

// Function to display user profile
function displayUserProfile() {
    const container = document.querySelector('.container');
    container.innerHTML = '<h2>User Profile</h2>';

    // Simulated user profile data
    const userProfile = {
        username: "aneke123",
        email: "aneke@example.com",
        borrowedBooks: ["Book 1", "Book 2"]
    };

    const profileElement = document.createElement('div');
    profileElement.innerHTML = `
        <p>Username: ${userProfile.username}</p>
        <p>Email: ${userProfile.email}</p>
        <h3>Borrowed Books</h3>
        <ul>
            ${userProfile.borrowedBooks.map(book => `<li>${book}</li>`).join('')}
        </ul>
    `;
    container.appendChild(profileElement);
}

// Function to display sections
function displaySection(sectionId) {
    // Clear the container
    const container = document.querySelector('.container');
    container.innerHTML = '';

    // Display the correct section based on sectionId
    switch (sectionId) {
        case 'browse':
            displayBooks();
            break;
        case 'profile':
            displayUserProfile();
            break;
        // Add more cases for other sections if needed
        default:
            displayBooks();
            break;
    }

    // Update active class in navigation
    document.querySelectorAll('nav ul li').forEach(li => {
        li.classList.remove('active');
    });
    const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }
}

// Initial display of profile as default section
document.addEventListener('DOMContentLoaded', function() {
    // Set the default section to be visible on page load
    displaySection('profile');

    // Setup event listeners for all navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default anchor behavior
            const sectionId = this.getAttribute('href').substring(1);
            displaySection(sectionId);
        });
    });
});
