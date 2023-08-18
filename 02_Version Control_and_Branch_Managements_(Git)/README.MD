# Summary Version Control and Branch Managements (Git)

Versioning adalah dilakukan untuk mengatur versi dari source program

GIT adalah Version Control System yang digunakan untuk melakukan versioning secara bersama atau berkolaborasi. GIT akan bekerja secara terdistribusi, sehingga setiap orang dapat mengedit kode meskipun server down tetap dapar memiliki backup secara local

Github adalah Aplikasi versioning yang menggunakan git di dalamnya

Setiap perubahan yang dilakukan akan dibungkus dengan sebuah indetitas. Maka ketika perubahan tersebut akan disimpan disebut dengan commmit

Menginstall Git dilakukan pada [Link Berikut Ini](https://git-scm.com/ )

``` git --version```
melalui CMD perintah diatas digunakan untuk mengecek apakah git sudah terinstall

` git config --global "username" `
`git config --global "email" `
melalui CMD juga digunakan untuk melakukan setting user pertama kali ke GIT

` git add <directory> ` digunakan untuk menambahkan file ke staging area atau seluruh folder yang telah diubah

Message yang ditaruh di commit harus menjelaskan perubahan apa yang dilakukan sedetail mungkin tanpa menimbulkan ambigu

Branches adalah cara untuk membuat cabang tanpa mengganggu source code pada main program

Merge adalah cara untuk menggabungkan branch

Pull Request adalah cara untuk berkontribus pada repository

Workflow Collaboration adalah cara yang dilakukan dengan tidak menyimpan semua perubahan pada branch master. Yang disarankan adalah membuat branch cabang developer yang akan menyimpan sementara source code dari branch feature sebelum di merge pada branch utama.

beberapa command yang digunakan pad GIT

> `git log --oneline` digunakan untuk menampilkan semua commit yang sudah dilakukan

> `git checkout "kode" ` digunakan untuk pindah ke titik commit tertentu

> `git pull origin` digunakan untuk mengambil versi asli dari repository GitHub

> `git push origin` digunakan untuk mengirimkan file local ke repository GitHub

> `git branch --list` digunakan untuk mengecek branch apa saja yang ada

> `git branch <nama_branch>` digunakan untuk membuat branch baru

> `git merge <nama_branch>` digunakan untuk melakukan merge atau memasukkan perubahan pada branch. ketentuannya adalah untuk melakukan merge, harus pindah/checkout ke branch tujuan merge

Conflict terjadi ketika perubahan di beda branch terjadi di line yang sama

Github desktop digunakan untuk memudahkan orang yang baru belajar GIT tanpa harus menghafal CLI