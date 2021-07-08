const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1300px)')) {

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');
        })
    })
}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Mickael Giraud')
.pauseFor(300)
.typeString('<strong>, Apprenant Développeur Full-stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #EA39FF;"> PhP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: midnightblue;"> WordPress</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #ff6910;"> JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #3498DB;"> Vue.Js</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #9B59B6;"> Symfony</span> !')
.start()

/* Animation Contact */

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) =>  {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        }else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation');
        }
    })

}

// Anim GSAP + ScrollMagic



const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');



const TLl = gsap.timeline({paused: true});

TLl
.to(navbar, {left: '0', ease: Power3.easeOut, duration: 0.6})
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TLl.play();
})

// Animation scrollMajic GSAP presentation

const presentationContainer = document.querySelector('.presentation')
const titrePres = document.querySelector('.titre-pres')
const presGauche = document.querySelector('.pres-gauche')
const tlpres = document.querySelectorAll('.item-list')


const tlPortfolio = new TimelineMax()

tlPortfolio
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y:-20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(tlpres, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    riverse: false 
})
.setTween(tlPortfolio)
.addIndicators()
.addTo(controller)

// Anim portfolio

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio1 = new TimelineMax()


tlPortfolio1
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({triggerElement: portfolioContainer, triggerHook: 0.5,
reverse: false}) 
.setTween(tlPortfolio1)
.addIndicators()
.addTo(controller)

// Vague 2

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax()

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({triggerElement: tlPortfolio1, triggerHook: 0.2,
reverse: false}) 
.setTween(tlPortfolio2)
.addIndicators()
.addTo(controller)

// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax()

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({triggerElement: tlPortfolio2, triggerHook: 0.2,
reverse: false}) 
.setTween(tlPortfolio3)
.addIndicators()
.addTo(controller)