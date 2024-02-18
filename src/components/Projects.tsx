import { ComponentProjects } from "./extras/ComponentP";

const search = require("../pictures/weather.png");
const vaga = require("../pictures/vaga.jpg");
const list = require("../pictures/listagem.jpg");
const imoneyup = require("../pictures/dashboardimoneyup.jpg");
const buscacep = require("../pictures/buscacep.png");

export const Projects = (props: any) => {
  return (
    <section id={props.id} className="mx-auto max-w-[75rem] py-32 px-8">
      <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[768px]:grid-cols-1 max-[375px]:ml-2 max-[425px]:ml-8">
      <ComponentProjects
          title="Imoney-up"
          destination={imoneyup}
          description="Sistema autoral completo para controle de finanças"
          link="https://imoneyup.vercel.app/"
          linkrepo="https://github.com/brunofdlima/Imoneyup"
        />
        <ComponentProjects
          title="Busca tempo"
          destination={search}
          description="Consumo da api - openweathermap."
          link="https://searchweather.vercel.app/"
          linkrepo="https://github.com/brunofdlima/searchweather"
        />
        <ComponentProjects
          title="Vaga estacionamento"
          destination={vaga}
          description="Gera o índice de uma das 'vagas' disponíveis."
          link="https://cadastroestacionamento.vercel.app/"
          linkrepo="https://github.com/brunofdlima/cadastroEstacionamento"
        />
        <ComponentProjects
          title="Busca cep"
          destination={buscacep}
          description="Consumo da api - cep.awesomeapi."
          link="https://busca-cep-tau.vercel.app/"
          linkrepo="https://github.com/brunofdlima/busca-cep"
        />
        <ComponentProjects
          title="TO-DO List"
          destination={list}
          description="Cria uma listagem geral sobre qualquer tema."
          link="https://todolistreact-puce.vercel.app/"
          linkrepo="https://github.com/brunofdlima/Listagem-React"
        />
      </div>
    </section>
  );
};
