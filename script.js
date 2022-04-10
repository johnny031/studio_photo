let current_id
let current_img = 0
let vmin = Math.min(window.innerHeight, window.innerWidth)
$(".img").css("width", vmin)


$(".right-btn").click(function (e) {
    if (current_img >= 5) return false
    current_img++
    $(".img").attr("src", `https://drive.google.com/uc?export=view&id=${img_id_list[current_id][current_img]}`)
    $(".annotation").html(annotation_list[current_id][current_img])
})

$(".left-btn").click(function (e) {
    if (current_img <= 0) return false
    current_img--
    $(".img").attr("src", `https://drive.google.com/uc?export=view&id=${img_id_list[current_id][current_img]}`)
    $(".annotation").html(annotation_list[current_id][current_img])
})

$(".btn").click(function () {
    current_id = $(this).attr("id")
    $(".container").hide()
    $(".overlay").show()
    $(".img-wrapper").css("display", "flex")
    $(".img").attr("src", `https://drive.google.com/uc?export=view&id=${img_id_list[current_id][0]}`)
    $(".annotation").html(annotation_list[current_id][0])
})

$(".img-wrapper").click(function () {
    $(".container").show()
    $(".overlay").hide()
    current_img = 0
})