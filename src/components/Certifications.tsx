import { ComponentCertifications } from "./extras/ComponentCertifications";
import { ComponentCertifications2 } from "./extras/ComponentCertifications2";

export const Certifications = (props: any) => {
  return (
    <section id={props.id} className="mx-auto max-w-[75rem] py-36 px-8">
      <div className="grid grid-cols-2 max-[630px]:grid-cols-1 gap-2">
        <ComponentCertifications
          initial="07/2018 -"
          final="12/2023"
          name="Ciências da computação - Bacharel"
          local="Unigrande"
        />
        <ComponentCertifications
          initial="04/2013 -"
          final="06/2016"
          name="Computação Gráfica - Tech"
          local="Gracom"
        />
        <ComponentCertifications
          initial="03/2013 -"
          final="07/2014"
          name="Operador de micro - Tech"
          local="D.M.C informática"
        />
        <ComponentCertifications2
          initial="02-2024 -"
          name="Foundations of business and entrepreneurship"
          local="Skill Front"
        />
        <ComponentCertifications
          initial="03/2018 -"
          final="Atual"
          name="Dev front-end + React.js"
          local="OneBitCode"
        />
        <ComponentCertifications2
          initial="04/2019 -"
          name="Programação em Python"
          local="Prime cursos"
        />
        <ComponentCertifications2
          initial="04/2019 -"
          name="Big Data em Apoio à Tomada de Decisão"
          local="Enap"
        />
        <ComponentCertifications2
          initial="01/2022 -"
          name="Rede de computadores"
          local="Prime cursos"
        />
        <ComponentCertifications2
          initial="04/2021 -"
          name="Técnico em informática"
          local="Prime cursos"
        />
        <ComponentCertifications2
          initial="04/2019 -"
          name="Inteligência Artificial para simplificar o dia a dia"
          local="Enap"
        />
        <ComponentCertifications2
          initial="01/2022 -"
          name="Windows 10"
          local="Prime cursos"
        />
        <ComponentCertifications2
          initial="08/2018 -"
          name="Hardware & Software"
          local="Bradesco courses"
        />
        <ComponentCertifications2
          initial="04/2019 -"
          name="Segurança do trabalho"
          local="Prime cursos"
        />
        <ComponentCertifications2
          initial="01/2022 -"
          name="Rede de computadores"
          local="Prime cursos"
        />
      </div>
    </section>
  );
};
