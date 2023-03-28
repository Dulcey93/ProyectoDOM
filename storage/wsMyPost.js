export let wsMyPost = {
    displayPost(posts) {
        let plantilla = "";
        posts.forEach((val, id) => {
            plantilla += `
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
            `;
        });
        return plantilla;
    }
};
self.addEventListener("message", (e) => {
    postMessage(wsMyPost[`${e.data.module}`](e.data.data));
});