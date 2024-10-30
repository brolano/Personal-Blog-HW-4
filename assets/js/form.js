// TODO: Create a variable that selects the form element
const form = document.getElementById('form');
const error = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    localStorage.setItem("blogUsername", username);
    localStorage.setItem("blogTitle", title)
    localStorage.setItem("blogContent", content);

    redirectPage("blog.html");

});


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
