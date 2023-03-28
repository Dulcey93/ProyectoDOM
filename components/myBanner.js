export default {
    myBanner:{
        name: "Beekeeping Tips and Tricks",
        paragraph: "Learn everything you need to know about beekeeping, from hive management to honey harvesting, with our expert tips and tricks",
        btn: {
            name: "Continue reading...",
            href: "#"
        }
    },
    showBanner() {
        //Creamos el worker
        const ws = new Worker("storage/wsMyBanner.js", { type: "module" });
        //Enviamos un mensaje al worker
        let count = 0;
        ws.postMessage({ module: "showMyBanner", data: this.myBanner });
        //Esta es la respuesta del worker
        ws.addEventListener("message", (e) => {
            // Estamos parseando lo que trae el evento mensaje
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            // Insertamos en nuestro index
            document.querySelector("#banner").append(...doc.body.children);
            //terminamos el trabajo del worker
            ws.terminate();
        })
    }
}