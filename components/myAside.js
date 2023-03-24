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
        const data = this.nav.map((val, id) => {
            return val.link ? this.list(val) : this.cards(val);
        });
        document
            .querySelector("#nav")
            .insertAdjacentHTML("beforeend", data.join(""));
    },
    cards(val) {
        return `
    <div class="m-4 p-2 mb-3 bg-light rounded">
        <h4 class="fst-italic">${val.title}</h4>
        <p class="mb-0">${val.paragraph}</p>
    </div>
    `;
    },
    list(val) {
        return `
        <div class="p-4">
            <h4 class="fst-italic">${val.title}</h4>
            <ol class="list-unstyled mb-0">
                ${val.link
                .map(
                    (val, id) =>
                        `<li><a href="${val.href}">${val.name}</a></li>`
                )
                .join("")}
            </ol>
        </div>
    `;
    },
};
