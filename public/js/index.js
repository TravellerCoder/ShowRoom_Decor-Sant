'use strict'

const carrousel = document.querySelector('.carrousel')
const punto = document.querySelectorAll('.punto')


// Damos vida los puntos. Al darle click al punto

 // Saber la posicion del click
 // aplicar un transfor translateX al grande
 // quitar la clase activo a todos los puntos
 //añadir clase activo al punto que tiene el click 

    punto.forEach( (cadaPunto, i) => {
        punto[i].addEventListener('click', ()=>{
            let posicion = i
            let operacion = posicion * -33.3

            carrousel.style.transform = `translateX(${operacion}%)`

            punto.forEach((cadaPunto, i) =>{
                punto[i].classList.remove('activo')
            })
            punto[i].classList.add('activo')
        } ) 
    });
