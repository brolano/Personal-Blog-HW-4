// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggleButton.textContent = 'Dark';
  } else {
    toggleButton.textContent = 'Light';
  }
});



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
  return blogPosts ? blogPosts : [];
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newPost) {
  const blogPosts = readLocalStorage(); 
  blogPosts.push(newPost);
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}



// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'index.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

