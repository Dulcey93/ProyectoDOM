export let wsMyBlog = {
    displayBlog(articles) {
        const data = articles.map((val, id) => {
            switch (true) {
                case val.supertitle ? true : false:
                    return this.first(val);
                case val.deftable ? true : false:
                    return this.second(val);
                case val.feature ? true : false:
                    return this.third(val);
                case val.older ? true : false:
                    return this.fourth(val);
                default:
                    console.log("Doesn't exist");
                    break;
            }
        });
        return data;
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
              ${val.deftable
                .map(
                    (val, id) =>
                        `
                ${val.th1 ? `
                <tr>
                    <th>${val.th1}</th>
                    <th>${val.th2}</th>
                    <th>${val.th3}</th>
                </tr>`: ""}
                `
                )
                .join("")}
            </thead>
            <tbody>
            ${val.deftable
                .map(
                    (val, id) =>
                        `
                ${val.td1 ? `
                <tr>
                    <td>${val.td1}</td>
                    <td>${val.td2}</td>
                    <td>${val.td3}</td>
                </tr>`: ""}
                `
                )
                .join("")}
            </tbody>
            <tfoot>
            ${val.deftable
                .map(
                    (val, id) =>
                        `
                ${val.tf1 ? `
                <tr>
                    <td>${val.tf1}</td>
                    <td>${val.tf2}</td>
                    <td>${val.tf3}</td>
                </tr>`: ""}
                `
                )
                .join("")}
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
}
self.addEventListener("message", (e) => {
    postMessage(wsMyBlog[`${e.data.module}`](e.data.data));
});