const inputTitle = document.getElementById('input-title');
const inputUrl = document.getElementById('input-url');
const btnAdd = document.getElementById('btn-add');
const formLinks = document.getElementById('form-links');
const linksContainer = document.getElementById('links-container');

let linksArray = JSON.parse(localStorage.getItem('links')) || [];

showLinks();

formLinks.addEventListener('submit', e => {
  e.preventDefault();
  
  const link = {
    title: inputTitle.value,
    url: inputUrl.value
  }

  linksArray.push(link);
  localStorage.setItem('links', JSON.stringify(linksArray));

  showLinks();
  
  formLinks.reset();
  inputTitle.focus();
})

function showLinks() {
  linksContainer.innerHTML = '';

  linksArray.forEach(link => {
    linksContainer.innerHTML += `
      <div class="col-md-4 col-lg-3 mb-3">
        <article class="card p-3 shadow-sm">
          <h3 class="fs-4">${link.title}</h3>
          <a class="btn btn-success" target="_blank" href="${link.url}">Ir</a>
        </article>
      </div>
    `;
  })
}

