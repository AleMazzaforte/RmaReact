import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

// Determinar la URL de la API según la url
let url = 'https://rmareact-front.onrender.com'
 
if (window.location.hostname === 'localhost') {
  url = 'http://localhost:8080';
}




function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
      const response = await fetch(`${url}/login`, { 
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify(formData), 
      }); 
      const data = await response.json(); 
      if (response.ok) { 
        // Guardar el token JWT en el local storage
        localStorage.setItem('token', data.token);

        // Mostrar alerta de bienvenida con SweetAlert2
        Swal.fire({
          title: '¡Bienvenido!',
          text: `Hola, ${formData.nombre}. ¡Te has logueado exitosamente!`,
          icon: 'success',
          timer: 2000, // 2 segundos
          showConfirmButton: false,
        });
      } else {
        // Manejo de errores específicos
        let errorMessage = 'Ocurrió un error al iniciar sesión';
        if (data.error === 'Usuario no encontrado') {
          errorMessage = 'Usuario no encontrado';
        } else if (data.error === 'Contraseña incorrecta') {
          errorMessage = 'Contraseña incorrecta';
        }

        Swal.fire({
          title: 'Error',
          text: errorMessage,
          icon: 'error',
          timer: 2000, // 2 segundos
          showConfirmButton: false,
        });
      }
    } catch (error) { 
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error en la solicitud de login',
        icon: 'error',
        timer: 2000, // 2 segundos
        showConfirmButton: false,
      });
    } 
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border-t border-gray-200 mt-20">
      <div className="p-8 border-t border-gray-200">
        <h2>Login</h2>
        <form className="bg-white p-6 rounded-lg shadow-md border-t border-gray-200" onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label className="text-gray-700 text-sm font-bold mr-4" htmlFor="nombre">
              Nombre:
            </label>
            <input
              id="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6 flex items-center">
            <label className="text-gray-700 text-sm font-bold mr-4" htmlFor="password">
              Contraseña:
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;







