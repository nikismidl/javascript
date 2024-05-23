function calc(){
    var a = parseInt(document.getElementById("adults_id").value) || 0;
    var k1 = parseInt(document.getElementById("kids1").value) || 0;
    var k2 = parseInt(document.getElementById("kids2").value) || 0;
    var k3 = parseInt(document.getElementById("kids3").value) || 0;
    var a_c; 
    var k1_c = k1 * 2480;
    var k2_c = k2 * 3050;
    var k3_c = k3 * 3490;
    var v;
    // vypocet
    if ((a == 1) && ((k1 > 0) || (k2 > 0) || (k3 > 0))) {
        // jeden dospely a nejake dite
        a_c = 4470;
    } else if (a > 1) {
        // vice dospelych
        a_c = (a - 1) * 4040 + 4470;
    } else {
        // 1 dospely bez ditete
        a_c = 4860;
    }
    v = a_c + k1_c + k2_c + k3_c;
    document.getElementById("result_id").value = v.toString();
}
