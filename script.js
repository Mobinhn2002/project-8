document.querySelectorAll('nav li a').forEach(element => {
    element.addEventListener('click',(e)=>{
        document.querySelector('nav li a.active').classList.remove('active')
        e.target.classList.add('active')
    })
});

document.querySelectorAll('.my-projects ul li button').forEach(element => {
    element.addEventListener('click',(e)=>{
        document.querySelector('.my-projects ul li button.active').classList.remove('active')
        e.target.classList.add('active')
        document.querySelectorAll('.my-projects .projects .project').forEach(e => e.style.display = 'none');

        switch (e.target.id) {
            case 'all':
                document.querySelectorAll('.my-projects .projects .project').forEach(e => e.style.display = 'block');
                break;
            case 'company':
                document.querySelectorAll('.my-projects .projects .company').forEach(e => e.style.display = 'block');
                break;
            case 'shop':
                document.querySelectorAll('.my-projects .projects .shop').forEach(e => e.style.display = 'block');
                break;
            default:
                document.querySelectorAll('.my-projects .projects .cv').forEach(e => e.style.display = 'block');
        }
    })
});


document.querySelectorAll('.my-projects .project').forEach(element => {
    element.addEventListener('click',(e)=>{
        document.querySelector('.my-projects .lgOverlay').classList.add('active')
        document.querySelector('.my-projects .lgOverlay img').src = e.target.previousElementSibling.src;
    })
});

document.querySelector('.my-projects .lgOverlay button').addEventListener('click',()=>{
    document.querySelector('.my-projects .lgOverlay').classList.remove('active')
})

let index = 0

function next(){
    removeClass()

    if(index == 3){
        index = 0;
    }else{
        index++
    }

    addClass()
}
function previous(){
    removeClass()

    if(index == 0){
        index = 3;
    }else{
        index--
    }

    addClass()
}

function addClass(){
    document.querySelectorAll('.message .texts p')[index].classList.add('active')
    document.querySelectorAll('.message .name div')[index].classList.add('active')
    document.querySelectorAll('.message .images img')[index].classList.add('active')
}
function removeClass(){
    document.querySelectorAll('.message .texts p')[index].classList.remove('active')
    document.querySelectorAll('.message .name div')[index].classList.remove('active')
    document.querySelectorAll('.message .images img')[index].classList.remove('active')
}