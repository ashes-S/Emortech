let pass1 = document.querySelector(".pass1");
let pass2 = document.querySelector(".pass2");
let warning = document.querySelector(".hide_me");

var isTrue=()=>{
    let count=0;
    for(let i=0; i<=(pass1.value).length; i++){
        for(let j=0; j<=9; j++){
            if((pass1.value)[i]==j){
                count++;
            }
        }
    }
    if(count>0){
        return false
    }else{
        return true
    }
}

document.querySelector(".reset_btn").addEventListener("click", ()=>{
    let pass1val = pass1.value;
    let pass2val = pass2.value;
    //checking the password match
    if(pass1val != pass2val){
        pass2.setAttribute("class", "border border-danger w-100 pass2")
        warning.setAttribute("class", "hide_me d-block text-danger");
    }else{

        //checking small passwords
        if(pass1val.length<8){
            warning.innerHTML="Password length is too small";
            warning.setAttribute("class", "hide_me d-block text-danger");
        }else{
            //checking numbers or only alphabets
            if (isTrue()==true){
                console.log("yare")
                warning.innerHTML="Password must includes numbers";
                warning.setAttribute("class", "hide_me d-block text-danger");
            }else{
                document.querySelector("main form").setAttribute("class", "d-none flex-column align-items-start")
                document.querySelector("main h1").innerHTML="Password Changed";
                document.querySelector(".unhide_me").setAttribute("class", "mt-5 d-block unhide_me")
            }
    }
    }

    
})