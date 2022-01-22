document.addEventListener('DOMContentLoaded', function() {

    aparecer();

})



function aparecer() {


    let punto = document.querySelector('.separador')

    let objeto = document.querySelector('.to-top')


    window.addEventListener('scroll', function() {

        if (punto.getBoundingClientRect().top < 600) {

            objeto.classList.add('visto')
            objeto.classList.remove('oculto')
        }

        if (punto.getBoundingClientRect().top > 600) {

            objeto.classList.add('oculto')
            objeto.classList.remove('visto')

        }


    })
}


function mostrar() {


    let enlaces = document.querySelectorAll('.navegacion a');




    enlaces.forEach(element => {

        if (element.classList.contains('menu-oculto') == false) {

            element.classList.add('menu-oculto');





        } else if (element.classList.contains('menu-oculto')) {

            element.classList.remove('menu-oculto')
        }





    });



}