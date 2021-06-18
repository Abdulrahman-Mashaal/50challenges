const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

// count number of clicks on next button and make it dynamic with number of circles
next.addEventListener('click', ()=>{
    currentActive ++
    if(currentActive > circles.length){
        currentActive = circles.length;  
    }

    update()


})

// count number of clicks on previous button and make it dynamic with number of circles
prev.addEventListener('click', ()=>{
    currentActive --
    if(currentActive < 1){
        currentActive = 1;  
    }

    update()

})


// add or remove active class to circle class
function update(){

    circles.forEach((circle, idx)=>{

        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    // set active percentage 

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    // set swapping between style btn to disable of active

    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}




