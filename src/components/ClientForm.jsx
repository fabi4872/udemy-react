import { useEffect } from 'react';
import { useForm } from "../hooks";
import { Input, Button, ErrorMessage } from './';

export const ClientForm = () => {
  const { nombres, apellidos, dni, telefono, email, onChangeForm } = useForm({
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    email: ''
  });

  useEffect(() => {  
    return () => {
      
    }
  }, []);

  return (
    <>
      <Input type="text" name="nombres" value={ nombres } onChangeForm={ onChangeForm } placeholder="Nombres" autoComplete="off" />

      {
        ( nombres === 'Fabian' ) ? <ErrorMessage errorMessage="Campo inválido" /> : <ErrorMessage errorMessage="" />
      }
      

      <Input type="text" name="apellidos" value={ apellidos } onChangeForm={ onChangeForm } placeholder="Apellidos" autoComplete="off" />
      <Input type="text" name="dni" value={ dni } onChangeForm={ onChangeForm } placeholder="DNI" autoComplete="off" />
      <Input type="tel" name="telefono" value={ telefono } onChangeForm={ onChangeForm } placeholder="Teléfono" autoComplete="off" />
      <Input type="email" name="email" value={ email } onChangeForm={ onChangeForm } placeholder="Email" autoComplete="off" />
      <Button type="button" className="btn btn-primary mt-2" nombreBoton="Siguiente" />
    </>
  )
}
