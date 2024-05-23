function func1() {
  var array=['red', 'blue', 'purple', 'green'];
  document.getElementById("input_1").value = array.toString();
}

function func2() {
  var array=['red', 'blue', 'purple', 'green'];
  array.push("yellow");
  document.getElementById("input_2").value = array.toString();
}

function func3() {
  var array=['red', 'blue', 'purple', 'green'];
  array.shift();
  document.getElementById("input_3").value = array.toString();
}

function func4() {
  var array=['red', 'blue', 'purple', 'green'];
  document.getElementById("input_4").value = array[1];
}

function func5() {
  var array=['red', 'blue', 'purple', 'green'];
  document.getElementById("input_5").value = array.length;
}

function func6() {
  var array=['red', 'blue', 'purple', 'green'];
  document.getElementById("input_6").value = array.reverse().toString();
}
