let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}



let section = document.querySelector('section');
let sections = document.querySelector('head nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEaach.apply(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*='+ id + ']');
            });
        }
    });


    let  header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
