function converterTemperatura(temperatura, escalaOriginal) {
    if (escalaOriginal === "C") {
      return (temperatura * 9/5) + 32;
    } else if (escalaOriginal === "F") {
      return (temperatura - 32) * (5/9);
    } else {
      return "Escala de temperatura inválida";
    }
  }
  let escolha = prompt("Escolha o tipo de conversão: de Celsius para Fahrenheit (digite 'C') ou de Fahrenheit para Celsius (digite 'F'):");
  let temperaturaOriginal = parseFloat(prompt("Digite a temperatura original:"));
  
  
  if (escolha === "C") {
    alert("A temperatura convertida é: " + converterTemperatura(temperaturaOriginal, "C") + " °F");
  } else if (escolha === "F") {
    alert("A temperatura convertida é: " + converterTemperatura(temperaturaOriginal, "F") + " °C");
  } else {
    alert("Escolha inválida");
  }