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
                    something: "should use",
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
                    code: "strong",
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
                strong: "emphasized text",
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
                    td1: "Totals",
                    td2: `21`,
                    td3: `23`,
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
        const data = this.article.map((val, id) => {
            switch (true) {
                case val.supertitle:
                    return this.first(val);
                case val.deftable:
                    return this.second(val);
                case val.feature:
                    return this.third(val);
                case val.nav:
                    return this.fourth(val);
                default:
                    console.log("Doesn't exist");
                    break;
            }
        });
        document
            .querySelector("#articles")
            .insertAdjacentHTML("beforeend", data.join(""));
    },
    first(val) {
        return `
        <h3 class="pb-4 mb-4 fst-italic border-bottom">${val.supertitle}</h3>
        <article class="blog-post">
          <h2 class="blog-post-title">${val.title}</h2>
          <p class="blog-post-meta">
          ${val.mark.markname}<a href="${val.mark.href}"> ${val.mark.name}</a>
          </p>
          <p>${val.p1}</p>
          <hr/>
          <p>${val.p2}</p>
          <h2>${val.subtitle}</h2>
          <p>${val.p3}</p>
          <blockquote class="blockquote">
            <p>${val.p4}</p>
          </blockquote>
          <p>${val.p5}</p>
          <h3>${val.listtitle}</h3>
          <p>${val.p5}</p>
          <ul>
          ${val.list.map((val, id) => `<li>${val}</li>`).join("")}
          </ul>
          <p>${val.p6}</p>
          <ol>
          ${val.sortlist.map((val, id) => `<li>${val}</li>`).join("")}
          </ol>
          <p>${val.p7}</p>
          <dl>
          ${val.deflist
                .map((val, id) => `<dt>${val.dt}</dt><dd>${val.dd}</dd>`)
                .join("")}
          </dl>
          <h2>${val.subtitle2}</h2>
          <p>${val.inline.inlinename}
            <a href="${val.inline.href}">${val.inline.name}</a>.
          </p>
          <ul>
          ${val.list2
                .map(
                    (val, id) => `
          <li><${val.etiqueta}>${val.name}</${val.etiqueta}>${val.something}
          <code class="language-plaintext highlighter-rouge">&lt;${val.code}&gt</code>
          </li>`
                )
                .join("")}
          </ul>
          <p>${val.p8}</p>
          <h2>${val.subtitle3}</h2>
          <p>${val.p8}</p>
          <h3>${val.subheading}</h3>
          <p>${val.p9}</p>
          <pre><code>${val.precode}</code></pre>
          <p>${val.p10}</p>
        </article>`;
    },
    second(val) {
        return `
    <article class="blog-post">
          <h2 class="blog-post-title">${val.title}</h2>
          <p class="blog-post-meta">${val.mark.markname}<a href="${val.mark.href
            }">${val.mark.name}</a></p>
          <p>${val.p1}</p>
          <blockquote>
            <p>${val.p2.name}<strong>${val.p2.strong}</strong> ${val.p2.after
            }</p>
          </blockquote>
          <p>${val.p3}</p>
          <h3>${val.subtitle}</h3>
          <p>${val.p4}</p>
          <table class="table">
            <thead>
              <tr>
                <th>${val.deftable.th1}</th>
                <th>${val.deftable.th2}</th>
                <th>${val.deftable.th3}</th>
              </tr>
            </thead>
            <tbody>
              ${val.deftable
                .map(
                    (val, id) =>
                        `
                <tr>
                    <td>${val.td1}</td>
                    <td>${val.td2}</td>
                    <td>${val.td3}</td>
                </tr>
                `
                )
                .join("")}
            </tbody>
            <tfoot>
              <tr>
                <td>${val.deftable.td1}</td>
                <td>${val.deftable.td2}</td>
                <td>${val.deftable.td3}</td>
              </tr>
            </tfoot>
          </table>
          <p>${val.p5}</p>
    </article>`;
    },
    third(val) {
        return `
    <article class="blog-post">
          <h2 class="blog-post-title">${val.feature}</h2>
          <p class="blog-post-meta">${val.mark.markname}<a href="${val.mark.href
            }">${val.mark.name}</a></p>
          <p>${val.p1}</p>
          <ul>
          ${val.list.map((val, id) => `<li>${val}</li>`).join("")}
          </ul>
          <p>${val.p3}</p>
    </article>`;
    },
    fourth(val) {
        return `
    <nav class="blog-pagination" aria-label="Pagination">
          <a class="btn btn-outline-primary" href="${val.href1}">${val.older}</a>
          <a class="btn btn-outline-secondary disabled" href="${val.href2}" tabindex="-1" aria-disabled="true">${val.newer}</a>
    </nav>
       `;
    },
};
