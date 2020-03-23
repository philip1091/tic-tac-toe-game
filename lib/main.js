const start = document.querySelector(".btn-style");
const show = document.querySelector(".show-table");


gsap.from(".logo", {duration: 2, rotation:720, opacity: -3,x:300});

gsap.from(".btn-style", {duration:3, opacity:-5});
gsap.to(".btn-style", {backgroundColor: "#2E96FF", padding:"0.5em", color:"#fff"});
gsap.to(".restart", {backgroundColor: "#2E96FF", padding:"0.5em", color:"#fff"});



start.onclick = () => {
  gsap.to(".btn-style", {duration:1.5, opacity:0, ease: "elastic.in(2.5, 0.75)", x: "200%" });
  show.classList.remove("hide");
  gsap.from(".show-table", {duration:5, ease: "slow(0.1, 0.1, false)", opacity:-1});
  show.classList.add("margin");
}
