export default {
  post: [
    {
        article: "FOR NEWBEES",
        title: "Featured post",
        date: "Nov 12",
        paragraph: `This is a wider card with supportilkasnfsalkdnaskdnalkdsana`,
        image:"../img/beeicon.png",
        btn:{
            name: "Continue...",
            href: "#"
        }
    }
  ],
  showPost() {
    this.post.forEach((val, id) => {
      document.querySelector("#post").insertAdjacentHTML(
        "beforeend",
        `<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.date}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="responsiveImg" src="${val.image}" alt="Bee Icon">
              </div>
            </div>
         </div>
        `
      );
    });
  },
};
