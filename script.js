    const nav = document.querySelector("#nav-links");
    const icon = document.querySelector("#burger-icon");


    icon.addEventListener("click", () =>{
        nav.classList.toggle("is-active");
    });         