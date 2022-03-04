console.log("Hello")
let  btn = document.getElementById(`bar`)


let navlist = document.querySelector('.navlist')
btn.onclick = () => {
    console.log("Hello")
    navlist.classList.toggle('mobile-menu')
}