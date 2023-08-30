nameInput.oninput = showValue;
numberInput.oninput = showValue2;
monthInput.oninput = showValue3;
yearInput.oninput = showValue4;
    
function showValue(){
    nameOutput.value = this.value;
}
function showValue2(){
    numberOutput.value = this.value;
}
function showValue3(){
    monthOutput.value = this.value;
}
function showValue4(){
    yearOutput.value = this.value;
}





// function cardFunctionality () {

//  let action = document.getElementById("nameInput").value;
//      let action2 = document.getElementById("numberInput").value;

//      if(action == null || action == ""){
//          document.getElementById("message").innerHTML="field required";
//         return false;
//      } else if(action2 == null || action2 == ""){
//          document.getElementById("message").innerHTML="field required";
//          return false;
//      }else{
//      document.getElementById("nameOutput").innerHTML = action;
//      document.getElementById("numberOutput").innerHTML = action2;
//      }
//  }
    