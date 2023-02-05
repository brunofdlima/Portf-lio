import { useState } from "react";
import emailjs from "@emailjs/browser";

import "../Animate.css";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_87ty6x8",
        "template_iwct579",
        templateParams,
        "-mqtRrPICZkBZe1DM"
      )
      .then(
        () => {
          alert("Email enviado");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          alert("Erro ao enviar");
        }
      );
  }

  return (
    <div className="bg-slate-800 flex justify-center h-auto items-center py-8 px-8 max-[768px]:flex-col">
      <h1 className="text-gray-400">Contato por e-mail</h1>
      <BsFillArrowRightCircleFill
        className="mr-16 ml-4 h-12 w-12 text-gray-400 max-[768px]:hidden"
        id="icon"
      />
      <form
        className="flex flex-col bg-slate-900 px-6 py-4 w-96 rounded-lg max-[375px]:w-[21.875rem] max-[320px]:w-[18.75rem]"
        onSubmit={sendEmail}
      >
        <input
          className="mt-4 bg-slate-200 rounded-sm"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="mt-4 bg-slate-200 rounded-sm"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="mt-4 h-28 bg-slate-200 rounded-lg"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div className="flex justify-center mt-4">
          <button
            className="w-[12.5rem] h-[1.875rem] my-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 hover:opacity-80"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
