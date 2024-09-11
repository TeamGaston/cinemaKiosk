const toggle_movie = document.getElementById("toggle_movie");
const toggle_time = document.getElementById("toggle_time");

toggle_movie.addEventListener("click", ()=>{
    const url = new URL(window.location.href);
    console.log(url.pathname);

    if ( url.pathname !== "/choice" ) {
        window.location.href = "/choice_time";
    }
});

toggle_movie.addEventListener("click", ()=>{
    const url = new URL(window.location.href);
    console.log(url.pathname);

    if ( url.pathname !== "/choice_time" ) {
        window.location.href = "/choice";
    }
});

