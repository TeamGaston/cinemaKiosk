const clock = document.getElementById("bottomBarClock");
const homeBtn = document.getElementById("homeBtn");
const backBtn = document.getElementById("backBtn");

homeBtn.addEventListener( "click", ()=>{
    window.location.href = "/home";
});

const setClock = () => {
    const time = new Date();
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");

    clock.innerText = `${hour}:${minute}`;
}

setClock();
setInterval( ()=>{
    setClock();
}, 1000);

class BottomBar {
    constructor( id ) {
        this.id = id;

    }

    
}