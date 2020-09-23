import React from "react";
import { useForm } from "../../hooks/useForm";
import mail from "../../img/mail.svg";
export const ContactoScreen = () => {
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    email: "",
    texto: "",
  });

  const { nombre, email, texto } = formValues;

  return (
    <>
      <div className="formulario">
        <h1 className="contacto__title">Contacto</h1>
        <div className="contacto__container">
          <img src={mail} alt={mail} className="contacto__imagen" />
          <form className="contacto__formulario container">
            <div className="contacto__info">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                className="contacto__persona"
                value={nombre}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="contacto__email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              className="contacto__mensaje"
              name="texto"
              value={texto}
              onChange={handleInputChange}
              placeholder="Mensaje"
            ></textarea>

            <button type="submit" className="boton contacto__boton-formulario">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
