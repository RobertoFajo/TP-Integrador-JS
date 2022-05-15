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

    
}

function handOverCategoria(){
  let c = document.forms["myForm"]["fcantidad"].value;
  if (c == "") {
    alert("Ingrese cantidad, es obligatoria");
  }
}

let enviar = document.getElementById("fcategoria");
enviar.onmouseover = handOverCategoria;

let idtotal=document.getElementById("totalPagar");
let textoTotal = idtotal.innerHTML;
let fcategoria = document.getElementById("fcategoria");
fcategoria.onchange = calcula;

function calcula(){
    let d = document.forms["myForm"]["fcategoria"].value;
    let c = document.forms["myForm"]["fcantidad"].value;
    let total=0;
    if(d=="Estudiante"){
        total=200*c*0.2;
    }else{
        if(d=="Trainee"){
            total=200*c*0.5;
        }else{
            total=200*c*0.85;
        }
    }
    
    idtotal.innerHTML = textoTotal+total.toString();


}