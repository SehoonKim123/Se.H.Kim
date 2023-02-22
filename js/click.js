var menu = document.querySelectorAll('.menu li');
var contents  = document.querySelectorAll('.contents');


menu.forEach((e, i) =>{
    e.addEventListener('click', (e)=>{
        contents.forEach(box =>{
            box.style.display ='none'
        })
        contents[i].style.display ='flex'

    })
})