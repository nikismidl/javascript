function calc(){
    var a = document.getElementById("adults_id").value;
    var b = document.getElementById("kids1").value;
    var c = document.getElementById("kids2").value;
    var d = document.getElementById("kids3").value;
    var a_c; 
    var b_c = b * 2480;
    var c_c = c * 3050;
    var d_c = d * 3490;
    var v;
    if ((a == 1) && (b > 0) || (c > 0) || (d > 0)) {
        a_c = 4470
    } else if (a > 1) {
        a_c = (a - 1) * 4040 + 4470
        console.log(a_c)
    } else if ((a == 1) && (b == 0) && (c == 0) && (d == 0)){
        a_c = 4860
    }
    v = a_c + b_c + c_c + d_c;
    document.getElementById("result_id").value = v.toString();



    console.log(a)
    console.log(a_c)
    console.log(v)

}
