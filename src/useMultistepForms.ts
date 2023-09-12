import { ReactElement, useState } from "react";

export function useMultistepForms(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    
    function next(){
        setCurrentStepIndex(i =>{
            if(i>= steps.length-1) return i;
            return i+1;
        })
    }

    function back(){
setCurrentStepIndex(i=>{
    if(i<=0) return i
    return i-1
})
    }
    
function goTo(index: number){
setCurrentStepIndex(index);
}

function page(a:number){
    switch(a)
    {
      case 0: return "Gå till Formulär";
      case 1 : return "Gå till nästa: Om forskningsprojektet";
      case 2: return "Gå till nästa: Datauttag";
      case 3: return "Granska och skicka in";
      case 4: return "Skicka in ansökan";
      case 5: return "Avsluta";
    }
}

function backpage(a:number){
    switch(a)
    {
      //case 0: return "Gå till Formulär";
      case 1 : return "Avbryt Formulär";
      case 2: return "Tillbaka till: Om beställaren";
      case 3: return "Tillbaka till: Om forskningsprojektet";
      case 4: return "Tillbaka till: Datauttag";
      
    }
}

function setpage(a:number){
    switch(a)
    {
        case 1: return setCurrentStepIndex(1);
        case 2 : return setCurrentStepIndex(2);
        case 3: return setCurrentStepIndex(3);
        case 4: return setCurrentStepIndex(4);
    }
}

    return {
        currentStepIndex,
         step: steps[currentStepIndex],
         steps,
         isFirststep : currentStepIndex ===0,
         isLastStep : currentStepIndex === steps.length-1,
         next,
         back,
         goTo,
         page,
         backpage,
         setpage
    }
}