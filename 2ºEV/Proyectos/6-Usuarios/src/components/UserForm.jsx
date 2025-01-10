import React from 'react';
import Input from './Input';
import Button from './Button';
import useFormulario from '../hooks/useFormulario';

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    email: '',
    lastname: '',
  });

  const [errores, setErrores] = React.useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.name.trim()) nuevosErrores.name = 'El nombre es obligatorio.';
    if (!formulario.lastname.trim()) nuevosErrores.lastname = 'El apellido es obligatorio.';
    if (!formulario.email.trim()) nuevosErrores.email = 'El correo es obligatorio.';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      submit(formulario);
      reset();
      setErrores({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
        placeholder="Nombre"
        
      />
      {errores.name && <p style={{ color: 'red' }}>{errores.name}</p>}
      
      <Input
        label="Apellido"
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
        placeholder="Apellido"
        
      />
      {errores.lastname && <p style={{ color: 'red' }}>{errores.lastname}</p>}
      
      <Input
        label="Correo"
        name="email"
        value={formulario.email}
        onChange={handleChange}
        placeholder="Correo"
        
      />
      {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}
      
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
