document.addEventListener("DOMContentLoaded", function() {
    const kalenteri = document.getElementById("kalenteri");
    const tänään = new Date();
    const nykyinenKuukausi = tänään.getMonth();
    const nykyinenVuosi = tänään.getFullYear();
    const kuukaudenPäivät = new Date(nykyinenVuosi, nykyinenKuukausi + 1, 0).getDate();
    const aloituspäivä = new Date(nykyinenVuosi, nykyinenKuukausi, 1).getDay();
    let seuraavaTapahtuma = null;

    const viikonpäivät = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];

    // Lisää viikonpäivät
    for (let i = 1; i <= 7; i++) {
        const viikonpäiväDiv = document.createElement("div");
        viikonpäiväDiv.textContent = viikonpäivät[i % 7];
        kalenteri.appendChild(viikonpäiväDiv);
    }

    // Lisää tyhjiä soluja kuukauden alkuun saakka
    for (let i = 0; i < aloituspäivä - 1; i++) {
        const tyhjäDiv = document.createElement("div");
        kalenteri.appendChild(tyhjäDiv);
    }

    // Lisää kuukauden päivät ja tapahtumat
    for (let i = 1; i <= kuukaudenPäivät; i++) {
        const päiväDiv = document.createElement("div");
        päiväDiv.classList.add("päivä");
        päiväDiv.innerHTML = "<span>" + i + "</span>";

        // Tarkista onko tänään ja lisää luokka jos on
        if (nykyinenVuosi === tänään.getFullYear() && nykyinenKuukausi === tänään.getMonth() && i === tänään.getDate()) {
            päiväDiv.classList.add("tänään");
        }

        // Lisää tapahtumat
        switch ((aloituspäivä + i - 2) % 7) {
            case 1: // Tiistai
                lisääTapahtuma(päiväDiv, "Savikurssit", "15:00");
                break;
            case 2: // Keskiviikko
                lisääTapahtuma(päiväDiv, "Maalaus- ja Piirustuskurssit", "15:00");
                break;
            case 3: // Torstai
                lisääTapahtuma(päiväDiv, "Erikoistyöpajat", "15:00");
                break;
            case 4: // Perjantai
                lisääTapahtuma(päiväDiv, "Digitaalinen taide", "15:00");
                break;
            case 5: // Lauantai
                lisääTapahtuma(päiväDiv, "Lasten työpajat", "14:00");
                break;
        }

        kalenteri.appendChild(päiväDiv);

        // Tarkista seuraavan tapahtuman päivä
        if (!seuraavaTapahtuma && i >= tänään.getDate()) {
            const tapahtumat = päiväDiv.querySelectorAll(".tapahtuma");
            if (tapahtumat.length > 0) {
                seuraavaTapahtuma = tapahtumat[0].textContent;
            }
        }
    }

    // Näytä seuraavan tapahtuman teksti
    if (seuraavaTapahtuma) {
        const seuraavaTapahtumaTeksti = document.createElement("p");
        seuraavaTapahtumaTeksti.textContent = "Seuraava tapahtuma: " + seuraavaTapahtuma;
        document.body.appendChild(seuraavaTapahtumaTeksti);
    }
});

function lisääTapahtuma(päiväDiv, tapahtuma, aika) {
    const tapahtumaDiv = document.createElement("div");
    tapahtumaDiv.classList.add("tapahtuma");
    tapahtumaDiv.textContent = tapahtuma + " " + aika;
    päiväDiv.appendChild(tapahtumaDiv);
}
