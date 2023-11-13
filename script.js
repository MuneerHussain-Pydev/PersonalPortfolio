
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  function revealCertificate() {
    var imgs = document.querySelectorAll(".certificate-image");
    var lines = document.querySelectorAll(".line");
    var descs = document.querySelectorAll(".certificate-desc");
    var hrs=document.querySelectorAll(".sub-line");
  
    for (var i = 0; i < imgs.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = imgs[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        imgs[i].classList.add("active");
        descs[i].classList.add("active");
        lines[i].classList.add("active");
        hrs[i].classList.add("active");
      } 
      else {
        imgs[i].classList.remove("active");
        descs[i].classList.remove("active");
        lines[i].classList.remove("active");
        hrs[i].classList.remove("active");
      }
    }
  }


function revealdescHorizontal() {
    var revealsH = document.querySelectorAll(".project-description");
    var revealsI = document.querySelectorAll(".project-image");
    
    for (var i = 0; i < revealsH.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealsH[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        revealsH[i].classList.add("active");
        revealsI[i].classList.add("active");
      } else {
        revealsH[i].classList.remove("active");
        revealsI[i].classList.remove("active");
      }
    }
  }
  


  
window.addEventListener("scroll", print);

function print(){
  var but=document.querySelector(".up")
  if (scrollY>700){
    but.classList.add("remove");
  }
  else{
    but.classList.remove("remove");
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealdescHorizontal);
window.addEventListener("scroll", revealCertificate);
const circleSection = document.querySelector('.skillsContainer');
const python = document.querySelector('.python-progress');
const cpp=document.querySelector('.cpp-progress');
const _html=document.querySelector('.html-progress');
const _css=document.querySelector('.css-progress');
const sql=document.querySelector(".sql-progress");
const da=document.querySelector(".da-progress");
const dv=document.querySelector(".dv-progress");
const ms=document.querySelector(".ms-progress");

// console.log(circleSection.getBoundingClientRect().top);
// const circlSection =document.querySelector('.skillsContainer')
// const circlSection =document.querySelector('.skillsContainer')
let bol=false;

window.addEventListener("scroll",function(){
  if(scrollY > circleSection.getBoundingClientRect().top +100 && bol==false){
    python.classList.add("python-animation");
    cpp.classList.add("cpp-animation");
    _html.classList.add("html-animation");
    _css.classList.add("css-animation");
    sql.classList.add("sql-animation");
    da.classList.add("da-animation");
    dv.classList.add("dv-animation");
    ms.classList.add("ms-animation");
  }
  else{
    python.classList.remove("python-animation");
    cpp.classList.remove("cpp-animation");
    _html.classList.remove("html-animation");
    _css.classList.remove("css-animation");
    sql.classList.remove("sql-animation");
    sql.classList.remove("sql-animation");
    da.classList.remove("da-animation");
    dv.classList.remove("dv-animation");
    ms.classList.remove("ms-animation");
  }

})