import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorDescriptionCard from "./components/DoctorDescriptionCard";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { getDoctors } from './features/doctors/doctorsSlice';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div  >
      <Navbar />
      <div className="flex gap-6 px-4 py-6 ">
        <Filter />
        <div className="flex-1 max-h-[85vh] overflow-y-scroll">
          <div className="ml-2">
            <h1 className="text-xl font-bold">Consult General Physicians Online - Internal Medicine Specialists</h1>
            <span>({data.length} doctors)</span>
          </div>
          <DoctorDescriptionCard data={data} />
        </div>
      </div>


    </div>
  );
}

export default App;
