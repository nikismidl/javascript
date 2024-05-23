function calc() {
    var podpora_calc = parseInt(document.getElementById("podpora_id").value) || 0;
    var prispevek_calc = parseInt(document.getElementById("prispevek_id").value) || 0;
    var sazba_calc = parseInt(document.getElementById("sazba_id").value) || 0;

    if (podpora_calc == 15) {
        var podpora = 0.15;
        var max = 3000;
    } else {
        var podpora = 0.10;
        var max = 2000;
    }

    // vypocet
    var nasporena_castka = 0;
    for (let i = 0; i < 6; i++) {
        nasporena_castka = nasporena_castka + prispevek_calc;
        var rocni_podpora = Math.min(prispevek_calc * podpora, max);
        nasporena_castka = nasporena_castka + rocni_podpora;
        nasporena_castka = nasporena_castka + (nasporena_castka * (sazba_calc/100));
    }

    document.getElementById("nasporeno_id").value = nasporena_castka.toString();
}