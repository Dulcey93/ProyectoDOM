import config from "../storage/config.js";
export default {
    showBanner() {
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
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