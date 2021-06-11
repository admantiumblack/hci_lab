var currIdx = 0

function autoPlay(){
    var tempIdx = currIdx + 1
    var maxLen = document
    .getElementsByClassName("carousel-content").length
    if(tempIdx >= maxLen){
        tempIdx = 0
    }
    goToNImage(tempIdx)
    setTimeout(autoPlay, 7000)
}

function goToNImage(idx){
    if(idx == currIdx){
        console.log(currPos, currIdx, idx)
        return
    }


    var imgWidth = document
    .getElementsByClassName("carousel-content")[idx]
        .getBoundingClientRect()["width"]

    var currPos = currIdx * -imgWidth

    var circles = document.getElementsByClassName("circle")
    circles[currIdx].classList.remove("active")

    if(idx < currIdx){
        currPos += imgWidth * (currIdx - idx)
    }
    else if(idx > currIdx){
        currPos -= imgWidth * (idx - currIdx)
    }

    circles[idx].classList.add("active")

    currIdx = idx
    update(currPos)
}

function update(currMargin){
    const images = $(".carousel .carousel-content")
    const prevImg = images.eq(0)
    prevImg.animate({"margin-left": currMargin})
}

function prepare(){
    document.getElementsByClassName("circle")[0].classList.add("active")
    setTimeout(autoPlay, 7000)
}

function overview(n){
    var cont = document.getElementsByClassName("content-item")[n]
    var overlay = document.getElementsByClassName("overlay")[0]
    var contTxt = document.getElementsByClassName("content-text")[n]
    var contTitle = document.getElementsByClassName("content-title")[n]
    var contImg = document.getElementsByClassName("content-img")[n]
    console.log("overview enter")
    if(!cont.classList.contains("clicked")){
        cont.classList.add("clicked")
        overlay.classList.add("overlay-active")
        contTxt.classList.add("content-text-active")
        contTitle.classList.add("content-title-active")
        contImg.classList.add("content-img-active")
    }
    else{
        cont.classList.remove("clicked")
        overlay.classList.remove("overlay-active")
        contTxt.classList.remove("content-text-active")
        contTitle.classList.remove("content-title-active")
        contImg.classList.remove("content-img-active")
    }
}


prepare()