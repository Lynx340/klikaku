function mintaNomor() {
    const nomor = prompt("Masukin nomor WA kamu di sini ya 😊 ");
  
    if (nomor) {
      // Simpan secara rahasia di localStorage
      localStorage.setItem("nomorWA_rahasia", nomor);
      alert("Makasih ya! 🌹");
  
      // Tidak tampilkan nomor ke layar atau console
    } else {
      alert("Waduh.. NT ternyata 😅");
    }
  }
  
  // Fungsi pribadi untuk kamu (akses dari console browser)
  function ambilNomorRahasia() {
    const nomor = localStorage.getItem("nomorWA_rahasia");
    if (nomor) {
      console.log("Nomor WA rahasia:", nomor);
    } else {
      console.log("Belum ada nomor yang disimpan.");
    }
  }
  
  // Mawar jatuh random
  function buatMawarJatuh() {
    const flower = document.createElement("div");
    flower.classList.add("rose");
    flower.textContent = "🌹";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 3 + Math.random() * 3 + "s";
    flower.style.fontSize = Math.random() * 20 + 20 + "px";
  
    document.body.appendChild(flower);
  
    setTimeout(() => {
      flower.remove();
    }, 6000);
  }
  
  setInterval(buatMawarJatuh, 400);
  