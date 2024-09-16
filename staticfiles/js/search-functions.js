let searchBtn = document.getElementById('search-btn');
let closeBtn = document.getElementById('close-search-bar');

// Open search
function openSearchBar () {
  let searchField = document.getElementById('search-field');
  searchField.classList.add('open');
  closeBtn.classList.add('open');
}

searchBtn.addEventListener('click', openSearchBar);

// Close search
function closeSearchBar () {
  let searchField = document.getElementById('search-field');
  searchField.classList.remove('open');
  closeBtn.classList.remove('open');
}

closeBtn.addEventListener('click', closeSearchBar);