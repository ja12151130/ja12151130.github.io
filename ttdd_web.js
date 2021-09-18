const mickeyvid = document.querySelector(".divvideo");
// const afterdiv =document.querySelectorAll(".content")

// mickeyvid.classList.toggle("divvideo")

// mickeyvideo.addEventListener("click", function () {
//     mickeyvideo.classList.toggle('fade');
// })

// function getRidOf() {
//     mickeyvid.remove();
// }



// // setTimeout(getRidOf, 13500)


const card = document.querySelector(".cardInner")

card.addEventListener("click", function () {
    console.log("hit")
    card.classList.toggle("isFlipped");


})

// const cardFlipped = document.querySelector(".flipCard")
// cardFlipped.addEventListener("mouseenter", function () {
//     card.classList.toggle("isFlipped");
//     console.log("hit");
// })





const toggleWork = document.querySelector(".toggleWorkBtnArea")
const hidebtn = document.querySelector(".hidebtn")


toggleWork.addEventListener("mouseenter", function () {
    console.log("testinggg")
    hidebtn.classList.toggle("showbtn")
})

toggleWork.addEventListener("mouseleave", function () {
    console.log("fhgf")
    hidebtn.classList.toggle("showbtn")
})




const testbtn = document.querySelector(".testingimg")
testbtn.addEventListener("mouseenter", function () {
    console.log("fjdkla;")
})


