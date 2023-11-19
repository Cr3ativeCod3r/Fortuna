function obliczZyski() {
    var spanWartosciKursu = document.getElementsByClassName("total-odds")[0];

    if (spanWartosciKursu) {
        var wartoscSpanu = spanWartosciKursu.textContent.trim();
        var wartoscSpanuFloat = parseFloat(wartoscSpanu);
        var kurs = wartoscSpanuFloat;
        var stawka = 100;

        var procent = ((1 / wartoscSpanuFloat) * 100).toFixed(2);

        var kursulamek = (procent / 100).toFixed(2);
        var proby = 1000;

        var lose = 1 - kursulamek;
        var win = kursulamek;

        var potentialwin = ((kurs * stawka) - stawka) * 0.88;

        var profit = win * proby * potentialwin;
        var noprofit = lose * proby * stawka;

        var termin = ((profit - noprofit) / stawka).toFixed(0);

        alert("szanse jednorazowe: " + procent + "% \n  zysk długoterminowy : " + termin + "%");
    }
}

var przycisk = document.createElement("button");
przycisk.textContent = "Oblicz Zyski";
przycisk.style.position = "fixed";
przycisk.style.top = "0";
przycisk.style.left = "0";
przycisk.style.zIndex = "999";
przycisk.style.color = "red";
przycisk.style.width = "300px";
przycisk.style.height = "300px";
przycisk.addEventListener("click", obliczZyski);
document.body.appendChild(przycisk);
