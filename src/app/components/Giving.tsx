import { Heart } from "lucide-react";

export function Giving() {
  return (
    <section id="donaciones" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Heart size={32} />
          </div>
        </div>
        <h2 className="mb-6 text-4xl md:text-5xl font-bold">Diezmos y Ofrendas</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          "Cada uno debe dar según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría." - 2 Corintios 9:7
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Card Transferencia */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Transferencia Bancaria</h3>
            <p className="text-gray-600 mb-6">Puedes hacer tus aportes directamente a nuestra cuenta bancaria.</p>
            <div className="bg-gray-50 p-4 rounded-lg text-left mb-6">
              <p className="text-sm text-gray-500">Banco:</p>
              <p className="font-semibold mb-2">Banco de Ejemplo S.A.</p>
              <p className="text-sm text-gray-500">Número de Cuenta:</p>
              <p className="font-semibold">0123-4567-8901</p>
            </div>
          </div>

          {/* Card Pago Digital */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Donación en Línea</h3>
            <p className="text-gray-600 mb-6">Aporta de manera segura usando tu tarjeta de crédito o PayPal.</p>
            <button className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors mb-4">
              Donar con Tarjeta
            </button>
            <button className="w-full py-3 px-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-medium transition-colors">
              Donar con PayPal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
