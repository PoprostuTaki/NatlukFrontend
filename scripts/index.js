document.addEventListener("DOMContentLoaded", function(event) {

  // closing mobile menu after clicking link 
const checkbox = document.querySelector(".toggler")
const links= document.querySelectorAll(".mobile-link")

const func = (link) => {
link.addEventListener("click", function(e) { 
  if(checkbox.checked) {
    checkbox.checked = false
    }
  }) 
}

 links.forEach(func)

 //save activeClasses to sessionsStorage
 const navLinks = document.querySelectorAll(".nav__link")
 const categoryLinks = [...document.querySelectorAll(".resources__category")]
 storage = window.sessionStorage
 
 if (storage.getItem("active-link")) {
    [...navLinks].filter(el => el.innerText.indexOf(storage.getItem("active-link")) !== -1)[0].classList.add("active-link")
  } else {
    storage.setItem("active-link", "About"); 
    [...navLinks].filter(el => el.innerText.indexOf(storage.getItem("active-link")) !== -1)[0].classList.add("active-link");
    
  }
  
  navLinks.forEach(el => el.addEventListener("click", function(e) {
    navLinks.forEach(el => el.classList.remove("active-link"))
    window.sessionStorage.setItem("active-link", `${e.target.innerText}`)
    e.target.classList.add("active-link")
  }))

  if (categoryLinks.length !== 0) {
    
    if (storage.getItem("category-active-link")) {
      categoryLinks.filter(el => el.innerText.indexOf(storage.getItem("category-active-link")) !== -1)[0].classList.add("category-active-link");
    } else {
      storage.setItem("category-active-link", "All");
      categoryLinks.filter(el => el.innerText.indexOf(storage.getItem("category-active-link")) !== -1)[0].classList.add("category-active-link");
    }

    categoryLinks.forEach(el => el.addEventListener("click", function(e) {
      categoryLinks.forEach(el => {
        el.classList.remove("category-active-link");
    })
      window.sessionStorage.setItem("category-active-link", `${e.target.innerText}`)
      e.target.classList.add("category-active-link")
    }))
  }
  
  // switching active class when scrolling
//   function selectElementByClass(className) {
//       return document.querySelector(`.${className}`)
//   }

// sect = []


// const sections = [
//   selectElementByClass('about'),
//   selectElementByClass('blog'),
//   selectElementByClass('articleDetails'),
//   selectElementByClass('resources'),
//   // selectElementByClass('footer'),
// ];

// sections.forEach(el => {if (el) {
//   sect.push(el)
// }})

// const navItems = {
//   about: selectElementByClass('nav-about'),
//   blog: selectElementByClass('nav-blog'),
//   articleDetails: selectElementByClass('nav-articleDetails'),
//   resources: selectElementByClass('nav-resources'),
//   // footer: selectElementByClass('nav-contact'),
// };

// const observerOptions = {
//   root: document.querySelector("main"),
//   rootMargin: '0px',
//   threshold: 0.7,
// };

// function observerCallback(entries, observer) {
//   entries.forEach((entry) => {
//     const navItem = navItems[entry.target.id];
   
//     if (entry.isIntersecting) {
//       navItem.classList.add('active-link');
//       storage.setItem("active-link", navItem.innerText);
      
//       Object.values(navItems).forEach((item) => {
//         if (item != navItem) {
//           item.classList.remove('active-link');
//         }
//       });
//     } else {
//       navItem.classList.remove('active-link');
//     }
//   });
// }

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// sect.forEach((sec) => {
//   observer.observe(sec)})

//
// const contactNavLink = document.querySelector(".nav-contact");
// const footer = document.querySelector(".footer");

// const observerOpt = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.7,
// }

// function observerCal(entries, observe) {  
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       contactNavLink.classList.add('active-link')
//     } else {
//       contactNavLink.classList.remove('active-link')
//     }
//   })
// }

// const observere = new IntersectionObserver(observerCal, observerOpt);
// observere.observe(footer)

 // switcher colors for navbar after scroll
  const nav__desktop = document.querySelector(".nav");
  const nav__mobile= document.querySelector(".nav__mobile-menu--wrap");
  const header = document.querySelector(".header")
  
  headerOptions = {
  rootMargin: "-80px 0px 0px 0px"
  };
  
  const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav__desktop.classList.add('switch-color');
      nav__mobile.classList.add('switch-color');
    } else {
      nav__desktop.classList.remove('switch-color'); 
      nav__mobile.classList.remove('switch-color'); 
    }
  } )
  }, headerOptions);
  
  headerObserver.observe(header);
})
