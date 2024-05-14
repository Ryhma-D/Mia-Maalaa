const kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];

            let nykyinenKuukausi = new Date().getMonth();
            let nykyinenVuosi = new Date().getFullYear();
            
            const kuukausiVuosiElementti = document.getElementById("kuukausiVuosi");
            const paivatElementti = document.querySelector(".paivat");
            
            document.getElementById("edellinenBtn").addEventListener("click", () => {
              nykyinenKuukausi -= 1;
              if (nykyinenKuukausi < 0) {
                nykyinenKuukausi = 11;
                nykyinenVuosi -= 1;
              }
              paivitaKalenteri();
            });
            
            document.getElementById("seuraavaBtn").addEventListener("click", () => {
              nykyinenKuukausi += 1;
              if (nykyinenKuukausi > 11) {
                nykyinenKuukausi = 0;
                nykyinenVuosi += 1;
              }
              paivitaKalenteri();
            });
            
            function paivitaKalenteri() {
              kuukausiVuosiElementti.textContent = `${kuukaudet[nykyinenKuukausi]} ${nykyinenVuosi}`;
              paivatElementti.innerHTML = "";
            
              const paiviaKuukaudessa = new Date(nykyinenVuosi, nykyinenKuukausi + 1, 0).getDate();
            
              for (let i = 1; i <= paiviaKuukaudessa; i++) {
                const paivaElementti = document.createElement("div");
                paivaElementti.classList.add("paiva");
                paivaElementti.textContent = i;
                paivatElementti.appendChild(paivaElementti);
              }
            }
            
            function lisaaTapahtuma() {
              const tapahtumaPvm = document.getElementById("tapahtumaPvm").value;
              const tapahtumaKuvaus = document.getElementById("tapahtumaKuvaus").value;
            
              if (tapahtumaPvm && tapahtumaKuvaus) {
                const pvm = new Date(tapahtumaPvm);
                const paiva = pvm.getDate();
                const paivaElementti = paivatElementti.querySelector(`.paiva:nth-child(${paiva})`);
            
                if (paivaElementti) {
                  const tapahtumaElementti = document.createElement("p");
                  tapahtumaElementti.textContent = tapahtumaKuvaus;
                  tapahtumaElementti.addEventListener("click", () => {
                    if (confirm("Haluatko varmasti poistaa tämän tapahtuman?")) {
                      tapahtumaElementti.remove();
                    }
                  });
                  paivaElementti.appendChild(tapahtumaElementti);
                } else {
                  alert("Virheellinen päivämäärä!");
                }
              } else {
                alert("Syötä sekä päivämäärä että kuvaus!");
              }
            }
            
            paivitaKalenteri();