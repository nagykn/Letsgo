if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}


let btn = document.querySelector("button");
btn.addEventListener("click", (e)=>{
    document.querySelector("#audio").play();
});
