// navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; 
    const Top = document.querySelector('#top')

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        Top.classList.remove('hidden');
        Top.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        Top.classList.remove('flex');
        Top.classList.add('hidden');
    }
    }


// humburger

const humburger = document.querySelector('#humburger');
const NavMenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', function(){
    humburger.classList.toggle('humburger-active');
    NavMenu.classList.toggle('hidden');
    
})

// ddf

window.addEventListener('click',function(e){
    if(e.target != humburger && e.target != NavMenu){
        humburger.classList.remove('humburger-active');
        NavMenu.classList.add('hidden');
    }
});


const checkbox = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');

    checkbox.addEventListener('click', function(){
        if( checkbox.checked){
          html.classList.add('dark');
          localStorage.theme = 'dark'
        }else{
            html.classList.remove('dark');
            localStorage.theme = 'light'
        }
    });


    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }









    //   function animateValue(element,start,end,duration){
    //     let startTimestamp = null;
    //     const step = (timestamp)=>{
    //         if(!startTimestamp) startTimestamp= timestamp;
    //         const progress = Math.main((timestamp-startTimestamp)/duration,1);
    //         element.innerHTML = Math.floor(progress * (end-start)+ start).toLocaleString();
    //         if(progress<1){
    //             window.requestAnimationFrame(step);
    //         }
    //     };
    //     window.requestAnimationFrame(step);
    //   }

    //   const counterElements = document.querySelectorAll('.elementor-counter-number');
    //   counterElements.forEach(counterElement =>{
    //     const startValue = parseInt(counterElement.getAttribute('data-from-value'));
    //     const endValue = parseInt(counterElement.getAttribute('data-to-value'));
    //     const duration = parseInt(counterElement.getAttribute('data-duratuion'));

    //     animateValue(counterElement, startValue, endValue, duration);
    //   });
