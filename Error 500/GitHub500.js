document.getElementById("reloadBtn").addEventListener("click", function() {
    document.body.style.transition = "opacity 0.5s ease-out";
    document.body.style.opacity = "0";
    setTimeout(() => {
        location.reload();
    }, 500);
});

