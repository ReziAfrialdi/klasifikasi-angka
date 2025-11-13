# Klasifikasi Angka

Program JavaScript sederhana untuk mengklasifikasikan angka berdasarkan nilainya.

## Deskripsi

Program ini menerima input angka dari user dan mengklasifikasikannya menjadi:

- **Nilai Satuan**: Angka kurang dari 10
- **Nilai Puluhan**: Angka kurang dari 100
- **Nilai Ratusan**: Angka kurang dari 1000
- **Nilai lainnya**: Angka 1000 ke atas

## Teknologi & Dependencies

- **Node.js**: Runtime environment untuk menjalankan JavaScript
- **prompt-sync**: Library untuk menerima input dari user di terminal

## Prasyarat

Pastikan sudah terinstall:

- Node.js (Download di: https://nodejs.org/)
- npm (sudah include saat install Node.js)

## Cara Install & Menjalankan

### 1. Clone Repository

```bash
git clone https://github.com/username/klasifikasi-angka.git
cd klasifikasi-angka
```

### 2. Install Dependencies

Program ini menggunakan library `prompt-sync` untuk input user. Install dengan:

```bash
npm install prompt-sync
```

Atau jika ada file `package.json`:

```bash
npm install
```

### 3. Jalankan Program

```bash
node klasifikasi_angka.js
```

## Contoh Penggunaan

```
Masukkan nilai nya: 5
${number} Itu adalah nilai satuan

Masukkan nilai nya: 50
${number} Itu adalah nilai puluhan

Masukkan nilai nya: 500
${number} Itu adalah nilai ratusan

Masukkan nilai nya: 5000
${number}
```

## Struktur File

```
klasifikasi-angka/
│
├── klasifikasi_angka.js    # File utama program
├── README.md                # Dokumentasi
├── package.json             # Dependencies (jika ada)
└── .gitignore              # File yang diabaikan Git
```

## Kode Program

Program menggunakan struktur `if-else if-else` untuk klasifikasi:

```javascript
const prompt = require("prompt-sync")();
const number = Number(prompt("Masukkan nilai nya: "));

if (number < 10) {
  console.log(`${number} Itu adalah nilai satuan`);
} else if (number < 100) {
  console.log(`${number} Itu adalah nilai puluhan`);
} else if (number < 1000) {
  console.log(`${number} Itu adalah nilai ratusan`);
} else {
  console.log(`${number}`);
}
```

## Troubleshooting

**Error: Cannot find module 'prompt-sync'**

- Solusi: Jalankan `npm install prompt-sync`

**Error: node is not recognized**

- Solusi: Install Node.js atau tambahkan Node.js ke PATH

## Lisensi

MIT License

## Author

Rezi Afrialdi - [GitHub](https://github.com/ReziAfrialdi)
