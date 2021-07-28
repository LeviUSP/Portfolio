ScrollOut({
  targets: '.hero, #projects-image, header, .headline, .service, .project-card'
});


const projectCards = document.querySelectorAll('.project-card')

projectCards.forEach(element => {
  element.addEventListener('click', event => {
    if(element.classList.contains('expanded')){
      element.classList.remove('expanded')
    } 
    else element.classList.add('expanded')
  })
});



