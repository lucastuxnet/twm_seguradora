import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";

type FormData = {
  name: string;
  serviceTypesId: string;
  technicianId: string;
};

interface ResponseServicesOrder {
  serviceTypes: {
    id: number;
    name: string;
  }[];
  technicians: {
    id: number;
    name: string;
    email: string;
  }[];
}

function ServiceOrder() {
  const [resultData, setResultData] = useState<ResponseServicesOrder>();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    return console.log(data);
  });

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await api.get("/ordem-servico");

      setResultData(data);
    } finally {
      setLoading(false);
    }
  }, [resultData]);

  useEffect(() => {
    void fetchData();
  }, []);

  const serviceTypes = resultData?.serviceTypes ?? [];
  const technicians = resultData?.technicians ?? [];

  return (
    <div className="container-form">
      <h1>Ordem de Serviço</h1>
      <form onSubmit={onSubmit}>
        <label>
          Descrição
          <textarea
            {...register("name", { required: "Campo obrigatório!" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p role="alert">{errors.name?.message}</p>}
        </label>
        <label>
          Tipo de Serviço
          <select
            {...register("serviceTypesId", { required: "Campo obrigatório!" })}
            disabled={loading}
          >
            <option selected hidden value=""></option>
            {serviceTypes.map((serviceType) => (
              <option key={serviceType.id} value={serviceType.id}>
                {serviceType.name}
              </option>
            ))}
          </select>
          {errors.serviceTypesId && (
            <p role="alert">{errors.serviceTypesId?.message}</p>
          )}
        </label>
        <label>
          Tecnico
          <select
            {...register("technicianId", { required: "Campo obrigatório!" })}
            disabled={loading}
          >
            <option selected hidden value=""></option>
            {technicians.map((technician) => (
              <option key={technician.id} value={technician.id}>
                {technician.name}
              </option>
            ))}
          </select>
          {errors.technicianId && (
            <p role="alert">{errors.technicianId?.message}</p>
          )}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ServiceOrder;
