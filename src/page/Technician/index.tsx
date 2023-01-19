import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
};

function Technician() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    return console.log(data);
  });

  return (
    <div className="container-form">
      <h1>Tecnico</h1>
      <form onSubmit={onSubmit}>
        <label>
          Nome
          <input
            {...register("name", { required: "Campo obrigatório" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p role="alert">{errors.name?.message}</p>}
        </label>
        <label>
          Email
          <input
            {...register("email", {
              required: "Campo obrigatório",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email Inválido",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Technician;
