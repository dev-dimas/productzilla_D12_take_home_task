class Shape {
  constructor(numSides = 0, sideLengths = []) {
    this.numSides = numSides;
    this.sideLengths = sideLengths;
  }

  getNumSides() {
    return this.numSides;
  }

  getSideLength() {
    return this.sideLengths;
  }

  getPerimeter() {
    let perimeter = 0;
    for (let number of this.sideLengths) {
      perimeter += number;
    }
    return perimeter;
  }
}

class Triangle extends Shape {
  constructor(firstSide = 0, secondSide = 0, thirdSide = 0) {
    super(3, [firstSide, secondSide, thirdSide]);
  }

  getArea() {
    const [firstSide, secondSide, thirdSide] = this.sideLengths;
    const semiperimeter = (firstSide + secondSide + thirdSide) / 2;
    return Math.sqrt(
      semiperimeter *
        (semiperimeter - firstSide) *
        (semiperimeter - secondSide) *
        (semiperimeter - thirdSide)
    );
  }
}

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super(4, [length, width, length, width]);
  }

  getArea() {
    const [length, width] = this.sideLengths;
    return length * width;
  }
}

class Circle extends Shape {
  constructor(radius = 0) {
    super(0, [radius]);
  }

  getArea() {
    const [radius] = this.sideLengths;
    return Math.PI * radius ** 2;
  }

  getPerimeter() {
    const [radius] = this.sideLengths;
    return 2 * Math.PI * radius;
  }
}

console.log('=== Triangle ===');
const bentukSegiTiga = new Triangle(3, 4, 5);
console.log('Jumlah sisi segi tiga :', bentukSegiTiga.getNumSides());
console.log('Panjang sisi segi tiga :', bentukSegiTiga.getSideLength());
console.log('Keliling segi tiga :', bentukSegiTiga.getPerimeter());
console.log('Luas segi tiga :', bentukSegiTiga.getArea());

console.log('\n=== Rectangle ===');
const bentukSegiEmpat = new Rectangle(10, 20);
console.log('Jumlah sisi segi empat :', bentukSegiEmpat.getNumSides());
console.log('Panjang sisi segi empat :', bentukSegiEmpat.getSideLength());
console.log('Keliling segi empat :', bentukSegiEmpat.getPerimeter());
console.log('Luas segi empat :', bentukSegiEmpat.getArea());

console.log('\n=== Circle ===');
const bentukLingkaran = new Circle(5);
console.log('Jumlah sisi lingkaran :', bentukLingkaran.getNumSides());
console.log('Radius lingkaran :', bentukLingkaran.getSideLength());
console.log('Keliling lingkaran :', bentukLingkaran.getPerimeter());
console.log('Luas lingkaran :', bentukLingkaran.getArea());

// ===================================================

class Person {
  constructor(nama = '', NIK = 0, jenisKelamin = '') {
    this.nama = nama;
    this.NIK = NIK;
    this.jenisKelamin = jenisKelamin;
  }

  setNama(nama) {
    this.nama = nama;
  }

  setNIK(NIK) {
    this.NIK = NIK;
  }

  setJenisKelamin(jenisKelamin) {
    this.jenisKelamin = jenisKelamin;
  }

  getNama() {
    return this.nama;
  }

  getNIK() {
    return this.NIK;
  }

  getJenisKelamin() {
    return this.jenisKelamin;
  }
}

class Employee extends Person {
  constructor(
    nama = '',
    NIK = 0,
    jenisKelamin = '',
    pekerjaan = '',
    salary = 0
  ) {
    super(nama, NIK, jenisKelamin);
    this.pekerjaan = pekerjaan;
    this.salary = salary;
  }

  setPekerjaan(pekerjaan) {
    this.pekerjaan = pekerjaan;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getPekerjaan() {
    return this.pekerjaan;
  }

  getSalary() {
    return this.salary;
  }
}

class Student extends Person {
  constructor(
    nama = '',
    NIK = 0,
    jenisKelamin = '',
    kampus = '',
    jurusan = ''
  ) {
    super(nama, NIK, jenisKelamin);
    this.kampus = kampus;
    this.jurusan = jurusan;
  }

  setKampus(kampus) {
    this.kampus = kampus;
  }

  setJurusan(jurusan) {
    this.jurusan = jurusan;
  }

  getKampus() {
    return this.kampus;
  }

  getJurusan() {
    return this.jurusan;
  }
}

console.log('\n=== Employe ===');
const elonMusk = new Employee(
  'Elon Reeve Musk',
  4002385278395367,
  'Pria',
  'Pengusaha',
  5_000_000_000
);
console.log('Nama :', elonMusk.getNama());
console.log('NIK :', elonMusk.getNIK());
console.log('Jenis Kelamin :', elonMusk.getJenisKelamin());
console.log('Pekerjaan :', elonMusk.getPekerjaan());
console.log('Gaji :', elonMusk.getSalary());

console.log('\n=== Student ===');
const billGates = new Student(
  'William Henry Gates',
  2053965521221342,
  'Pria',
  'Universitas Harvard',
  'Bisnis Informatika'
);
console.log('Nama :', billGates.getNama());
console.log('NIK :', billGates.getNIK());
console.log('Jenis Kelamin :', billGates.getJenisKelamin());
console.log('Pekerjaan :', billGates.getKampus());
console.log('Gaji :', billGates.getJurusan());
