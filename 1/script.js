const btn = document.getElementById("btn")
const soz=document.getElementById("soz")
const soyleyen=document.getElementById("soyleyen")


let icerik=[
    {
        yazi:"Her başarı, sabır ile zamanı birleştirerek sağlanır",
        yazan:" Balzac"
    },
    {
        yazi:"Stresin en büyük sebebi, günlük yaşamınızda anlayışsız insanlarla yaptığınız tartışmalarıdır.",
        yazan:"Albert Einstein"
    },
    {
        yazi:"Seni bulmaktan önce arama isterim. Seni sevmekten önce anlamak isterim. Seni bir yaşam boyu bitirmek değil de, sana hep yeniden başlamak isterim.",
        yazan:" Özdemir Asaf"
    },
    {
        yazi:"İçinde yaşanılan an, geleceği kemiren geçmiştir.",
        yazan:"Henri Bergeon"
    },
    {
        yazi:"Herkes doğru insanı bulmak ister, yanılmamak için. Oysa kimse uğraşmaz, doğru insan olmak için. ",
        yazan:"Sigmon Freud"
    }
]


btn.addEventListener("click",function(){
    let rast=  Math.floor(Math.random()*(icerik.length))  

    soz.textContent=icerik[rast].yazi
    soyleyen.textContent=icerik[rast].yazan



});



