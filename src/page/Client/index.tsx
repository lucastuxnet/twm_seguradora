import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { plans } from "../../helper/plans";
import api from "../../services/api";

type FormData = {
  name: string;
  email: string;
  planId: string;
};

interface ResponsePlans {
  id: number;
  name: string;
}

function Client() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [plansData, setPlansData] = useState<ResponsePlans[]>(plans);
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit((data) => {
    return console.log(data);
  });

  return (
    <div className="container-form">
      <h1>Cliente</h1>
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
        <label>
          Plano
          <select
            {...register("planId", { required: "Campo obrigatório!" })}
            disabled={loading}
          >
            <option selected hidden value=""></option>
            {plansData.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
          {errors.planId && <p role="alert">{errors.planId?.message}</p>}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Client;
