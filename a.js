function age()
{
    var a=parseInt(document.getElementById('y').value);
    var date = new Date ();
    var y = date.getFullYear();
    var age = y-a;
    document.getElementById("rs").innerHTML= "you are -"+ age +"  years old";

}