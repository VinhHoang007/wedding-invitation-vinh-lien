

$(document).ready(function () {

    function windownStart() {
        setTimeout(() => {
            window.scrollTo(0, 0);
            var url_string = window.location.href;
            var url = new URL(url_string);
            var name = url.searchParams.get("name");
            document.getElementById("name").innerText = name;
        }, 100);
    }
    windownStart();
});