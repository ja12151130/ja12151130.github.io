const mickeyvid = document.querySelector(".divvideo");
// const afterdiv =document.querySelectorAll(".content")

// mickeyvid.classList.toggle("divvideo")

// mickeyvideo.addEventListener("click", function () {
//     mickeyvideo.classList.toggle('fade');
// })

function getRidOf() {
    mickeyvid.remove();
}



// setTimeout(getRidOf, 13500)


const card = document.querySelector(".cardInner")

card.addEventListener("click", function () {
    // console.log("hit")
    card.classList.toggle("isFlipped");


})

const cardFlipped = document.querySelector(".flipCard")
cardFlipped.addEventListener("mouseenter", function () {
    card.classList.toggle("isFlipped");
    console.log("hit");
})




const btn = document.querySelector(".worksbtn")
btn.addEventListener("mouseenter", function () {
    console.log("hit")
    // card.classList.toggle("isFlipped");


})


// const test = document.querySelector("h5");
// test.toggle("click", function () {
//     console.log("hit")
// })


const toggle = document.querySelector(".toggle")

let togglebtn = document.createElement("button");
let toggleimg = document.createElement("img");
toggleimg.src = "work_btn_01.png";
togglebtn.appendChild(toggleimg)
toggle.appendChild(togglebtn)

// togglebtn.innerText("test")
