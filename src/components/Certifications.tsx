import { ComponentCertifications } from "./extras/ComponentCertifications";
import { ComponentCertifications2 } from "./extras/ComponentCertifications2";

export const Certifications = (props: any) => {
  return (
    <section id={props.id} className="mx-auto max-w-[75rem] py-36 px-8 flex justify-center max-[75rem]:flex-col">
        <div>
            <ComponentCertifications
              initial="07/2018 -"
              final="Atual"
              name="Ciências da computação - Bacharel"
              local="Unigrande - Brasil"
            />
            <ComponentCertifications
              initial="03/2018 -"
              final="Atual"
              name="Dev front-end + React.js"
              local="OneBitCode - Brasil"
            />
            <ComponentCertifications
              initial="03/2013 -"
              final="07/2014"
              name="Operador de micro - Tech"
              local="D.M.C informática - Brasil"
            />
            <ComponentCertifications
              initial="04/2013 -"
              final="06/2016"
              name="Computação Gráfica - Tech"
              local="Gracom - Brasil"
            />
            <ComponentCertifications2
              initial="09/2023 -"
              name="Big Data em Apoio à Tomada de Decisão"
              local="Enap - Brasil"
            />
            <ComponentCertifications2
              initial="09/2023 -"
              name="Nuevas Tecnologías en el Servicio Público"
              local="Enap - Espanha"
            />
            <ComponentCertifications2
              initial="09/2023 -"
              name="Personal Management - Basis of Leadership"
              local="Enap - United States"
            />
        </div>
        <div className="ml-2">
            <ComponentCertifications2
              initial="09/2023 -"
              name="Sistema de Controle da Procuradoria Municipal"
              local="Enap - Brasil"
            />
            <ComponentCertifications2
              initial="09/2023 -"
              name="Agile in the context of the Public Sector"
              local="Enap - United States"
            />
            <ComponentCertifications2
              initial="04/2019 -"
              name="Programação em Python"
              local="Prime cursos - Brasil"
            />
            <ComponentCertifications2
              initial="08/2018 -"
              name="Hardware & Software"
              local="Bradesco courses - Brasil"
            />
            <ComponentCertifications2
              initial="04/2019 -"
              name="Segurança do trabalho"
              local="Prime cursos - Brasil"
            />
            <ComponentCertifications2
              initial="01/2022 -"
              name="Rede de computadores"
              local="Prime cursos - Brasil"
            />
        </div>
    </section>
  );
};
