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

// mostrar cover ao dar hover nos projetos
function ativarHoverNosProjetos(){
    $(".projeto").mouseover(function(){
        $(this).children().first().css({"opacity": "1"}); 
        $(this).children().first().children().eq(0).css({"opacity": "1","animation": "paraBaixo 0.7s ease"}) 
        $(this).children().first().children().eq(1).css({"opacity": "1","animation": "paraCima 0.7s ease"})  
    })
    $(".projeto").mouseout(function(){
        $(this).children().first().css({"opacity": "0"});
        $(this).children().first().children().eq(0).css({"animation": "none"})
        $(this).children().first().children().eq(1).css({"animation": "none"})  
    })
}

//informações dos projetos destaque no portfolio
const infoDosProjetos = [
    {
        titulo: "Expense Tracker",
        subtitulo: "Controle de finanças.",
        descricao: "Aplicativo de controle de finanças. Registre seus gastos e ganhos, crie metas para alcançar seus objetivos, adicione a aba 'inscrições' despezas recorrentes para não se esquecer delas, e personalize o app com cores diferentes ou com o modo noturno.",
        liveServerLink: "https://alcantara-diego.github.io/aplicativodegastos/",
        codigoLink: "https://github.com/Alcantara-Diego/aplicativodegastos"
    },
    {
        titulo: "Conversor de moedas",
        subtitulo: "Real dólar e euro.",
        descricao: "Saiba o valor do dólar e do euro hoje e converta a quantidade desejada para reais. informações extraídas por API.",
        liveServerLink: "https://alcantara-diego.github.io/conversordemoedas/",
        codigoLink: "https://github.com/Alcantara-Diego/conversordemoedas"
    },
    {
        titulo: "Clima Tempo",
        subtitulo: "Saiba a temperatura da sua cidade.",
        descricao: "Informações extraídas da OpenWeather API, pesquise a temperatura e condições do clima em milhares de cidades disponíveis.",
        liveServerLink: "https://alcantara-diego.github.io/climatempo/",
        codigoLink: "https://github.com/Alcantara-Diego/climatempo"
    },
    {
        titulo: "React Todo List",
        subtitulo: "Organize sua agenda!",
        descricao: "Não se esqueça das sua obrigações do dia. Crie tarefas, de destaque as mais importantes, aproveite o tema claro e noturno e mude o idioma se preferir. Aplicativo feito com React.js",
        liveServerLink: "https://alcantara-diego.github.io/todolist/",
        codigoLink: "https://github.com/Alcantara-Diego/todolist"
    },
    {
        titulo: "React loginPage",
        subtitulo: "Página de login",
        descricao: "Front-End de uma página de login e cadastro de usuário, usado react-router-dom para navegar entre as sessões(Sem Back-End envolvido)",
        liveServerLink: "https://alcantara-diego.github.io/myloginpage/",
        codigoLink: "https://github.com/Alcantara-Diego/myloginpage"
    },

]
//Altera as informações da aba saberMais dependendo do projeto selecionado pelo usuário
function atualizarInformacoes(atributo){
    let imagemDoProjetoSelecionado = document.getElementById("imagemDoProjetoSelecionado");
    let tituloDoProjetoSelecionado = document.getElementById("tituloDoProjetoSelecionado");
    let subtituloDoProjetoSelecionado = document.getElementById("subtituloDoProjetoSelecionado");
    let descricaoDoProjetoSelecionado = document.getElementById("descricaoDoProjetoSelecionado");
    let liveServerDoProjetoSelecionado = document.getElementById("liveServerDoProjetoSelecionado");
    let codigoDoProjetoSelecionado = document.getElementById("codigoDoProjetoSelecionado");

    switch(atributo){
        case "todo": //React Todolist
            imagemDoProjetoSelecionado.src="assets/todoG.JPG";
            tituloDoProjetoSelecionado.innerHTML=infoDosProjetos[3].titulo;
            subtituloDoProjetoSelecionado.innerHTML=infoDosProjetos[3].subtitulo;
            descricaoDoProjetoSelecionado.innerHTML=infoDosProjetos[3].descricao;
            liveServerDoProjetoSelecionado.href=infoDosProjetos[3].liveServerLink;
            codigoDoProjetoSelecionado.href=infoDosProjetos[3].codigoLink;
            break;
        case "expense": //Expense Tracker
            imagemDoProjetoSelecionado.src="assets/tracker.JPG";
            tituloDoProjetoSelecionado.innerHTML=infoDosProjetos[0].titulo;
            subtituloDoProjetoSelecionado.innerHTML=infoDosProjetos[0].subtitulo;
            descricaoDoProjetoSelecionado.innerHTML=infoDosProjetos[0].descricao;
            liveServerDoProjetoSelecionado.href=infoDosProjetos[0].liveServerLink;
            codigoDoProjetoSelecionado.href=infoDosProjetos[0].codigoLink;
            break;
        case "conversor": //Conversor de moedas
            imagemDoProjetoSelecionado.src="assets/conversor.JPG";
            tituloDoProjetoSelecionado.innerHTML=infoDosProjetos[1].titulo;
            subtituloDoProjetoSelecionado.innerHTML=infoDosProjetos[1].subtitulo;
            descricaoDoProjetoSelecionado.innerHTML=infoDosProjetos[1].descricao;
            liveServerDoProjetoSelecionado.href=infoDosProjetos[1].liveServerLink;
            codigoDoProjetoSelecionado.href=infoDosProjetos[1].codigoLink;
            break;
        case "clima": //Clima tempo
            imagemDoProjetoSelecionado.src="assets/clima.JPG";
            tituloDoProjetoSelecionado.innerHTML=infoDosProjetos[2].titulo;
            subtituloDoProjetoSelecionado.innerHTML=infoDosProjetos[2].subtitulo;
            descricaoDoProjetoSelecionado.innerHTML=infoDosProjetos[2].descricao;
            liveServerDoProjetoSelecionado.href=infoDosProjetos[2].liveServerLink;
            codigoDoProjetoSelecionado.href=infoDosProjetos[2].codigoLink;
            break;
        case "myloginpage":
            imagemDoProjetoSelecionado.src="assets/myloginpageG.JPG";
            tituloDoProjetoSelecionado.innerHTML=infoDosProjetos[4].titulo;
            subtituloDoProjetoSelecionado.innerHTML=infoDosProjetos[4].subtitulo;
            descricaoDoProjetoSelecionado.innerHTML=infoDosProjetos[4].descricao;
            liveServerDoProjetoSelecionado.href=infoDosProjetos[4].liveServerLink;
            codigoDoProjetoSelecionado.href=infoDosProjetos[4].codigoLink;
            break

    }
}
function mostrarAbaSaberMais(){
    const atributo = this.getAttribute("data-projeto");
    //Adiciona as informações do projeto selecionado na aba
    atualizarInformacoes(atributo);
    //a classe revela a div na tela aumentando a escala
    $("#saberMaisProjetos").addClass("fullScale");
    //o overlay é uma barreira que impede a interação com qualquer outra parte do site a não ser a aba que mostra as informações do projeto selecionado
    document.getElementById("overlay").style.display="block";
}
document.getElementById("projetoExpenseSaberMais").addEventListener("click", mostrarAbaSaberMais);
document.getElementById("projetoConversorSaberMais").addEventListener("click", mostrarAbaSaberMais);
document.getElementById("projetoClimaSaberMais").addEventListener("click", mostrarAbaSaberMais);
document.getElementById("projetoTodolistSaberMais").addEventListener("click", mostrarAbaSaberMais);
document.getElementById("projetoMyloginpageSaberMais").addEventListener("click", mostrarAbaSaberMais);

// fechar a aba com as informações do projeto selecionado e remove o overlay
document.getElementById("fecharAbaSaberMais").addEventListener("click", () =>{
    $("#saberMaisProjetos").removeClass("fullScale");
    document.getElementById("overlay").style.display="none";
})



// animar sessões
function mostrarSectionProjetos(){
    $(".titulo").eq(1).css({"animation": "animarTitulo 2s"}).css("opacity", "1");
    $(".barra").eq(1).css({"animation": "animarBarra 2s"}).css("opacity", "1");
    setTimeout(()=>{
        $(".projetosDica").eq(0).css({"animation": "revelar 2s"}).css("opacity", "1");
        $("#projetoTodolist").css({"animation": `revelar 2s ease`}).css("opacity", "1");

            setTimeout(()=>{
                $("#projetoExpense").css({"animation": `revelar 2s ease`}).css("opacity", "1");
            }, 200);

            setTimeout(()=>{
                $("#projetoConversor").css({"animation": `revelar 2s ease`}).css("opacity", "1");
            }, 400);

            setTimeout(()=>{
                $("#projetoClima").css({"animation": `revelar 2s ease`}).css("opacity", "1");
                ativarHoverNosProjetos();
            }, 600);

            setTimeout(()=>{
                $("#projetoMyloginpage").css({"animation": `revelar 2s ease`}).css("opacity", "1");
            }, 800);
    }, 1000)
}
function mostrarSectionContato(){
    $("#contatoTitulo").css({"animation": "animarTitulo 2s"}).css("opacity", "1");
    $(".barra").eq(2).css({"animation": "animarBarra 2s"}).css("opacity", "1");
    setTimeout(()=>{
        $(".barra").eq(2).next().css({"animation": "revelar 2s"}).css("opacity", "1");
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

// animar nav-bar conforme scroll na tela
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