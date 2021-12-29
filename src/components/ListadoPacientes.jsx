import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setDataSelected, deletePaciente }) => {
  // const handleEdit = (value) => {
  //   console.log(value)
  //   let data = pacientes.find(paciente => paciente.id === value.id)
  //   setDataSelected(data)
  // }
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-3xl">
            Listado de Pacientes
          </h2>
          <p className="text-lg text-center mt-5 mb-10">
            Admistra tus{" "}
            <span className="text-indigo-600 font-bold">
              Pacientes y Turnos
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setDataSelected={setDataSelected} deletePaciente={deletePaciente}/>
          ))}
        </>
      ) :
        <h2 className="text-center font-black text-1xl">
          No hay pacientes para mostrar
        </h2>
      }
    </div>
  );
};

export default ListadoPacientes;
