// src/App.jsx
import { useEffect, useState } from "react";

export default function App() {
  const [cidade, setCidade] = useState("");
  const [dadosClima, setDadosClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarClima = async (cidade) => {
    if (!cidade.trim()) return;

    setCarregando(true);
    setErro(null);
    setDadosClima(null);

    try {
      const apiKey = "b6215e66d2c1f8a5a4a6da96b0aadc9b"; // Substitua pela sua chave da API do OpenWeatherMap
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      if (!res.ok) throw new Error("Cidade não encontrada");

      const data = await res.json();
      setDadosClima(data);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    buscarClima(cidade)
  }

  useEffect(() => {
    buscarClima("São José dos Campos")  
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
          Verifique o Clima
        </h1>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Buscar
          </button>
        </form>

        {carregando && (
          <div className="text-center text-blue-500 font-medium">Carregando...</div>
        )}

        {erro && (
          <div className="text-center text-red-500 font-medium">{erro}</div>
        )}

        {dadosClima && (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {dadosClima.name}, {dadosClima.sys.country}
            </h2>
            <p className="text-3xl font-bold text-blue-600">
              {Math.round(dadosClima.main.temp)}°C
            </p>
            <p className="capitalize text-gray-600">
              {dadosClima.weather[0].description}
            </p>
          </div>
        )}

        {!dadosClima && !carregando && !erro && (
          <div className="text-center text-gray-600 italic">
            Insira uma cidade para ver o clima atual.
          </div>
        )}
      </div>
    </div>
  );
}
