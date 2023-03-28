export default {
  post: [
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 12",
      paragraph: `This is a card in a card-group with styles and calls in Js with workers`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 13",
      paragraph: `This is a card in a card-group with styles and calls in Js with workers`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 14",
      paragraph: `This is a card in a card-group with styles and calls in Js with workers`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 15",
      paragraph: `This is a card in a card-group with styles and calls in Js with workers`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 16",
      paragraph: `This is a card in a card-group with styles and calls in Js with workers`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    },
    {
      article: "FOR NEWBEES",
      title: "Featured post",
      date: "Nov 17",
      paragraph: `This is a card in a card-group with styles and calls in Js with workers`,
      image: "./img/beeicon.png",
      btn: {
        name: "Continue...",
        href: "#",
      },
    }
  ],
  showPost() {
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