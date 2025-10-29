import { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();

    const alturaM = parseFloat(altura) / 100;
    const imc = (parseFloat(peso) / (alturaM * alturaM)).toFixed(2);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau 1";
    else if (imc < 40) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";

    setResultado({ imc, classificacao });
  };

  return (
    <div className="container">
      <h2>Calculadora de IMC</h2>
      <form onSubmit={calcularIMC}>
        <label>Altura (cm)</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
          placeholder=" Ex: 153"
        />

        <label>Peso (kg)</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
          placeholder="Ex: 53"
        />

        <button type="submit">Calcular</button>
      </form>

      {resultado && (
        <div className="resultado">
          <h3>IMC: {resultado.imc}</h3>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
