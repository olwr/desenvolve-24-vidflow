const containerVideos = document.querySelector('.videos__container');
const searchBar = document.querySelector('.pesquisar__input');
const categoryBtn= document.querySelectorAll('.superior__item');

async function searchAndShow() {
    try {
        const api = await fetch("http://localhost:3000/videos");
        const videos = await api.json();
        videos.forEach((video) => {
            if(video.categoria == ""){
                throw new Error('Vídeo não tem categoria');
        }
            containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="logo do canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                        </div>
                </li>
                `;
        });
    } catch (err) {
        containerVideos.innerHTML = `
            <p> Houve um erro a carregar os vídeos → ${err}<p>
            `;
    }
};

searchAndShow();

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
