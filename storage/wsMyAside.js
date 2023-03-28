export let wsMyAside = {
    displayAside(navs) {
            const data = navs.map((val, id) => {
                return val.link ? this.list(val) : this.cards(val);
            });
            return data;
        },
        cards(val) {
            return `
        <div class="m-4 p-2 mb-3 bg-light rounded">
            <h4 class="fst-italic">${val.title}</h4>
            <p class="mb-0">${val.paragraph}</p>
        </div>
        `;
        },
        list(val) {
            return `
            <div class="p-4">
                <h4 class="fst-italic">${val.title}</h4>
                <ol class="list-unstyled mb-0">
                    ${val.link
                    .map(
                        (val, id) =>
                            `<li><a href="${val.href}">${val.name}</a></li>`
                    )
                    .join("")}
                </ol>
            </div>
        `;
        }
    }
self.addEventListener("message", (e) => {
    postMessage(wsMyAside[`${e.data.module}`](e.data.data));
});