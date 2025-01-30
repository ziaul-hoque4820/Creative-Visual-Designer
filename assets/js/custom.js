// Beginning Section Start

function revealToSpan() {
    document.querySelectorAll(".reveal")
    .forEach((elem) => {
        // create two span 
        let spanParent = document.createElement("span")
        let spanChild = document.createElement("span");

        // Given the class name of the created child
        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        // Modifying and Replacing Child Content
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);

        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })
}
function loaderAnimation() {
    let tl = gsap.timeline();

tl
.from(".child span", {
    x: 100,
    duration: 1,
    stagger: .2,
    ease: Circ.easeInOut
})
.to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})
.to("#loader", {
    height: 0,
    duration: 1,
    ease : Circ.easeInOut
})
.to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    ease : Circ.easeInOut,
    delay: -.8
})
.to("#green", {
    height: "0%",
    duration: 1,
    ease : Circ.easeInOut,
    delay: -.5
})
}
revealToSpan();
loaderAnimation();


// Banner Section Start

