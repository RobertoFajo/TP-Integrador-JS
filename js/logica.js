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
    if (d == "") {
      alert("Ingrese cantidad, es obligatoria");
      return false;
    }
  }