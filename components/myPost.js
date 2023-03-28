import config from "../storage/config.js";
export default {
  showPost() {
    config.dataMyPost();
    Object.assign(this, JSON.parse(localStorage.getItem("myPost")));
    //Creamos el worker
    const ws = new Worker("storage/wsMyPost.js", {type: "module"});
    //Enviamos un mensaje al worker
    ws.postMessage({module: "displayPost", data: this.post});

    //Esta es la respuesta del worker
    ws.addEventListener("message", (e)=>{
      // Estamos parseando lo que trae el evento mensaje
      let doc = new DOMParser().parseFromString(e.data, "text/html");
      // Insertamos en nuestro index, en el selector #company
      document.querySelector("#post").append(...doc.body.children);
      //terminamos el trabajo del worker
      ws.terminate();
    })
  }
  
}