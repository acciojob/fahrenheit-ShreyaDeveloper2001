function toFahrenheit(celsius) {
 // Write your code here
	/ Check if the input temperature is within the valid range
  if (celsius < -273.15 || celsius > 1.8e9) {
    return "Invalid input";
  }

  // Calculate the temperature in Fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;

  // Return the result with two decimal points of precision
  return fahrenheit.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
