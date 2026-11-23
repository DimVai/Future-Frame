(() => {
    const root = document.currentScript.getAttribute("src").replace("partials/header.js", "");
    const current = document.body.dataset.page;
    const links = [
        ["home", "Αρχική", "index.html"],
        ["applications", "Εφαρμογές", "pages/applications.html"],
        ["contact", "Επικοινωνία", "pages/contact.html"]
    ];
    const navigation = links.map(([id, title, path]) => {
        const active = current === id ? ' aria-current="page"' : "";
        return `<a href="${root}${path}"${active}>${title}</a>`;
    }).join("");

    document.getElementById("page-header").innerHTML = `
        <a class="skip" href="#main">Μετάβαση στο περιεχόμενο</a>
        <div class="wrap header-inner">
            <a class="brand" href="${root}index.html" lang="en">
                <img src="${root}resources/future-frame.png" alt="" width="498" height="374">
                Future Frame
            </a>
            <nav aria-label="Κύρια πλοήγηση">${navigation}</nav>
            <a class="button header-action" href="${root}pages/contact.html">Ας μιλήσουμε <span aria-hidden="true">↗</span></a>
        </div>`;
})();
