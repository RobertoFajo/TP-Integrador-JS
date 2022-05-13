function validateForm() {
    let a = document.forms["myForm"]["fname"].value;
    if (a == "") {
      alert("Complete el nombre, es obligatorio");
      return false;
    }
    let b = document.forms["myForm"]["lname"].value;
    if (b == "") {
      alert("Complete el apellido, es obligatorio");
      return false;
    }
    let c = document.forms["myForm"]["fcantidad"].value;
    if (c == "") {
      alert("Ingrese cantidad, es obligatoria");
      return false;
    }
    let d = document.forms["myForm"]["fcategoria"].value;
    if (d == ""){
      alert("Ingrese categoria, es obligatoria");
      return false;
    }

    let total=0;
    let leyenda;
    if(d=="Estudiante"){
        total=200*c*0.2;
    }else{
        if(d=="Trainee"){
            total=200*c*0.5;
        }else{
            total=200*c*0.85;
        }
    }
    leyenda=document.getElementById("totalPagar");
    document.getElementById("totalPagar").innerHTML = leyenda+"---------------------";

}