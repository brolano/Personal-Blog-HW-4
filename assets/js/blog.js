// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function createBlogPost(post) {
    const blogItem = document.createElement("article");
    blogItem.classList.add("blog-item");

    const titleElement = document.createElement("h2")
    titleElement.innerText = post.title;

    const authorElement = document.createElement(`Posted by: ${post.username}`);

    const contentElement = document.createElement("blockquote");
    contentElement.innerText = post.content;

    blogItem.appendChild(titleElement);
    blogItem.appendChild(authorElement);
    blogItem.appendChild(contentElement);

    const blogListContainer = document.getElementById("blogListContainer");
    blogListContainer.appendChild(blogItem);
}


// TODO: Create a function that handles the case where there are no blog posts to display
function displayBlogPost () {
    const username = localStorage.getItem("blogUsername");
    const title = localStorage.getItem("blogTitle");
    const content = localStorage.getItem("blogContent");
    if (username && title && content) {
        document.getElementById("postUsername").innerText = username;
        document.getElementById("postTitle").innerText = title;
        document.getElementById("postContent").innerText = content;
    } else {
        document.getElementById("blogMessage").innerText = "No blog posts available.";
    }
}

window.onload = displayBlogPost;


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = readLocalStorage();
    if (blogPosts.length > 0) {
        const blogListContainer = document.getElementById("blogListContainer");
        blogListContainer.innerHTML = "";

        blogPosts.forEach(post => {
            createBlogPostElement(post);
        });
    } else {
        displayNoPostsMessage();
    }
function displayNoPostsMessage() {
    const blogListContainer = document.getElementById("blogListContainer");
    blogListContainer.innerHTML = "<p>No blog posts available.</p>";
}
}

// TODO: Call the `renderBlogList` function
window.onload = renderBlogList;

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
document.addEventListener('clicked', function () {
    location.assign(redirectURL); 
  });