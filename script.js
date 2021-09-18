function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // display result when compute interest is clicked
    //document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";

    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of 
    <mark>${rate}</mark>.<br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>in the year <mark>${year}</mark><br>`;
}
  
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText='${rateval}%';
}

function checkinput()
{
    //Create references to the input elements we wish to validate
    var principal = document.getElementById("principal");

    //Check if principal field is zero or negative
    if(principal.value <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    //If all is well return true.
    return true;
}

