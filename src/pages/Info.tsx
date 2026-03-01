import React from "react";

const Info: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-green-200">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Taarifa za Kilimo 🌱</h1>
        <p className="text-center mt-2 text-green-100">
          Habari, mbinu bora, na ushauri kwa wakulima wa Tanzania
        </p>
      </header>

      {/* Content */}
      <main className="p-8 space-y-12">
        {/* Habari za Kilimo */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Habari za Kilimo</h2>
          <p className="text-gray-700 leading-relaxed">
            Sekta ya kilimo inachangia zaidi ya 65% ya ajira nchini Tanzania. 
            Kwa sasa, serikali na wadau mbalimbali wanahamasisha matumizi ya teknolojia 
            za kidigitali ili kuongeza tija na kupunguza gharama za uzalishaji. 
            Miongoni mwa maendeleo ni matumizi ya mifumo ya kidigitali kufuatilia hali ya hewa, 
            bei za mazao sokoni, na taarifa za ugonjwa wa mimea.
          </p>
        </section>

        {/* Mbinu Bora za Kilimo */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Mbinu Bora za Kilimo</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Matumizi ya mbegu bora na zinazostahimili ukame.</li>
            <li>Umwagiliaji wa kisasa (drip irrigation) kupunguza matumizi ya maji.</li>
            <li>Kupanda mazao mseto ili kuongeza kipato na kupunguza hatari.</li>
            <li>Kutumia mbolea za asili na kupunguza kemikali.</li>
            <li>Kufuatilia hali ya hewa kwa kutumia mifumo ya kidigitali.</li>
          </ul>
        </section>

        {/* Soko la Mazao */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Soko la Mazao</h2>
          <p className="text-gray-700 leading-relaxed">
            Bei za mazao hubadilika kulingana na msimu na mahitaji ya soko. 
            Kwa mfano, mahindi na mpunga hupanda bei wakati wa kiangazi. 
            SmartAgriculture inaleta taarifa za bei sokoni kwa wakati halisi, 
            ikiwasaidia wakulima kufanya maamuzi bora ya kuuza au kuhifadhi mazao yao.
          </p>
        </section>

        {/* Mashauri ya Wataalamu */}
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Mashauri ya Wataalamu</h2>
          <p className="text-gray-700 leading-relaxed">
            Wataalamu wa kilimo wanashauri wakulima kuzingatia mabadiliko ya tabianchi 
            kwa kupanda mazao yanayostahimili ukame, kutumia teknolojia za kuhifadhi maji, 
            na kujiunga na vikundi vya ushirika ili kupata nguvu ya pamoja sokoni. 
            Pia wanashauri wakulima kutumia mifumo ya kidigitali kupata taarifa sahihi 
            na kuunganishwa na masoko ya kitaifa na kimataifa.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} SmartAgriculture. Taarifa za Kilimo kwa Wakulima.</p>
      </footer>
    </div>
  );
};

export default Info;