const writeDisplayValue = (value) => {
  document.getElementById("displayValue").textContent = value;
};

const writeDisplayMemory = (value) => {
  document.getElementById("displayMemory").textContent = value;
};

const getDisplayValue = () =>
  document.getElementById("displayValue").textContent;

const getDisplayMemory = () =>
  document.getElementById("displayMemory").textContent;

const writeANumberOnTheDisplay = (number) => {
  let value = getDisplayValue();

  if (isDecimal(value)) {
      let decimalPlace = String(value).split('.')[1].length || 0
      if (decimalPlace == 1 && value[value.length - 1] == 0) {
          value = value.slice(0, -1)
      }
  }

  const newValue = Number(value + number);
  writeDisplayValue(newValue);
};

const writeAnOperator = (operator) => {
  const memory = getDisplayMemory();
  if (memory) calculate() 
  const valor = getDisplayValue();
  const newValue = valor+operator;
  writeDisplayValue(0);
  writeDisplayMemory(newValue);
};

const isDecimal = value => {
    value = String(value)
    return value.indexOf('.') > -1
}

const writeDecimalSeparator = () => {
    const value = getDisplayValue();
    if (isDecimal(value)) return
    let newValue = value + ".0"
    writeDisplayValue(newValue)
}

const calculate = () => {
    let value = getDisplayValue()
    const memory = getDisplayMemory()

    if (!memory || !value) return

    value = Number(value)

    const operator = memory[memory.length - 1]
    const memoryValue = Number(memory.replace(operator, ""))

    let result = 0
    if (operator === "+") result = memoryValue + value
    if (operator === "-") result = memoryValue - value
    if (operator === "*") result = memoryValue * value
    if (operator === "/") result = memoryValue / value

    writeDisplayValue(result);
    writeDisplayMemory("");
}

const clear = () => {
    writeDisplayValue(0);
    writeDisplayMemory("");
}

const cancelEntry = () => {
    writeDisplayValue(0);
}

const root = () => {
    let value = getDisplayValue()

    if (value == 0) return

    const result = Math.sqrt(value)
    writeDisplayValue(result)
}

const percentage = () => {
    let value = getDisplayValue()

    if (value == 0) return

    const result = Number(value) / 100
    writeDisplayValue(result)
    calculate()
}

export default {
  writeANumberOnTheDisplay,
  writeAnOperator,
  calculate,
  writeDecimalSeparator,
  clear,
  cancelEntry,
  root,
  percentage
};
