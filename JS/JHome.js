function goBack () {
    window.location.href = "index.html";
}

document.querySelectorAll("#homeTable tr").forEach(cell => {
    cell.addEventListener("click", function() {
        let page = this.getAttribute("data-page");
        if (page) {
            window.location.href = page;
        }
    });
});