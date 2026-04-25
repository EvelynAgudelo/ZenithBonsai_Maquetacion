import { useState } from "react";

function Reservas() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    experiencia: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // ✔ para la nota

    localStorage.setItem("reserva", JSON.stringify(formData)); // ✔ opcional

    alert("Datos enviados");
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Reserva un Taller</h1>

      <p>
        Déjanos tus datos y nos pondremos en contacto para agendar tu
        primera sesión.
      </p>

      <form onSubmit={handleSubmit}>

        <div>
            <label htmlFor="nombre">Nombre Completo</label>
            <input
            type="text"
            name="nombre"
            placeholder="Ej: Carlos Pérez"
            onChange={handleChange}
        />
        </div>

        <div>
            <label htmlFor="correo">Correo Electrónico</label>
            <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            onChange={handleChange}
        />
        </div>

        <div>
            <label htmlFor="experiencia">Nivel de experiencia</label>
            <select name="experiencia" onChange={handleChange}>
            <option value="">Nivel de experiencia</option>
            <option value="principiante">Principiante (nunca he tenido un Bonsai)</option>
            <option value="intermedio">Intermedio (tengo algunos arboles)</option>
            <option value="avanzado">Avanzado (busco perfeccionar tecnicas)</option>
        </select>
        </div>

        <div>
            <label htmlFor="mensaje">Mensaje (opcional)</label>
            <input
            type="text"
            name="mensaje"
            placeholder="Que te gustaria aprender?"
            onChange={handleChange}
            />
        </div>

        <button type="submit">Enviar Solicitud</button>
      </form>
    </section>
  );
}

export default Reservas;