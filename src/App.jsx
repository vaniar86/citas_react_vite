import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from "react";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [dataSelected, setDataSelected] = useState({})

  useEffect(() => {
    const getOfLs = () => {
      const data = JSON.parse(localStorage.getItem('pacientes')) ?? []

      setPacientes(data)
    }
    getOfLs()
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const deletePaciente = (id) => {
    console.log(id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          dataSelected={dataSelected}
          setDataSelected={setDataSelected}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setDataSelected={setDataSelected}
          deletePaciente={deletePaciente}
          
        />
      </div>
    </div>
  );
};

export default App;
