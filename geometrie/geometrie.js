function reset() {
  document.getElementById('a').value = '';
  document.getElementById('b').value = '';
  document.getElementById('o').value = '';
  document.getElementById('s').value = '';
}

function calculate() {
  //
  document.getElementById("error").style.visibility='hidden';
  document.getElementById("error").textContent='';
  //
  var a = parseFloat(document.getElementById('a').value);
  var b = parseFloat(document.getElementById('b').value);
  var o = parseFloat(document.getElementById('o').value);
  var s = parseFloat(document.getElementById('s').value);
  //
  if (a && b && isNaN(o) && isNaN(s)) {
    //
    s = a * b;
    o = 2 * (a + b);
    document.getElementById("o").value = o;
    document.getElementById("s").value = s;
  }
  else if (a && o && isNaN(b) && isNaN(s)) {
    b = o / 2 - a;
    s = a * b;
    document.getElementById("b").value = b;
    document.getElementById("s").value = s;
  }

  else if (a && s && isNaN(b) && isNaN(o)) {
    b = o / 2 - a;
    o = 2 * (a + b);
    document.getElementById("b").value = b;
    document.getElementById("o").value = o;
  }

  else if (b && o && isNaN(a) && isNaN(s)) {
    a = o / 2 - b;
    s = a * b;
    document.getElementById("a").value = a;
    document.getElementById("s").value = s;
  }

  else if (b && s && isNaN(a) && isNaN(o)) {
    a = o / 2 - a;
    o = 2 * (a + b);
    document.getElementById("a").value = a;
    document.getElementById("o").value = o;
  }

  else if (o && s && isNaN(a) && isNaN(b)) {
    var d = (o/2)*(o/2) - (4*1*s);
    console.log(d);
    a = ((o/2) + Math.sqrt(d)) / 2;
    b = ((o/2) - Math.sqrt(d)) / 2;
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
  }

  else {
    document.getElementById("error").textContent='Chybné zadání! Zadejte 2 hodnoty.';
    document.getElementById("error").style.visibility='visible';
  }

}
