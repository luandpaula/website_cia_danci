$(document).ready(function(){
    // Sticky navbar on scroll script
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu items click
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["essência", "harmonia", "inspiração","liberdade"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["seu corpo", "sua mente", "sua alma"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel for gallery
    $(".gallery-slider").owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        nav: true,
        navText: ["&#10094;", "&#10095;"],
        dots: false,  // Desativa os dots
        smartSpeed: 1600,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Owl carousel for teams section (mantém os dots)
    $('.carousel').owlCarousel({
        items: 3,  // Exibir 3 itens por vez
        loop: false,  // Desativa o loop para que o carousel pare no final
        margin: 20,  // Espaço entre os cards
        autoplay: false,  // Desativa o autoplay
        autoplayHoverPause: true,  // Pausa o slide ao passar o mouse
        nav: false,  // Desabilita as setas de navegação
        dots: true,  // Mostra os dots para navegação
        smartSpeed: 400,  // Velocidade de transição
        responsive: {
            0: { items: 1 },  // Em telas pequenas, exibe 1 item
            600: { items: 2 },  // Em telas médias, exibe 2 itens
            1000: { items: 3 }  // Em telas grandes, exibe 3 itens
        }
    });

    // Função para exibir mídia no modal
    $('.gallery-item').click(function(){
        const type = $(this).data('type');
        const src = $(this).data('src');

        if (type === 'image') {
            $('#modalImage').attr('src', src).show();
            $('#modalVideo').hide();
        } else if (type === 'video') {
            $('#modalVideo').attr('src', src).show();
            $('#modalImage').hide();
        }
        $('#mediaModal').fadeIn();
    });

    // Fecha o modal ao clicar no "X"
    $('.close').click(function(){
        $('#mediaModal').fadeOut();
        $('#modalImage').attr('src', '').hide();
        $('#modalVideo').attr('src', '').hide();
    });

    // Fecha o modal ao clicar fora da área de conteúdo
    $(document).click(function(event) {
        if (!$(event.target).closest(".modal-content, .gallery-item").length) {
            $('#mediaModal').fadeOut();
            $('#modalImage').attr('src', '').hide();
            $('#modalVideo').attr('src', '').hide();
        }
    });

    // Previne o fechamento do modal ao clicar dentro da área de mídia
    $('.modal-content').click(function(event){
        event.stopPropagation();
    });

    
    
});


document.addEventListener('DOMContentLoaded', () => {
    const openFormBtn = document.getElementById('open-form-btn'); // Botão para abrir o modal
    const modal = document.getElementById('form-modal'); // Modal do formulário
    const closeBtn = document.querySelector('.close-btn'); // Botão de fechar no modal

    // Verifica se os elementos existem antes de adicionar eventos
    if (openFormBtn && modal && closeBtn) {
        // Abre o modal ao clicar no botão
        openFormBtn.addEventListener('click', () => {
            modal.style.display = 'flex'; // Exibe o modal como flex
        });

        // Fecha o modal ao clicar no botão de fechar
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // Oculta o modal
        });

        // Fecha o modal ao clicar fora do conteúdo do modal
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none'; // Oculta o modal
            }
        });
    } else {
        console.error('Elementos essenciais do modal não foram encontrados no DOM.');
    }
});

