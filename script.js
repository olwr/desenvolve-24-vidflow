const containerVideos = document.querySelector('.videos__container');
const searchBar = document.querySelector('.pesquisar__input');
const categoryBtn= document.querySelectorAll('.superior__item');

const form = document.querySelector('[data-formulario]');

// Show and Search Videos
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

// Send Videos
async function postVideo(title, desc, url, img, category) {
    const api = await fetch("http://localhost:3000/videos", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${desc} mil visualizações`,
            url: url,
            imagem: img,
            categoria: category
        })
    });

    if (!api.ok) {
        throw new Error('Não foi possível enviar o vídeo');
    };

    const convertedApi = api.json();
    return convertedApi;
}

searchAndShow();

async function createVideo(e) {
    e.preventDefault();

    const img = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const title = document.querySelector('[data-titulo]').value;
    const category = document.querySelector('[data-categoria]').value;
    const desc = Math.floor(Math.random() * 10).toString();

    try {
        await postVideo(title, desc, url, img, category);
        window.location.href = '../pages/sent-video.html';
    } catch (err) {
        alert(err);
    };
}

form.addEventListener('submit', e => createVideo(e));