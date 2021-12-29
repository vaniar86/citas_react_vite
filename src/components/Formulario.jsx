import React, { useEffect, useState } from "react";
import Error from "./Error";
const initialValue = {
  name: "",
  owner: "",
  email: "",
  dateDischarge: "",
  symptom: "",
};

const Formulario = ({setPacientes, pacientes, dataSelected, setDataSelected}) => {
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState({});
  const [validateError, setValidateError] = useState(false)


  const validate = () => {
    let errors = {};
    if (formData.name === "") {
      errors.name = "El nombre de la Macota es Requerido";
    }
    if (formData.owner === "") {
      errors.owner = "El nombre del propietario es requerido";
    }
    if (formData.email === "") {
      errors.email = "El email de contacto es requerido";
    }
    if (formData.dateDischarge === "") {
      errors.dateDischarge = "La fecha de alta es requerida";
    }
    if (formData.symptom === "") {
      errors.symptom = "Es necesario agregar una descripción del síntoma";
    }
    return errors;
    };
    
  useEffect(() => {
      if (Object.keys(dataSelected).length > 0) {
          setFormData(dataSelected)
      }
    },[dataSelected])

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const day = Date.now().toString(36)

    return random + day
  }
  const handleSubmit = (ev) => {
      ev.preventDefault();
    setError(validate());
   
    if (Object.keys(validate()).length <= 0) {
        
      if (formData.id) {
        const pacientesActualizados = pacientes.map(paciente => paciente.id === formData.id ? formData : paciente)
        setPacientes(pacientesActualizados)
        setDataSelected({})
      } else {
        formData.id = generarId()
        setPacientes([
          ...pacientes,
          formData
        ])
      }         
        setError({})
        setFormData(initialValue)
      } else {
        setValidateError(true)
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mt-5 mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>
      <form className="bg-white shadow-lg rounded-lg py-10 px-8 mb-20">
      {validateError && <Error>"Debe completar todos los campos"</Error>}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name || ''}
            placeholder="Nombre de la Mascota"
            className="p-2 mt-2 border-2 w-full placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
          {error.name && <span className="text-red-400">{error.name}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            name="owner"
            id="owner"
            value={formData.owner || ''}
            placeholder="Nombre del Propietario"
            className="p-2 mt-2 border-2 w-full placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
          {error.owner && <span className="text-red-400">{error.owner}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email || ''}
            placeholder="Email Contacto Propietario"
            className="p-2 mt-2 border-2 w-full placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
          {error.email && <span className="text-red-400">{error.email}</span>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="dateDischarge"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            type="date"
            name="dateDischarge"
            id="dateDischarge"
            value={formData.dateDischarge || ''}
            className="p-2 mt-2 border-2 w-full placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
          {error.dateDischarge && (
            <span className="text-red-400">{error.dateDischarge}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            name="symptom"
            id="symptom"
            value={formData.symptom || ''}
            className="p-2 mt-2 border-2 w-full placeholder-gray-400 rounded-md"
            onChange={handleChange}
          />
          {error.symptom && (
            <span className="text-red-400">{error.symptom}</span>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-sm hover:bg-indigo-700 cursor-pointer transition-all"
          value={dataSelected.id ? "Modificar Paciente" : "Agregar Paciente"}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Formulario;
