import React from 'react';

export default function Perfil() {
  return (
    <section
      id="perfil"
      className="bg-blue-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-10"
    >
      
      <div className="mb-6 md:mb-0 md:mr-10">
        <img
          src=""
          alt=""
          className="bg-gray-700"
        />
      </div>

    
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Sobre mim</h1>
        <h2 className="text-lg leading-relaxed">
          Olá, sou <span className="font-semibold">Esdras thiago</span>. Minha jornada como desenvolvedor de sistemas web começou de forma despretensiosa, fuçando tutoriais na internet e criando pequenos sites para amigos. Com o tempo, mergulhei de cabeça em HTML, CSS e JavaScript, e logo fui contratado como estagiário em uma startup local. Lá, aprendi na prática sobre frameworks como React e Vue.js, além de backend com Node.js e bancos de dados relacionais. Após alguns anos, assumi a liderança de projetos mais complexos, integrando APIs, trabalhando com metodologias ágeis e aprimorando a experiência do usuário. Hoje, atuo como desenvolvedor pleno, apaixonado por resolver problemas reais com soluções escaláveis e eficientes.
        </h2>
      </div>
    </section>
  );
}
// w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg