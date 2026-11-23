(() => {
    const root = document.currentScript.getAttribute("src").replace("partials/footer.js", "");
    document.getElementById("page-footer").innerHTML = `
        <div class="wrap footer-inner">
            <a class="brand" href="${root}index.html" lang="en">
                <img src="${root}resources/future-frame.png" alt="" width="498" height="374">
                Future Frame
            </a>
            <span lang="en">AI Automation Agency</span>
            <a href="${root}pages/contact.html">Επικοινωνία <span aria-hidden="true">↗</span></a>
        </div>`;
})();
