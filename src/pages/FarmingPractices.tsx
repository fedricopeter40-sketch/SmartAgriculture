import React from "react";

const FarmingPractices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-green-200 p-8">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 shadow-lg rounded-lg mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-center">Mbinu Bora za Kilimo 🌱</h1>
        <p className="text-center mt-2 text-green-100">
          Mwongozo wa kitaalamu wa kuongeza tija, kulinda mazingira, na kuboresha maisha ya mkulima
        </p>
      </header>

      {/* Content */}
      <main className="space-y-8 text-gray-800">
        {/* Soil Management */}
        <section className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-bold text-green-700 mb-4">1. Usimamizi wa Udongo</h2>
          <p>
            Udongo ni msingi wa kilimo. Mbinu bora ni pamoja na:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Matumizi ya mbolea za asili (compost, samadi).</li>
            <li>Kupanda mazao mchanganyiko ili kuongeza rutuba.</li>
            <li>Kuzuia mmomonyoko kwa kupanda miti na nyasi kingo za mashamba.</li>
          </ul>
        </section>

        {/* Water Management */}
        <section className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-bold text-green-700 mb-4">2. Usimamizi wa Maji</h2>
          <p>
            Maji ni rasilimali muhimu. Mbinu bora ni:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Matumizi ya umwagiliaji wa matone (drip irrigation) kupunguza upotevu.</li>
            <li>Kuhifadhi maji ya mvua kwa mabwawa madogo.</li>
            <li>Kuepuka kupanda mazao yanayohitaji maji mengi kwenye maeneo kame.</li>
          </ul>
        </section>

        {/* Integrated Pest Management */}
        <section className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-bold text-green-700 mb-4">3. Udhibiti wa Wadudu (IPM)</h2>
          <p>
            Badala ya kutegemea dawa pekee, tumia mbinu mchanganyiko:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Kupanda mazao yanayokinzana na wadudu.</li>
            <li>Kutumia viumbe rafiki (mfano nyigu wanaokula wadudu).</li>
            <li>Kupunguza matumizi ya viuatilifu ili kulinda afya na mazingira.</li>
          </ul>
        </section>

        {/* Animal Welfare */}
        <section className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-bold text-green-700 mb-4">4. Ustawi wa Wanyama</h2>
          <p>
            Wanyama wa kilimo wanahitaji mazingira bora:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Chakula bora na maji safi.</li>
            <li>Makazi safi na yenye nafasi ya kutosha.</li>
            <li>Huduma za afya mara kwa mara.</li>
          </ul>
        </section>

        {/* Biodiversity */}
        <section className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-bold text-green-700 mb-4">5. Uhifadhi wa Bioanuwai</h2>
          <p>
            Kulinda mazingira na viumbe hai ni msingi wa kilimo endelevu:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Kupanda miti na vichaka kuzunguka mashamba.</li>
            <li>Kutunza maeneo ya asili yasiyolimwa.</li>
            <li>Kuepuka ukataji miti hovyo.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="bg-white p-6 rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Faida za Mbinu Bora</h2>
          <p>
            Kupitisha mbinu bora za kilimo kunaleta faida nyingi:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Kuongeza mavuno na kipato cha mkulima.</li>
            <li>Kulinda afya ya walaji kwa chakula salama.</li>
            <li>Kuhifadhi mazingira na kupunguza mabadiliko ya tabianchi.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4 mt-8 rounded-lg animate-fade-in">
        <p>&copy; {new Date().getFullYear()} SmartAgriculture. Empowering Farmers with Knowledge.</p>
      </footer>
    </div>
  );
};

export default FarmingPractices;