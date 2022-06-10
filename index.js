
 let randomValue = ""
 let passwordArray = []

 let smallAlpha = "abcdefghijklmnopqrstuvwxyz".split("")
 let capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
 let number = "0123456789".split("")
 let symbole = "!@#$%^&*()<>?".split("")
 let isblank = true
 let hasNumber = true
 let hasUppercase = true
 let hasSymbols = true

 
 function randomPassword(){
         
                for(let j = 0; j<4; j++){
                        let length =  document.getElementById("length").value 
                        checkbox()
                        for(let i = 0; i<length; i++){
                                let selection = Math.floor(Math.random()*4);
                                if(selection === 0 && hasSymbols === true){
                                        
                                        let randomEl = Math.floor(Math.random()*symbole.length)
                                        randomValue += symbole[randomEl] 
                                        
                                        
                                }else if (selection === 1 && hasUppercase === true){
                                        
                                        let randomEl = Math.floor(Math.random()*capAlpha.length)
                                        randomValue += capAlpha[randomEl] 
                                        
                                }else if (selection === 2){
                                        
                                        let randomEl = Math.floor(Math.random()*smallAlpha.length)
                                        randomValue += smallAlpha[randomEl] 
                                        
                                }else if (selection === 3 && hasNumber === true){
                                        
                                        let randomEl = Math.floor(Math.random()*number.length)
                                        randomValue += number[randomEl] 
                                        
                                }else{
                                        i--
                                }
                        }    
                        
                        passwordArray.push(randomValue)
                        randomValue = "";
                }
 }

function generatePassword(){
    if(isblank === true){
        randomPassword()
    }else {
        randomValue = ""
        passwordArray = [];
        randomPassword()
    }
    
}

function first(){
    isblank = false
    generatePassword()
     document.getElementById("first").textContent = passwordArray[0]
     document.getElementById("second").textContent = passwordArray[1]
     document.getElementById("third").textContent = passwordArray[2]
     document.getElementById("forth").textContent = passwordArray[3]
}


function checkbox(){
 let checkNumber = document.getElementById("check-number")
 let checkUppercase = document.getElementById("check-uppercase")
 let checkSymbols = document.getElementById("check-symbols")

        if(checkNumber.checked == true){
                hasNumber = true
        }else{
                hasNumber = false
                
        }
        if(checkUppercase.checked == true){
                hasUppercase = true
        }else{
                hasUppercase = false
                
        }
        if(checkSymbols.checked == true){
                hasSymbols = true
        }else{
                hasSymbols = false
                
        }
}





