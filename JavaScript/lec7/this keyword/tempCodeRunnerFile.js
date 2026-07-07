const stue = {
  name: "prahamesh",
  age: 20,
  percntage: 90,
  eng: 90,
  math: 89,
  sci: 100,

  getavg() {
    let avg = (this.eng + this.math + this.sci) / 3;
    console.log(avg);
  },
};
stue.getavg();
