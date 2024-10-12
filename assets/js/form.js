// TODO: Create a variable that selects the form element
const formEl = document.getElementById('form');
const errorEl = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        errorEl.textContent = "Please complete the form.";
        return;
    }

    const formData = [{
        username: username,
        title: title,
        content: content
    }];

    localStorage.setItem('formData', JSON.stringify(formData));
    redirectPage('blog.html');
    }

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    const usernameInput = document.getElementById('username');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const errorDisplay = document.getElementById('error');

    function handleFormSubmit(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (username === '' || title === '' || content === '') {
            errorDisplay.textContent = 'All fields are required.';
        } else {
            errorDisplay.textContent = '';

            console.log('Form submitted!');
            console.log(`Username: ${username}`);
            console.log(`Title: ${title}`);
            console.log(`Content: ${content}`);

            window.location.href = 'blog.html';
        }
    }

    if (blogForm) {
        blogForm.addEventListener('submit', handleFormSubmit);
    } else {
        console.error('Form element not found in the DOM.');
    }
});