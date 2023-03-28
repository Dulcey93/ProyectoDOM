import config from "../storage/config.js";
export default {
    showBlog() {
        config.dataMyBlog();
        Object.assign(this, JSON.parse(localStorage.getItem("myBlog")));
        //Creamos el worker
        const ws = new Worker("storage/wsMyBlog.js", { type: "module" });
        //Enviamos un mensaje al worker
        ws.postMessage({ module: "displayBlog", data: this.article });

        //Esta es la respuesta del worker
        ws.addEventListener("message", (e) => {
            // Estamos parseando lo que trae el evento mensaje
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            // Insertamos en nuestro index, en el selector #company
            document.querySelector("#articles").append(...doc.body.children);
            //terminamos el trabajo del worker
            ws.terminate();
        })
    }
};
