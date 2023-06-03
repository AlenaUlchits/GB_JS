temperature();

function temperature(){
  const tempCel = +prompt("Enter the temperature in Celsius degree");
  const tempFar = (9 / 5 * tempCel) + 32;
  alert(`Celsius: ${tempCel}, Fahrenheit: ${tempFar.toFixed(1)}`);
}