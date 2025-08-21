let lyspære = document.getElementById("lyspære");
let knapp = document.getElementById("minknapp")


let lysstatus = false;

function endrelys(){
    knapp.addEventListener("click", () => {
        lyspære.style.backgroundColor = (!lysstatus) ? "yellow" : "white";
        lysstatus = !lysstatus;
        lyspære.textContent = (lysstatus) ? "på": "av";
    })

}
endrelys();




