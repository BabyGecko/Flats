document.getElementById("callMe").onclick = function (event) {
    event.preventDefault();
    document.querySelector(".open").classList.toggle("openTrans")
    document.querySelector(".blurCont").classList.toggle("blur")
    document.querySelector("body").style.overflow = "hidden"
}
document.getElementById("openButton").onclick = function () {
    document.querySelector(".open").classList.toggle("openTrans")
    document.querySelector(".blurCont").classList.toggle("blur")
    document.querySelector("body").style.overflow = "visible"
}