import { AliveCell, DeadCell, Neighbours } from "./Hiker";

interface logParams {
  scenario: string,
  expected: string,
  result: AliveCell | DeadCell
}

function log({ scenario, expected, result} : logParams ) {console.log(`Scenario: ${scenario}. \nExpected result: ${expected}. Current result: ${result.constructor.name}.`)}

describe('Game of Life', () => {
  test('Live cell with fewer than two live neighbours die', () => {
    const aliveCell = new AliveCell();
    const neighbours = new Neighbours([new AliveCell()], []);
  
    const nextStatus = aliveCell.nextState(neighbours)
    log({
      scenario: "Live cell with fewer than two live neighbours dies",
      expected: "DeadCell",
      result: nextStatus
    });
    expect(nextStatus).toBeInstanceOf(DeadCell);
  });

  test('Live cell with two or three live neighbours lives', () => {
    const aliveCell = new AliveCell();
    const neighboursWithTwo = new Neighbours([new AliveCell(), new AliveCell()], []);
    const neighboursWithThree = new Neighbours([new AliveCell(), new AliveCell(), new AliveCell()], []);

    let nextStatus = aliveCell.nextState(neighboursWithTwo);
    let nextSpecialStatus = aliveCell.nextState(neighboursWithThree);

    log({
      scenario: "Live cell with two live neighbours lives",
      expected: "AliveCell",
      result: nextStatus
    });
    expect(nextStatus).toBeInstanceOf(AliveCell);


    log({
      scenario: "Live cell with three live neighbours lives",
      expected: "AliveCell",
      result: nextSpecialStatus
    });
    expect(nextStatus).toBeInstanceOf(AliveCell);
  });

  test('Live cell with more than three live neighbours dies', () => {
    const aliveCell = new AliveCell();
    const neighbours = new Neighbours([new AliveCell(), new AliveCell(), new AliveCell(), new AliveCell()], []);

    const nextStatus = aliveCell.nextState(neighbours);

    log({
      scenario: "Live cell with more than three live neighbours dies",
      expected: "DeadCell",
      result: nextStatus
    });
    expect(nextStatus).toBeInstanceOf(DeadCell);
  });

  test('Dead cell with exactly three live neighbours becomes alive', () => {
    const deadCell = new DeadCell();
    const neighbours = new Neighbours([new AliveCell(), new AliveCell(), new AliveCell()], []);

    const nextStatus = deadCell.nextState(neighbours);
    console.log('next', nextStatus)

    log({
      scenario: "Dead cell with exactly three live neighbours becomes alive",
      expected: "AliveCell",
      result: nextStatus
    });
    expect(nextStatus).toBeInstanceOf(AliveCell);
  });
  
})
