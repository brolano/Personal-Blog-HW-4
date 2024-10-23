// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement(tag, attributes, parentSelector = null, textContent = '') {
    // Create the new element
    const newElement = document.createElement(tag);

    // Set any attributes passed to the function
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            newElement.setAttribute(key, attributes[key]);
        }
    }

    // Set the text content if provided
    if (textContent) {
        newElement.textContent = textContent;
    }

    // Determine the parent element
    const parentElement = parentSelector ? document.querySelector(parentSelector) : mainElement;

    // Append the new element to the parent element
    if (parentElement) {
        parentElement.appendChild(newElement);
    } else {
        console.error(`Parent element not found: ${parentSelector}`);
    }
}

// Add functionality to the backButton if required
if (backButton) {
    backButton.addEventListener('click', function() {
        console.log('Back button clicked!');
        // Add your back navigation functionality here
    });
}



// TODO: Create a function that handles the case where there are no blog posts to display
function 

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
