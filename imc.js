function calculaIMC (){
    document.getElementById("altura").style.borderColor = "white"
    document.getElementById("altura").style.backgroundColor = "white"
    document.getElementById("peso").style.borderColor = "white"
    document.getElementById("peso").style.backgroundColor = "white"
    if(document.getElementById("peso").value ==""){
        alert("Preencha o Peso!")
        document.getElementById("peso").style.borderColor = "red"
        document.getElementById("peso").style.backgroundColor = "red"
        document.getElementById("peso").focus()
    return false
    }
    if(document.getElementById("altura").value ==""){
        alert("Preencha o altura");
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").style.backgroundColor = "red";
        document.getElementById("altura").focus();
    return false
    }
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resultado = peso/(altura*altura)
    alert("Seu IMC é: " +resultado)
    return true
}