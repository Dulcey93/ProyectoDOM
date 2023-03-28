export default {
    nav: [
        {
            title: "About",
            paragraph: `
            Customize this section to tell your visitors a little bit about
            your publication, writers, content, or something else entirely.
            Totally up to you.
            `,
        },
        {
            title: "Topics",
            link: [
                {
                    name: "About",
                    href: "#",
                },
                {
                    name: "Bee's life",
                    href: "#",
                },
                {
                    name: "Buzz Bees",
                    href: "#",
                },
                {
                    name: "Tools of Trade",
                    href: "#",
                },
                {
                    name: "Hive Management",
                    href: "#",
                },
                {
                    name: "Honey Harvesting",
                    href: "#",
                },
                {
                    name: "Bee Products",
                    href: "#",
                },
                {
                    name: "Beekeeping Challenges",
                    href: "#",
                },
                {
                    name: "Beekeeping planet",
                    href: "#",
                },
                {
                    name: "Law's Bee",
                    href: "#",
                },
                {
                    name: "Community",
                    href: "#",
                },
                {
                    name: "Profit",
                    href: "#",
                }
            ],
        },
        {
            title: "Archives",
            link: [
                {
                    name: "April 2",
                    href: "#",
                },
                {
                    name: "April 3",
                    href: "#",
                },
                {
                    name: "April 4",
                    href: "#",
                },
                {
                    name: "April 5",
                    href: "#",
                },
                {
                    name: "November 1",
                    href: "#",
                },
                {
                    name: "November 2",
                    href: "#",
                },
                {
                    name: "November 3",
                    href: "#",
                },
                {
                    name: "December 3",
                    href: "#",
                },
                {
                    name: "December 4",
                    href: "#",
                },
                {
                    name: "December 5",
                    href: "#",
                },
            ],
        }

    ],
    showAside() {
        //Creamos el worker
        const ws = new Worker("storage/wsMyAside.js", { type: "module" });
        //Enviamos un mensaje al worker
        ws.postMessage({ module: "displayAside", data: this.nav });

        //Esta es la respuesta del worker
        ws.addEventListener("message", (e) => {
            // Estamos parseando lo que trae el evento mensaje
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            // Insertamos en nuestro index, en el selector #company
            document.querySelector("#nav").append(...doc.body.children);
            //terminamos el trabajo del worker
            ws.terminate();
        })
    }
};
