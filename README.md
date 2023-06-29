# Front-end Developer Internship Practical Tasks

## Pre-assessment Test / FE-PT-01-1

**Type**: Internship  
**Basic Requirements**: HTML, CSS, JS, jQuery, AJAX

**DEADLINE PENGERJAAN SEMUA SOAL**: 72 Jam (3 Hari)

**Petunjuk Pengerjaan**
1. Baca soal dengan baik
2. Lakukan pengerjaan dengan membuat kode sesuai petunjuk soal yang diberikan
3. Hasil kode pada semua soal dimasukkan ke dalam 1 folder project dan diupload/push ke dalam Github Repository (Public)
4. Kirimkan link Github Repository pada Google Form yang telah disediakan
5. Tambahkan readme.md untuk petunjuk running project, hasil clone repository wajib bisa dirun untuk dilakukan audit

**Contoh Format Nama Github Repository**
github.com/account-name/cmlabs-frontend-internship-test

**API Endpoint**

| Name             | URL                                                     | Type     |
| ---------------- | ------------------------------------------------------- | -------- |
| List of Categories | https://www.themealdb.com/api/json/v1/1/categories.php   | Required |
| Filter Category    | www.themealdb.com/api/json/v1/1/filter.php?c={category-name} | Required |
| Detail Meal       | www.themealdb.com/api/json/v1/1/lookup.php?i={meal-id}    | Optional |

**Tasks**

Silakan buat halaman dan tampilkan data berdasarkan API di atas.

**Halaman Category**
**Requirements**:
- Berisikan list kategori berdasarkan endpoint List of Categories
- Ketika list kategori dipilih, halaman akan redirect menuju halaman Category Detail
- Komponen: List kategori dengan gambar

**Halaman Category Detail**
**Requirements**:
- Parameter → category-name
- Berisikan list data meal berdasarkan kategori yang dipilih, endpoint dari Filter Category
- Jika data meal dipilih, halaman akan redirect menuju halaman Meals Detail
- Komponen: List meal dengan gambar

**Meals Detail** (Optional, jika dikerjakan akan menjadi nilai lebih)
**Requirements**:
- Parameter → meal-id
- Tamplikan detail meal berdasarkan list yang dipilih
- Endpoint menggunakan Detail Meal
- Komponen: Gambar Meal, Judul/Nama Meal, Deskripsi/Tutorial, Recipe, Youtube Embedded

**Requirements**
- HTML
- CSS, boleh pakai bootstrap / tailwind
- Javascript, jQuery
- Pemanggilan dan pemrosesan API: AJAX, Axios, dll.

Silakan gunakan kreativitas Anda untuk membuat dan menyusun halaman di atas (kualitas tampilan akan menjadi nilai lebih).

Halaman Wajib Responsive
