export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
    // task2 cannot be reassigned since it is declared as a constant
  }

  return [task, task2];
}

