import React from "react";

const Paciente = ({ paciente, setDataSelected, deletePaciente }) => {
  const { name, owner, email, dateDischarge, symptom, id } = paciente
  
  const handleEliminar = () => {
    const respuesta = confirm("¿Está seguro que desea eliminar este registro?")

    if (respuesta) {
      deletePaciente(id)
    }
  }
  return (
    <div className="bg-white shadow-lg rounded-lg py-10 px-8 mb-20 mx-5 my-10">
      <p className="font-bold m-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case m-3"> {name}</span>
      </p>
      <p className="font-bold m-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case m-3"> {owner}</span>
      </p>
      <p className="font-bold m-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case m-3">{email}</span>
      </p>
      <p className="font-bold m-3 text-gray-700 uppercase">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case m-3"> {dateDischarge}</span>
      </p>
      <p className="font-bold m-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case m-3">
          {" "}
          {symptom}
        </span>
      </p>
      <div>
        <button type='button' className="py-2 px-10  mx-2 text-white text-center bg-indigo-600  font-bold uppercase hover:bg-indigo-700 rounded-lg " onClick={()=>setDataSelected(paciente)}>Editar</button>
        <button type='button' className="py-2 px-10 mx-2 text-white text-center bg-red-600 font-bold uppercase hover:bg-red-700  rounded-lg" onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
