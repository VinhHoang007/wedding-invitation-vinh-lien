

$(document).ready(function () {

    function windownStart() {
        setTimeout(() => {
            window.scrollTo(0, 0);
            // console.log(document.getElementById("my-audio").muted);
            // document.getElementById("audio").muted = true;
        }, 100);
    }
    windownStart();
    document.querySelector("video").muted = false;
});