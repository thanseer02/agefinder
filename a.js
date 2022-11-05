function age()
{
    var a=parseInt(document.getElementById('y').value);
    var b=parseInt(document.getElementById('m').value);
    var c=parseInt(document.getElementById('d').value);

    var date = new Date ();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDay();

    var yer = y-a;
    var mon = m-b;
    var day = d-c;

    document.getElementById("r").innerHTML= "you are -"+ yer +"- year -"+mon+"- months- "+day+"- old";

}
