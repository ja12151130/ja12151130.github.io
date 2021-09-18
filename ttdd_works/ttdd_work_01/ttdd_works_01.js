const pic = document.querySelector("#picTrying")
let mainPic = document.querySelector(".workimg")

// pic.addEventListener("click", function () {
//     console.log("hit")
//     mainPic.src = pic.src
// })



const pics = document.querySelectorAll(".albumpic")

for (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener("mouseenter", function () {
        mainPic.src = pics[i].src
    })

    pics[i].addEventListener("click", function () {
        mainPic.src = pics[i].src
    })
}

// for (let i = 0; i < pics.length; i++) {
//     pics[i].addEventListener("click", function () {
//         console.log("hit")
//         mainPic.src = pics[i].src
//     })
// }