const question = document.getElementsByClassName("question")

// console.log(question[0].lastElementChild)


for(let i = 0;i<question.length;i++){

    question[i].addEventListener(`click`,function(){
        if (question[i].lastElementChild.style.display=="none") {
            question[i].lastElementChild.style.display="block"
            question[i].firstElementChild.lastElementChild.innerHTML=`<i class="fa-solid fa-up-long"></i>`
        } else {
            question[i].lastElementChild.style.display="none"
            question[i].firstElementChild.lastElementChild.innerHTML=`<i class="fa-solid fa-down-long"></i>`
        } 
    })

}
