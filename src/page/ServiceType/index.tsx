import { useForm } from "react-hook-form";

type FormData = {
  name: string;
};

function ServiceType() {
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
      <h1>Tipo de Serviço</h1>
      <form onSubmit={onSubmit}>
        <label>
          Nome
          <input
            {...register("name", { required: "Campo obrigatório" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p role="alert">{errors.name?.message}</p>}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ServiceType;
