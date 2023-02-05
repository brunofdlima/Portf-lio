import { ComponentProjects } from "./extras/ComponentP";

const search = require("../pictures/weather.jpg");
const vaga = require("../pictures/vaga.jpg");
const list = require("../pictures/listagem.jpg");
const crono = require("../pictures/crono.jpg");
const calc = require("../pictures/calc.jpg");

export const Projects = (props: any) => {
  return (
    <section id={props.id} className="mx-auto max-w-[75rem] py-32 px-8">
      <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:ml-[13%]">
        <ComponentProjects
          title="Busca tempo"
          destination={search}
          description="Consumo da api - openweathermap."
          link="https://searchweather.vercel.app/"
        />
        <ComponentProjects
          title="Vaga estacionamento"
          destination={vaga}
          description="Gera o índice de uma das 'vagas' disponíveis."
          link="https://cadastroestacionamento.vercel.app/"
        />
        <ComponentProjects
          title="TO-DO List"
          destination={list}
          description="Cria uma listagem geral de afazeres."
          link="https://todolistreact-puce.vercel.app/"
        />
        <ComponentProjects
          title="Cronômetro"
          destination={crono}
          description="Cronômetro com funções de parar, iniciar e resetar."
          link="https://cronometro-nu.vercel.app/"
        />
        <ComponentProjects
          title="Calculadora"
          destination={calc}
          description="Calculadora não científica com funções padrão."
          link="https://calculadora-five-theta.vercel.app/"
        />
      </div>
    </section>
  );
};
