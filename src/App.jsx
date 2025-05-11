export default function App() {
  const apiKey = "b6215e66d2c1f8a5a4a6da96b0aadc9b";
  //const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeBuscada}&appid=${apiKey}&units=metric&lang=pt_br`
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
          Verifique o Clima
        </h1>
        <form className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Buscar
          </button>
        </form>
        {/* Resultado da API será mostrado aqui futuramente */}
        <div className="text-center text-gray-600 italic">
          Insira uma cidade para ver o clima atual.
        </div>
      </div>
    </div>
  );
}
