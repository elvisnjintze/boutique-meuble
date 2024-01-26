const header = document.querySelector("nav")
const btnburger= document.querySelector("#burger-menu")
const nav = document.querySelector(".navigation")
const linkNav = document.querySelectorAll(".navigation a")
const sections = document.querySelectorAll("section")
btnburger.addEventListener("click", ()=>{
    nav.classList.toggle('active')
    btnburger.classList.toggle("bx-x")

})
linkNav.forEach(link=>{
    link.addEventListener("click", ()=>{
        nav.classList.remove('active')
    btnburger.classList.remove("bx-x")
    })
})
window.addEventListener("scroll", ()=>{
    nav.classList.remove('active')
    btnburger.classList.remove("bx-x")
    header.classList.toggle('active',window.scrollY>0)
})

const scrollActive = ()=>{
    sections.forEach(section=>{
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute('id')
        if (top>=offset && top<offset+height){
            linkNav.forEach(link=>{
                link.classList.remove('active')
                document.querySelector(`.navigation a[href*=${id}]`).classList.add('active')
            })
        }

    })
}
window.addEventListener("scroll", scrollActive)