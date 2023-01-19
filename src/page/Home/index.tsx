import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { plans } from "../../helper/plans";
import api from "../../services/api";

type FormData = {
  name: string;
  email: string;
  planId: string;
};

function Home() {
  return (
    <div>
      <h1>TWM Seguros</h1>
      <h2>Planos</h2>
      <div className="wrapper-plan">
        {plans.map((plan) => (
          <div key={plan.id} className="container-form">
            <p>{plan.name}</p>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
