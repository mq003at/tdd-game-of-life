export class AliveCell {
  nextState(neighbours: Neighbours) : (AliveCell | DeadCell) {
    if (neighbours.getAliveCells() === 3 || neighbours.getAliveCells() === 2) {return new AliveCell();}
    return new DeadCell();
  }
}

export class DeadCell {
  nextState(neighbours: Neighbours) : (AliveCell | DeadCell) {
    if (neighbours.getAliveCells() === 3) {return new AliveCell();}
    return new DeadCell();
  }
}

export class Neighbours {
  private aliveCells: AliveCell[];
  private deadCells: DeadCell[];

  constructor(aliveCells: AliveCell[], deadCells: DeadCell[]) {
    this.aliveCells = aliveCells;
    this.deadCells = deadCells;
  }

  getAliveCells() : number {
    console.log(this.aliveCells)
    return this.aliveCells.length;
  }

  getDeadCells() : number {
    return this.deadCells.length;
  }
}
