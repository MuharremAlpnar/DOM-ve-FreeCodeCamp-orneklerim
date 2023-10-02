const playbtn = document.getElementById("playbtn")
const returnbtn = document.getElementById("returnbtn")
let hors= document.getElementById("hors")

let saat=0, dakika=0, saniye=0


let bgsaat, bgdakika, bgsaniye
let durum="durgun"
let zamanlayici= null

returnbtn.addEventListener("click",function(){
    zamanlayici = clearInterval(zamanlayici)
    hors.textContent="00:00:00"
    playbtn.classList.remove("stoped")
    playbtn.classList.add("playbtn")
    playbtn.innerHTML=`<i class="fa-solid fa-play"></i>`
    durum="durgun"
    saat=0
    dakika=0
    saniye=0
})

playbtn.addEventListener("click",function(){

    if (durum==="durgun") {
        durum="devam"
        zamanlayici = setInterval(oynat, 1000);  
        playbtn.innerHTML=`<i class="fa-solid fa-hand"></i>`
        playbtn.classList.remove("playbtn")
        playbtn.classList.add("stoped")
    } else {
        zamanlayici = clearInterval(zamanlayici)
        playbtn.classList.remove("stoped")
        playbtn.classList.add("playbtn")
        playbtn.innerHTML=`<i class="fa-solid fa-play"></i>`
        durum="durgun"
    }

})



function oynat() {

    saniye++

    if (saniye%60===0) {
        saniye=0
        dakika++
        if (dakika%60===0) {
            dakika=0
            saat++
        }
    }

    if(saniye<10){
        bgsaniye="0"+saniye.toString()
    }else{
        bgsaniye=saniye.toString()
    }
    if(dakika<10){
        bgdakika="0"+dakika.toString()
    }else{
        bgdakika=dakika.toString()
    }
    if(saat<10){
        bgsaat="0"+saat.toString()
    }else{
        bgsaat=saat.toString()
    }
    hors.textContent=`${bgsaat}:${bgdakika}:${bgsaniye}`
}

// playbtn.classList[1]="stoped"



