const correctAnsver =["E","E","E","E"];
const form =document.querySelector(".question-form");
const result = document.querySelector(".result")



form.addEventListener("submit", e=>{
    e.preventDefault();

    let score= 0;

    const useransers= [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    useransers.forEach((ansver,index)=>{
        if(ansver===correctAnsver[index]){
            score +=25;
        };      
    });
    
    result.classList.remove("d-none");

    let puan = 0;   
    const bastır= setInterval(()=>{
    
        result.querySelector("span").textContent =`${puan}%`;
        if(puan === score){
            clearInterval(bastır)
        }
        else{
            puan++;
        }


    }, 10);



});



