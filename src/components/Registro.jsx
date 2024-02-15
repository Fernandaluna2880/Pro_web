import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import Imagen from './atomos/Imagen';

const clientId = 'YOUR_CLIENT_ID';
const Registro = () => {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [googleLoginData, setGoogleLoginData] = useState('');

  const handleGoogleLogin = (response) => {
    console.log('Google Login Success:', response);
    setGoogleLoginData(response.profileObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Correo:', correo);
    console.log('Contraseña:', contrasena);

    if (googleLoginData) {

      console.log('Registro con Google:', googleLoginData);
    }
  };

  return (
    <div>


      <form onSubmit={handleSubmit}>
        <Imagen ruta ={"https://i.imgur.com/Xi9ZWTN.png"}></Imagen>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />

        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        <label htmlFor="confirmar-contrasena">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmar-contrasena"
          name="confirmar-contrasena"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />
        
        <GoogleLogin
          clientId={clientId}
          buttonText="Regístrate con Google"
          onSuccess={handleGoogleLogin}
          onFailure={(response) => console.log('Google Login Failure:', response)}
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
