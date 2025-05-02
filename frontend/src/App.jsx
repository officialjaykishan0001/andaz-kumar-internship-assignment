import DoctorDescriptionCard from "./components/DoctorDescriptionCard";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div  >
      <Navbar />
      <div className="flex gap-6 px-4 py-6 ">
        <Filter />
        <div className="flex-1 max-h-[85vh] overflow-y-scroll">
          <div className="ml-2">
            <h1 className="text-xl font-bold">Consult General Physicians Online - Internal Medicine Specialists</h1>
            <span>(762 doctors)</span>
          </div>
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
          <DoctorDescriptionCard />
        </div>
      </div>


    </div>
  );
}

export default App;
