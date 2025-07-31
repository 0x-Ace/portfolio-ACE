// Load color from localStorage
let mainColor = localStorage.getItem("color-option");
let landingImg = localStorage.getItem("landing-img");
let aboutImg = localStorage.getItem("about-img");

if (mainColor !== null) {
  document.documentElement.style.setProperty('--main-color', mainColor);
  document.querySelector('.landing-page').style.backgroundImage = `url("imgs/${landingImg}")`;
  document.querySelector('.about-img').src = `imgs/${aboutImg}`;
  
  document.querySelectorAll('.colors-list li').forEach(el => {
    el.classList.remove("active");
    if (el.dataset.color === mainColor) {
      el.classList.add("active");
    }
  });
}

// Toggle settings box
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

// Handle color change
document.querySelectorAll(".colors-list li").forEach(li => {
  li.addEventListener("click", (e) => {
    const color = e.target.dataset.color;
    const landing = e.target.dataset.landing;
    const about = e.target.dataset.about;

    // Change color
    document.documentElement.style.setProperty('--main-color', color);
    localStorage.setItem("color-option", color);

    // Change background and about image
    document.querySelector('.landing-page').style.backgroundImage = `url("imgs/${landing}")`;
    document.querySelector('.about-img').src = `imgs/${about}`;

    // Save to localStorage
    localStorage.setItem("landing-img", landing);
    localStorage.setItem("about-img", about);

    // Update active class
    e.target.parentElement.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
  });
});





//select skills selector
let ourskills = document.querySelector(".skills");

window.onscroll = function () {

  // skills offset top 
  let skillsoffsettop = ourskills.offsetTop;

  // outer Height
  let skillsouterHeight = ourskills.offsetHeight;

  // window height
  let windowHeight = this.innerHeight;

  // window scroll top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsoffsettop + skillsouterHeight - windowHeight)) {
    

    let allskills = document.querySelectorAll(".skill-box .skill-progress span");

    allskills.forEach(skill => {

      skill.style.width = skill.dataset.progress;
    })
  }
};




let ourgallery = document.querySelectorAll(".gallery img");

ourgallery.forEach(img => {

  img.addEventListener('click',(e) =>{

    let overlay = document.createElement("div");

    overlay.className = 'popup-overlay';

    document.body.appendChild(overlay);

    let popupbox = document.createElement("div");

    popupbox.className = 'popup-box';

////creat text


if (img.alt !== null && img.alt.startsWith("http")) {
  let imgLink = document.createElement("a");

  imgLink.href = img.alt; // اللينك من alt
  imgLink.textContent = "visit link"; // النص المعروض
  imgLink.target = "_blank"; // يفتح في نافذة جديدة
  imgLink.style.display = "block"; 
  imgLink.style.marginBottom = "10px";

  popupbox.appendChild(imgLink);
}






    // creat the img

    let popupimg = document.createElement("img");
    //set popup img


    popupimg.src = img.src;
    //add img to popup box

    popupbox.appendChild(popupimg);

    //append the popup box to body

    document.body.appendChild(popupbox);


    //creat thr close span

    let closebutton = document.createElement("span");

    // creat the close button

    let closebuttontext = document.createTextNode("X");

    // append text to close button

    closebutton.appendChild(closebuttontext);

    //add class to button

    closebutton.className = 'close-button';

    popupbox.appendChild(closebutton);












  });
});

//close popup

document.addEventListener("click",function(e) {

  if (e.target.className == 'close-button') {

    e.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();
  }
})


// select all bullets
const allbullets = document.querySelectorAll(".nav-bullets .bullet");

allbullets.forEach(bullet => {

  bullet.addEventListener("click",(e)=> {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'
    
    });
  });
});


// select all bullets
const alllinks = document.querySelectorAll(".links a");

alllinks.forEach(link => {

  link.addEventListener("click",(e)=> {

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'
    
    });
  });
});


//toggle menu
let togglebtn = document.querySelector(".togglr-menu");
let tlinks = document.querySelector(".links");
togglebtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");

  tlinks.classList.toggle("open");
};
document.addEventListener("click",(e) => {
  if (e.target !== togglebtn && e.target !== tlinks) {

    if (tlinks.classList.contains("open")) {
        togglebtn.classList.toggle("menu-active");

        tlinks.classList.toggle("open");
    }

  }
});
tlinks.onclick = function (e){
  e.stopPropagation();
};