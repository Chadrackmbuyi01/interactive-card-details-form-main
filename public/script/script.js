function cardFunctionality () {
    
    let action = document.getElementById("nameInput").value;

    if(action == null || action == ""){
        document.getElementById("message").innerHTML="field required";
        return false;
    } else{
    document.getElementById("nameOutput").innerHTML = action;
    }
}