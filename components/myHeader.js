export default {
  title: {name: "Beekeeping"},
  company: [
    {
      name: "About",
      href: "#",
    },
    {
      name: "Bee's life",
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
  listTitle(){
    document.querySelector("#title").insertAdjacentHTML("beforeend", `
        <a class="blog-header-logo text-dark" href="${this.title}">${this.title.name}</a>
    `);
  },
  displayCompany() {
    let plantilla = "";
    this.company.forEach((val, id) => {
      plantilla+=`<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
    });
    document.querySelector("#company").insertAdjacentHTML("beforeend", plantilla);
  }
}
