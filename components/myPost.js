export default {
  post: [
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 12",
      paragraph: `This is a wider card with supportilkasnfsalkdnaskdnalkdsana`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 13",
      paragraph: `This is a wider card with supportilkasnfsalkdnaskdnalkdsana`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 14",
      paragraph: `This is a wider card with supportilkasnfsalkdnaskdnalkdsana`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 15",
      paragraph: `This is a wider card with supportilkasnfsalkdnaskdnalkdsana`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 16",
      paragraph: `This is a wider card with supportilkasnfsalkdnaskdnalkdsana`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 17",
      paragraph: `This is a wider card with supportilkasnfsalkdnaskdnalkdsana`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    }
  ],
  showPost() {
    this.post.forEach((val, id) => {
      document.querySelector("#post").insertAdjacentHTML(
        "beforeend",
        `
        <div class="card-group">
          <div class="row g-0 p-4 border rounded overflow-hidden flex-md-row shadow-sm position-relative">
          <div class="col-md-8">
              <div class="card-body">
                <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.date}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
              </div>
          </div>
            <div class="col-md-4">
              <img class="img-fluid rounded-end" src="${val.image}" alt="Bee Icon">
            </div>
          </div>
        </div>
        
        `
      );
    });
  }
};