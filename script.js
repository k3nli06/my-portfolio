var check = document.querySelector(".check");
check.addEventListener('click', language);

function language() {
    let id=check.checked;
    if (id == true) {
        location.href = "img/index.html";
    }else {
        location.href = "../index.html";
    }
}

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}