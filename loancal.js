function cal(){
    
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var months = document.getElementById("months").value;

    var Total = (amount*rate)/months;
    document.getElementById("Result").innerHTML= Total;
}