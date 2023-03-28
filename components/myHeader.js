import config from "../storage/config.js";
export default {
  showHeader(){
    //Le decimos que el this va a contener lo que haya en el localStorage en la key "myHeader"
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    //Creamos el worker
    const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
    //Enviamos un mensaje al worker
    let id = [];
    let count = 0;
    // id.push("#title");
    ws.postMessage({module: "listTitle", data: this.title});
    // id.push("#company");
    ws.postMessage({module: "displayCompany", data: this.company});
    id = ["#title", "#company"];

    //Esta es la respuesta del worker
    ws.addEventListener("message", (e)=>{
      // Estamos parseando lo que trae el evento mensaje
      let doc = new DOMParser().parseFromString(e.data, "text/html");
      // Insertamos en nuestro index, en el selector #company
      document.querySelector(id[count]).append(...doc.body.children);
      //terminamos el trabajo del worker
      (id.length-1==count)? ws.terminate(): count++;
    })
  }
}
