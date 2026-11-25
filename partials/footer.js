(() => {
    const root = document.currentScript.getAttribute("src").replace("partials/footer.js", "") || "./";
    document.getElementById("page-footer").innerHTML = `
        <div class="wrap footer-inner">
            <a class="brand" href="${root}" lang="en">
                <img src="${root}resources/future-frame.webp" alt="" width="256" height="178">
                Future Frame
            </a>
            <span>Το μέλλον της τεχνητής νοημοσύνης</span>
            <a href="${root}pages/contact.html">Επικοινωνία <span aria-hidden="true">↗</span></a>
        </div>`;
})();
