// TODO: Create a variable that selects the form element
const form = document.getElementById('form');
const error = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
document.getElementById("blogForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
  
    if (username && title && content) {
      const newPost = { username, title, content };
  
      const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
      
      blogPosts.push(newPost);
  
      localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

      error.textContent = "";
  
      redirectPage("blog.html");
    } else {
        error.textContent = "Please fill in all fields before submitting.";
    }
  });


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
