//scroll suave link interno:
function scrollSuave(params) {
    const linksInternos = document.querySelectorAll('.container-nav a[href^="#"]')

    linksInternos.forEach(function name(params) {
        params.addEventListener('click', scrollToSection)
    })

    function scrollToSection(e) {
        e.preventDefault() //previne movimento padrao do link interno de levar a seção
        const href = e.currentTarget.getAttribute('href') //seleciona atributo do href que foi clicado
        const section = document.querySelector(href) //linkou href com a section

        section.scrollIntoView({ //scrollIntoView = bota esse elemento na minha view/vista
            behavior: 'smooth',
            block: 'start',
        })
    }
}
scrollSuave()

//animação ao scroll (ao scrolar  a pg, os elementos fazem animação para o lodo)
function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll')
    const metadeTela = window.innerHeight * 0.75 //tamanho da tela (eixo y) * 60%

    if (sections.length) { //comprova se tem esse elemento porque caso não tenha não faz sentido executar tudo isso
        window.addEventListener('scroll', animaScroll)

        function animaScroll() {
            sections.forEach((params) => {
                const sectionTop = params.getBoundingClientRect().top-metadeTela //- 600/60% //metodo getBounding retorna um objeto que tem as propriedades com as distancias e portanto usa-se o top
                //console.log(sectionTop) quando o elemento passa da propriedade top ela fica negativa (-3), portanto se ela for menor que 0 é porque passou, usar o console.log comentado para ver. Porém dessa forma, se cria um espaço em branco entre uma section e outra pq tem que escrolar até ficar negativo o top da próx para ela aparecer e para corrigir isso, se subtrai alguns pixels da const nesse caso, 600. Porém 600 é um valor fixo e se a tela do client for mto grande esse valor não vai servir pq não vai carregar e se for pequena dmais vai carregar antes da hora e por isso deve se usar 60%(mais ou menos metade, 50/60%) do valor da tela (isso é feito pela const metadetela).
                if (sectionTop < 0) {
                    // console.log('animar')
                    params.classList.add('ativo')
                }
            })
        }
        animaScroll() //a f aqui serve para animar o site já quando entrar nele, para que quando o cliente entre não tenha uma tela branca
    }
}
initAnimacaoScroll()