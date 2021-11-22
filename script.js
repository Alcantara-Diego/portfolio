const navBarLinks = document.getElementsByClassName("navbar-links")[0];

onload = function (){
    //Animar itens na sessão home
    $("#card").css({"animation": "revelar 1.5s ease"});

    setInterval(()=>{
        $("#ilustracao").css({"animation": "revelar 1.5s ease"}).css("opacity", "1");
    }, 1000);
}

// Mostrar navbar ao clicar no hamburguer na versão mobile
document.getElementsByClassName("hamburguer")[0].addEventListener("click", ()=>{
    navBarLinks.classList.toggle("active");
})

// funções para section projetos
function ativarHoverNosProjetos(){
    $(".projeto").mouseover(function(){
        $(this).children().eq(1).css({"opacity": "1"}); 
        $(this).children().eq(1).children().eq(0).css({"opacity": "1","animation": "paraBaixo 0.7s ease"}) 
        $(this).children().eq(1).children().eq(1).css({"opacity": "1","animation": "paraCima 0.7s ease"})  
    })
    $(".projeto").mouseout(function(){
        $(this).children().eq(1).css({"opacity": "0"});
        $(this).children().eq(1).children().eq(0).css({"animation": "none"})
        $(this).children().eq(1).children().eq(1).css({"animation": "none"})  
    })
}
function mostrarSectionProjetos(){
    $(".titulo").eq(0).css({"animation": "animarTitulo 2s"}).css("opacity", "1");
    $(".barra").eq(0).css({"animation": "animarBarra 2s"}).css("opacity", "1");
    setTimeout(()=>{
        $("#projeto1").css({"animation": `revelar 2s ease`}).css("opacity", "1");

            setTimeout(()=>{
                $("#projeto2").css({"animation": `revelar 2s ease`}).css("opacity", "1");
            }, 200);

            setTimeout(()=>{
                $("#projeto3").css({"animation": `revelar 2s ease`}).css("opacity", "1");
            }, 400);

            setTimeout(()=>{
                $("#projeto4").css({"animation": `revelar 2s ease`}).css("opacity", "1");
                ativarHoverNosProjetos();
            }, 600)
    }, 1000)
}
function mostrarSectionContato(){
    $("#contatoTitulo").css({"animation": "animarTitulo 2s"}).css("opacity", "1");
    $(".barra").eq(1).css({"animation": "animarBarra 2s"}).css("opacity", "1");
    setTimeout(()=>{
        $(".barra").eq(1).next().css({"animation": "revelar 2s"}).css("opacity", "1");
        $("form").css({"animation": "revelar 2s"}).css("opacity", "1");
    },1000)
}

// Observadores para revelar ou alterar itens na tela
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-200px 0px 0px 0px"
};
let itensObservados = document.querySelectorAll(".observado");
let projetosObservado=false;
let contatoObservado=false;
const observandoSections = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{        
        //Animar a página de acordo com a sessão apresentada na tela
        if(!entry.isIntersecting) {
            return;
        }
        console.log(entry.target.getAttribute("data-section"));
        const sectionVisivel = entry.target.getAttribute("data-section");

        switch(sectionVisivel){
            case "Home":
                $("#home")[0].checked=true;
                break;

            case "Projetos":
                if(!projetosObservado){
                    mostrarSectionProjetos();
                }

                $("#projetos")[0].checked=true;
                projetosObservado=true;
                break;

            case "Contato":
                if(!contatoObservado){
                    mostrarSectionContato();
                }

                $("#contato")[0].checked=true;
                contatoObservado=true;
                break;
            default:
                console.log("erro no observador");
            }
    })
}, options);

itensObservados.forEach(item =>{
    observandoSections.observe(item);
})


const landing = document.getElementById("meuNome");
const observandoNav = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        console.log(entry);
        const nav = document.querySelector("nav");
        const hamburguer = document.getElementsByClassName("hamburguer")[0]
        if(entry.isIntersecting){
            nav.classList.remove("nav-scrolled");
            hamburguer.classList.remove("hamburguerScrolled");
        }else{
            nav.classList.add("nav-scrolled");
            hamburguer.classList.add("hamburguerScrolled");
    }
    })
}, options)
observandoNav.observe(landing);

//auto-scroll para home
document.querySelector("label[for='home']").addEventListener("click", ()=>{
    navBarLinks.classList.remove("active");
    $("html,body").animate({
        scrollTop: $("header").offset().top}, 1000
    );
});

//auto-scroll para projetos
function scrollProjetos(){
    navBarLinks.classList.remove("active");
    $('html,body').animate({
        scrollTop: $("main").offset().top }, 1000
      );
    $("#projetos")[0].checked=true;
};
document.querySelector('#verProjetos').addEventListener("click", scrollProjetos);
document.querySelector("label[for='projetos']").addEventListener("click", scrollProjetos);

//auto-scroll para contato
document.querySelector("label[for='contato']").addEventListener("click", ()=>{
    navBarLinks.classList.remove("active");
    $("html,body").animate({
        scrollTop: $("#divContato").offset().top}, 1000
    );
    $("#contato")[0].checked=true;
});