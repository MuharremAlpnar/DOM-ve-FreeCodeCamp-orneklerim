const burda=document.getElementById("burda")
const burdaBtn=document.getElementById("burda-btn")
const neredesin=document.getElementById("neredesin")


neredesin.addEventListener("click",function(e){
    burda.style.display="flex";
    e.stopPropagation()
    window.addEventListener("click",function(){
        burda.style.display="none";
    })
})

burdaBtn.addEventListener("click",function(e){
    burda.style.display="none";
    e.stopPropagation()
   
})
burda.addEventListener("click",function(e){
    e.stopPropagation()
})




