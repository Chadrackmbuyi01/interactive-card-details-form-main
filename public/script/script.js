nameInput.oninput = showValue;
numberInput.oninput = showValue2;
monthInput.oninput = showValue3;
yearInput.oninput = showValue4;
cvcInput.oninput = showValue5;
    
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
function showValue5(){
    cvcOutput.value = this.value;
}

function cardFunctionality () {

    let action = document.getElementById("nameInput").value;
    let action2 = document.getElementById("numberInput").value;
    let action3 = document.getElementById("monthInput").value;
    let action4 = document.getElementById("yearInput").value;
    let action5 = document.getElementById("cvcInput").value;

      if(action == null || action == ""){
          document.getElementById("message").innerHTML = "field required";
         return false;
      } else if(action2 == null || action2 == ""){
          document.getElementById("message").innerHTML = "field required";
          return false;
      } else if (action3 == null || action3 == ""){
        document.getElementById("message").innerHTML = "field required";
      } else if (action4 == null || action4 == ""){
        document.getElementById("message").innerHTML = "field required";
      } else if (action5 == null || action5 == ""){
        document.getElementById("message").innerHTML = "field required";
      } else{
        location.href='complete-state.html';
        
      }
  }
    