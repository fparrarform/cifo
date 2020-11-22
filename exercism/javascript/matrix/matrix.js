
export class Matrix {
  constructor(input) {
   this.matrix = input.split('\n')
   this.rows = this.matrix.map(e=>e.split(" ")).map(e=>e.map(e=>parseInt(e)))
   this.columns = this.rows[0].map((_,i)=> this.rows.map(row => row[i]));
  }
}
