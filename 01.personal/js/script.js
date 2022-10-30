

//SLIDER/ CARRUSEL DE IMAGENES DE METAS

(function(){
    
    const sliders = [...document.querySelectorAll('.metas_body')]
    const botonNext = document.querySelector('#next')
    const botonBefore = document.querySelector('#before')
    let value;

    botonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    botonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    const changePosition = (add) =>{
        const metaActual = document.querySelector('.metas_body--show').dataset.id;
        value = Number(metaActual);
        value+= add;


        sliders[Number(metaActual)-1].classList.remove('metas_body--show')
        if (value === sliders.length+1 || value===0) {
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('metas_body--show')
    }

})();