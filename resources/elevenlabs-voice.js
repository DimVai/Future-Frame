(() => {
    const button = document.getElementById("open-voice");
    const status = document.getElementById("voice-status");

    button.addEventListener("click", () => {
        button.disabled = true;
        status.textContent = "Φόρτωση φωνητικού βοηθού…";

        const widget = document.createElement("elevenlabs-convai");
        widget.setAttribute("agent-id", "UDdSDQXt8dDTdm1Fuxob");
        widget.setAttribute("variant", "expanded");
        widget.setAttribute("action-text", "Φωνητικός βοηθός");
        widget.setAttribute("start-call-text", "Έναρξη κλήσης");
        widget.setAttribute("end-call-text", "Τερματισμός κλήσης");
        widget.setAttribute("avatar-orb-color-1", "#ad87ff");
        widget.setAttribute("avatar-orb-color-2", "#64429a");

        const script = document.createElement("script");
        script.src = "https://elevenlabs.io/convai-widget/index.js";
        script.async = true;
        script.onload = () => {
            status.textContent = "";
            button.hidden = true;
        };
        script.onerror = () => {
            widget.remove();
            script.remove();
            status.textContent = "Ο βοηθός δεν φορτώθηκε. Δοκιμάστε ξανά.";
            button.disabled = false;
        };
        document.getElementById("voice-widget").append(widget);
        document.head.append(script);
    });
})();
