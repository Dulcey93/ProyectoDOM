export default {
    article: [
        {
            supertitle: "Interesting Topics For You...",
            title: "Sample blog post",
            mark: {
                markname: `January 1, 2021 by`,
                name: "Mark",
                href: "#",
            },
            p1: `This blog post shows a few different types of content that’s
            supported and styled with Bootstrap. Basic typography, lists,
            tables, images, code, and more are all supported as expected.`,
            p2: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
            subtitle: "Blockquotes",
            p3: `This is an example blockquote in action:`,
            p4: `Quoted text goes here.`,
            p5: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
            listtitle: "Example lists",
            list: [
                "First list item",
                "Second list item with a longer description",
                "Third list item to close it out",
            ],
            p6: `And this is an ordered list:`,
            sortlist: [
                "First list item",
                "Second list item with a longer description",
                "Third list item to close it out",
            ],
            p7: `And this is a definiton list:`,
            deflist: [
                {
                    dt: "HyperText Markup Language (HTML)",
                    dd: `The language used to describe and define the content of a Web page`,
                },
                {
                    dt: "Cascading Style Sheets (CSS)",
                    dd: `Used to describe the appearance of Web content`,
                },
                {
                    dt: "JavaScript (JS)",
                    dd: `The programming language used to build advanced Web sites and applications`,
                },
            ],
            subtitle2: "Inline HTML elements",
            inline: {
                inlinename: `HTML defines a long list of available inline tags, a complete list of which can be found on the`,
                name: "Mozilla Developer Network",
                href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
            },
            list2: [
                {
                    name: "To bold text",
                    something: ", use",
                    code: "strong",
                    etiqueta: "strong",
                },
                {
                    name: "To italicize text",
                    something: ", use",
                    code: "em",
                    etiqueta: "em",
                },
                {
                    name: "HTML",
                    something: " should use",
                    code: "abbr",
                    etiqueta: "abbr",
                },
                {
                    name: "— Mark Otto",
                    something: ", should use",
                    code: "cite",
                    etiqueta: "cite",
                },
                {
                    name: "Deleted",
                    something: ", use",
                    code: "del",
                    etiqueta: "del",
                },
                {
                    name: "text",
                    something: " uses",
                    code: "sup",
                    etiqueta: "sup",
                },
            ],
            subtitle3: "Heading",
            p8: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
            subheading: "Sub-heading",
            p9: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
            precode: "Example code block",
            p10: `This is some additional paragraph placeholder content. It's a
            slightly shorter version of the other highly repetitive body text
            used throughout.`,
        },
        {
            title: "Another blog post",
            mark: {
                markname: `December 23, 2020 by `,
                name: "Jacob",
                href: "#",
            },
            p1: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
            p2: {
                name: "Longer quote goes here, maybe with some",
                strong: " emphasized text",
                after: " in the middle of it.",
            },
            p3: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
            subtitle: "Example table",
            deftable: [
                {
                    th1: `Name`,
                    th2: `Upvotes`,
                    th3: `Downvotes`,
                },
                {
                    td1: "Alice",
                    td2: `10`,
                    td3: `11`,
                },
                {
                    td1: "Bob",
                    td2: `4`,
                    td3: `3`,
                },
                {
                    td1: "Charlie",
                    td2: `7`,
                    td3: `9`,
                },
                {
                    tf1: "Totals",
                    tf2: `21`,
                    tf3: `23`,
                },
            ],
            p4: `This is some additional paragraph placeholder content. It's a
            slightly shorter version of the other highly repetitive body text
            used throughout.`,
            p5: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
        },
        {
            feature: "New feature",
            mark: {
                markname: `December 14, 2020 by `,
                name: "Chris",
                href: "#",
            },
            p1: `This is some additional paragraph placeholder content. It has been
            written to fill the available space and show how a longer snippet
            of text affects the surrounding content. We'll repeat it often to
            keep the demonstration flowing, so be on the lookout for this
            exact same string of text.`,
            list: [
                "First list item",
                "Second list item with a longer description",
                "Third list item to close it out",
            ],
            p3: `This is some additional paragraph placeholder content. It's a
            slightly shorter version of the other highly repetitive body text used throughout.`,
        },
        {
            older: "Older",
            href1: "#",
            newer: "Newer",
            href2: "#",
        },
    ],
    showBlog() {
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
