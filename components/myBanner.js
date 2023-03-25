export default {
    title: "Beekeeping Tips and Tricks",
    paragraph: "Learn everything you need to know about beekeeping, from hive management to honey harvesting, with our expert tips and tricks",
    image: "./img/beekeeping.png",
    btn: {
        name:"Continue reading...",
        href: "#"
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `
            <h1 class="display-4 fst-italic">${this.title}</h1>
            <p class="lead my-3">${this.paragraph}</p>
            <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>
        `);
    }
}
  