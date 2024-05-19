// Filters
searchBar.addEventListener('input', filterSearch);

function filterSearch() {
    const videos = document.querySelectorAll('.videos__item');
    const filterValue = searchBar.value.toLowerCase();

    videos.forEach((video) => {
        const title = video.querySelector('.titulo-video').textContent.toLowerCase();

        video.style.display = filterValue ? title.includes(filterValue) ? 'block' : 'none' : 'block';
    });
};

categoryBtn.forEach((button) => {
    const categoryName = button.getAttribute('name');
    button.addEventListener('click', () => filterByCategory(categoryName));
});

function filterByCategory(filter) {
    const videos = document.querySelectorAll('.videos__item');
    const filterValue = filter.toLowerCase();

    videos.forEach((video) => {
        const category = video.querySelector('.categoria').textContent.toLowerCase();

        video.style.display = filterValue!= 'tudo' ? category.includes(filterValue) ? 'block' : 'none' : 'block';
    })
};
