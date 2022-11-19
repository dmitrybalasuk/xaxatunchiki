AOS.init({
    duration: 900,
    once:false,
    
});

let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");
    
    if (theme.getAttribute("href") == "main.css") {
        theme.href = "darkcss.css";
    } else {
        theme.href = "main.css";
    }
}
