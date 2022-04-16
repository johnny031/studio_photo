let current_id
let current_img = 0
let annotation_list = [
    "1.原本圖片",
    "2.原圖放大",
    "3.去斑紋+修除髮絲",
    "4.磨皮",
    "5.眼神銳化",
    "6.調色打光",
    "7.完成圖"
]

for (let i = 0; i < name_list.length; i++) {
    $(".name-list").append(`<li><button id="${i}" class="btn">${name_list[i]}</button></li>`)
}

$(".right-btn").on("click tap", function () {
    if (current_img >= 6) return false
    current_img++
    $(".current_img").removeClass("current_img")
    $(`#img${current_img}`).addClass("current_img")
    $(".annotation").html(annotation_list[current_img])
})

$(".left-btn").on("click tap", function () {
    if (current_img <= 0) return false
    current_img--
    $(".current_img").removeClass("current_img")
    $(`#img${current_img}`).addClass("current_img")
    $(".annotation").html(annotation_list[current_img])
})

$(".btn").click(function () {
    current_id = $(this).attr("id")
    $(".container").hide()
    $(".overlay").show()
    $("body").css("background-color", "rgba(0, 0, 0, 0.8)")
    $(".img-wrapper").css("display", "flex")
    for (let i = 0; i < 7; i++) {
        $(`#img${i}`).attr("src", `https://drive.google.com/uc?export=view&id=${img_id_list[current_id][i]}`)
    }
    $("#img0").addClass("current_img")
    $(".annotation").html(annotation_list[0])
})

$(".img-wrapper").click(function () {
    $(".container").show()
    $(".overlay").hide()
    $("body").css("background-color", "white")
    $(".current_img").removeClass("current_img")
    for (let i = 0; i < 6; i++) {
        $(`#img${i}`).attr("src", "")
    }
    current_img = 0
})