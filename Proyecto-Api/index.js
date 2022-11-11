
const toggleBtnIcons = document.querySelector('.toggle-icon');

const toggleBtnBars = document.querySelector('.times');
const toggleBtntimes = document.querySelector('.bars');

const linksContainer = document.querySelector('.links-container');

const navContainer = document.querySelector('.nav-link-wrapper');


const showIcons = document.querySelector('.social-icons');


function toggleIcons(){
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    if(linkContainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    }
    else if(linkContainerHeight === navContainerHeight){  
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    }
}
toggleBtnIcons.addEventListener('click', toggleIcons);

// links items
const links = document.querySelectorAll('.link');

links.forEach(function (linksItem){
    linksItem.addEventListener('click', function (item){
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    });
});

// Animacion


const mySelf = document.querySelector('.my-self');
const switchBtn = document.querySelector('.switch-btn');
const playBall = document.querySelector('.play');
const stopBall = document.querySelector('.pause');


playBall.addEventListener('click', () => myfunction('play'));
stopBall.addEventListener('click', () => myfunction('stop'));

const myfunction = (state) => {

    if(state === 'play'){
        mySelf.classList.add('animate');
        playBall.style.display = 'none';
        stopBall.style.display = 'block';
    }
    else if(state === 'stop'){
        mySelf.classList.remove('animate');
        playBall.style.display = 'block';
        stopBall.style.display = 'none';
    }
}


// back to top icon functionality
const scrollLink = document.querySelector('.scroll-link');
window.addEventListener('scroll', function (){
    const topLink = window.pageYOffset;
    if(topLink > 500){
        scrollLink.classList.add('show-link');
    }else{
        scrollLink.classList.remove('show-link');
    }
});


// Escritura automatica
let typed = new Typed('.auto-typed',{
    strings: ['TecaDesingers.'],
    typeSpeed: 150,
    backSpeed: 220,
    loop: true,
 });

