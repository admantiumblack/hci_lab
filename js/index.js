var currIdx = 0

function autoPlay(){
    var tempIdx = currIdx + 1
    var maxLen = document
    .getElementsByClassName("carousel-content").length
    if(tempIdx >= maxLen){
        tempIdx = 0
    }
    goToNImage(tempIdx)
    setTimeout(autoPlay, 5000)
}

function goToNImage(idx){
    var imgWidth = document
    .getElementsByClassName("carousel-content")[idx]
        .getBoundingClientRect()["width"]

    var currPos = currIdx * -imgWidth
    if(idx == currIdx){
        console.log(currPos, currIdx, idx)
        return
    }

    console.log(currPos)
    if(idx < currIdx){
        currPos += imgWidth * (currIdx - idx)
    }
    else if(idx > currIdx){
        currPos -= imgWidth * (idx - currIdx)
    }
    console.log(currPos, currIdx, idx)
    currIdx = idx
    update(currPos)
}

function update(currMargin){
    const images = $(".carousel .carousel-content")
    const prevImg = images.eq(0)
    prevImg.animate({"margin-left": currMargin})
}

setTimeout(autoPlay, 5000)