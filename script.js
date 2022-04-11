let current_id
let current_img = 0
let vmin = Math.min(window.innerHeight, window.innerWidth)
$(".img").css("width", vmin)


$(".right-btn").click(function (e) {
    if (current_img >= 5) return false
    current_img++
    $(".current_img").removeClass("current_img")
    $(`#img${current_img}`).addClass("current_img")
    $(".annotation").html(annotation_list[current_id][current_img])
})

$(".left-btn").click(function (e) {
    if (current_img <= 0) return false
    current_img--
    $(".current_img").removeClass("current_img")
    $(`#img${current_img}`).addClass("current_img")
    $(".annotation").html(annotation_list[current_id][current_img])
})

$(".btn").click(function () {
    current_id = $(this).attr("id")
    $(".container").hide()
    $(".overlay").show()
    $("body").css("background-color", "rgba(0, 0, 0, 0.8)")
    $(".img-wrapper").css("display", "flex")
    for (let i = 0; i < 6; i++) {
        $(`#img${i}`).attr("src", `https://drive.google.com/uc?export=view&id=${img_id_list[current_id][i]}`)
    }
    $("#img0").addClass("current_img")
    $(".annotation").html(annotation_list[current_id][0])
})

$(".img-wrapper").click(function () {
    $(".container").show()
    $(".overlay").hide()
    $("body").css("background-color", "white")
    current_img = 0
})

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
if (isSafari) {
    $("html").css("font-size", "6px")
    if (navigator.userAgent.match('CriOS')) {
        $("html").css("font-size", "16px")
    }
}