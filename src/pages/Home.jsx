import AppointmentList from "../components/AppointmentsList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/data";
import { useState } from "react";
const Home = () => {
  // console.log(appointmentData);

  const [appointments, setAppointments] = useState(appointmentData);
  console.log(appointments);
  return (
    <main className="container text-center">
      <h1 className="display-5 text-danger text-center">CLARUS HOSPITAL</h1>
      <Doctors apps={appointments} setApps={setAppointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  );
};

export default Home;
