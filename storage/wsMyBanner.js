export let wsMyBanner = {
    showMyBanner(object){
        let plantilla = `
        <h1 class="display-4 fst-italic">${object.name}</h1>
        <p class="lead my-3">${object.paragraph}</p>
        <p class="lead mb-0"><a href="${object.btn.href}" class="text-white fw-bold">${object.btn.name}</a></p>`;
        return plantilla;
    }
};
self.addEventListener("message", (e) => {
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
});