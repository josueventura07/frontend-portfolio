/*---------------Nav List-------------*/

const SelectedNav = ((d)=> {

const NavList = d.querySelectorAll('.nav_list')

    NavList.forEach(element => {
        element.addEventListener('click', e => {
            
            if(e.target) {
                e.target.classList.add('menu_selected')
                
            } else {
                e.target.classList.remove('menu_selected')
            }
        })
    })
})(document)

/*---------------Progress Bar Animation-------------*/
const progressBar = document.querySelectorAll('.progress_bar')

document.addEventListener('scroll', e => {
    if(scrollY >= 850) {
        progressBar.forEach(element => {
            element.classList.add('moveBarAnimation')
                
        })
    } else {
        progressBar.forEach(element => {
            element.classList.remove('moveBarAnimation')
        })
    }    
})

/*--------------------Menu-------------------*/
const Menu = ((d)=>{
    const $btnMenu = d.querySelector('.menu-btn'),
    $menu = d.querySelector('.menu');

    $btnMenu.addEventListener('click', e => {
        $btnMenu.firstElementChild.classList.toggle('none')
        $btnMenu.lastElementChild.classList.toggle('none')
        $menu.classList.toggle('is-active')
    })

    d.addEventListener('click', e => {
        if(!e.target.matches('.menu a')) return false

        $btnMenu.firstElementChild.classList.remove('none')
        $btnMenu.lastElementChild.classList.add('none')
        $menu.classList.remove('is-active')
    })

})(document)

/*--------------------Contact Form-------------------*/

const contactForm = ((d)=> {
    const $form = d.querySelector('.contact_form'),
       $loader = d.querySelector('.loader'),
       $response = d.querySelector('.contact_form-response');
   
       $form.addEventListener('submit', e => {
           e.preventDefault()
           $loader.classList.remove('none');
           fetch('https://formsubmit.co/ajax/josueventura.job@gmail.com', {
               method: "POST",
               body: new FormData(e.target)
           })
               .then((res) => (res.ok ? res.json() : Promise.reject(res)))
               .then(json => {
                   console.log(json);
                   location.hash = '#gracias';
                   $form.reset();
               })
               .catch(err => {
                   console.log(err);
                   let message = err.statusText || `Ocurrio un error al enviar, intenta nuevamente`
                   $response.querySelector('h3').innerHTML = `Error ${err.status} : ${message}`
               })
               .finally(() => {
                   $loader.classList.add('none');
                   setTimeout(()=> {
                       location.hash = '#close';
                   }, 3000)
               })
       })
   })(document)


