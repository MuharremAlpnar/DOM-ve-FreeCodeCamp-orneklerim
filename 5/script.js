const kaydet = document.getElementById("kaydet");
const giris =document.getElementById("giris");



let taslak="";

kaydet.addEventListener("click",function(){
    taslak=giris.value;
    
    
    let yeniDiv = document.createElement("div");
    yeniDiv.classList.add("task")

    let yeniP = document.createElement("p");
    yeniP.textContent = taslak;
    yeniDiv.append(yeniP)

    let Btn1 = document.createElement("button");
    Btn1.id="tik";
    Btn1.innerHTML=`<i class="fa-solid fa-check"></i>`
    yeniDiv.append(Btn1)

    let Btn2 = document.createElement("button");
    Btn2.id="cop";
    Btn2.innerHTML=`<i class="fa-solid fa-trash"></i>`
    yeniDiv.append(Btn2)


    if (taslak === "") {
        alert("boş bir değer girmeyiniz");
    } else {
        document.body.append(yeniDiv)
        taslak="";
        giris.value="";
    }

    Btn1.addEventListener("click",function(){
       Btn1.previousElementSibling.style.textDecoration="line-through"
  
    })

    Btn2.addEventListener("click",function(){
        Btn2.parentElement.remove()
   
     })

});

