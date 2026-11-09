function hitungBMI() {
    // 1. Ambil nilai dari elemen input HTML
    let berat = parseFloat(document.getElementById("berat").value);
    let tinggiCm = parseFloat(document.getElementById("tinggi").value);
    let hasilDiv = document.getElementById("hasil");

    // 2. Validasi agar input tidak boleh kosong atau <= 0
    if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
        alert("Harap masukkan berat dan tinggi badan yang valid!");
        return;
    }

    // 3. Rumus BMI: Berat (kg) / (Tinggi (m) * Tinggi (m))
    let tinggiMeter = tinggiCm / 100;
    let bmi = berat / (tinggiMeter * tinggiMeter);
    let bmiFormatted = bmi.toFixed(1); // Pembulatan 1 angka di belakang koma

    // 4. Tentukan kategori kesehatan & warna latar kotak hasil
    let kategori = "";
    let warnaBg = "";
    let warnaTeks = "";

    if (bmi < 18.5) {
        kategori = "Kekurangan Berat Badan (Kurus)";
        warnaBg = "#e0f7fa";
        warnaTeks = "#006064";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = "Berat Badan Normal (Ideal)";
        warnaBg = "#e8f5e9";
        warnaTeks = "#1b5e20";
    } else if (bmi >= 25 && bmi <= 29.9) {
        kategori = "Kelebihan Berat Badan (Gemuk)";
        warnaBg = "#fffde7";
        warnaTeks = "#f57f17";
    } else {
        kategori = "Obesitas";
        warnaBg = "#ffebee";
        warnaTeks = "#b71c1c";
    }

    // 5. Tampilkan hasil ke dalam div #hasil di halaman HTML
    hasilDiv.style.display = "block";
    hasilDiv.style.backgroundColor = warnaBg;
    hasilDiv.style.color = warnaTeks;
    hasilDiv.innerHTML = `Skor BMI: <strong>${bmiFormatted}</strong><br><small>${kategori}</small>`;
}
function tukarTema() {
// Cukup switch kelas 'dark-mode' pada <body>
document.body.classList.toggle('dark-mode');
}