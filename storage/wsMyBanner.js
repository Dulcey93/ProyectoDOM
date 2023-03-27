export let wsMyBanner = {
    showMyBanner(object){
        return `url(${object.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `
            <h1 class="display-4 fst-italic">${this.title}</h1>
            <p class="lead my-3">${this.paragraph}</p>
            <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>
        `);
    }
};
self.addEventListener("message", (e) => {
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
});