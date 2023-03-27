export default {
    myBanner:{
        name: "Beekeeping Tips and Tricks",
        paragraph: "Learn everything you need to know about beekeeping, from hive management to honey harvesting, with our expert tips and tricks",
        image: "./img/beekeeping.png",
        btn: {
            name: "Continue reading...",
            href: "#"
        }
    },
    showBanner() {
        //Creamos el worker
        const ws = new Worker("storage/wsMyBanner.js", { type: "module" });
        //Enviamos un mensaje al worker
        let id = [];
        let count = 0;
        ws.postMessage({ module: "showMyBanner", data: this.banner });
        id = [".imgStyle", "#banner"];

        //Esta es la respuesta del worker
        ws.addEventListener("message", (e) => {
            // Estamos parseando lo que trae el evento mensaje
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            // Insertamos en nuestro index
            document.querySelector(id[count]).append(...doc.body.children);
            //terminamos el trabajo del worker
            (id.length - 1 == count) ? ws.terminate() : count++;
        })
    }
}