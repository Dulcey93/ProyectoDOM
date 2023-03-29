import config from "../storage/config.js";
export default {
    showAside() {
        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));
        //Creamos el worker
        const ws = new Worker("storage/wsMyAside.js", { type: "module" });
        //Enviamos un mensaje al worker
        ws.postMessage({ module: "displayAside", data: this.nav });

        //Esta es la respuesta del worker
        ws.addEventListener("message", (e) => {
            // Estamos parseando lo que trae el evento mensaje
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            // Insertamos en nuestro index, en el selector
            document.querySelector("#nav").append(...doc.body.children);
            //terminamos el trabajo del worker
            ws.terminate();
        })
    }
};
