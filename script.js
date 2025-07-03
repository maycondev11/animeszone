// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");
  const status = document.getElementById("mensagemStatus");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (nome === "" || email === "" || mensagem === "") {
        status.innerText = "Por favor, preencha todos os campos.";
        status.style.color = "red";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        status.innerText = "Por favor, insira um e-mail válido.";
        status.style.color = "red";
        return;
      }

      status.innerText = "Mensagem enviada com sucesso!";
      status.style.color = "green";
      form.reset();
    });
  }

  // Efeito 1: Mostrar botão "voltar ao topo" ao rolar
  const btnTopo = document.createElement("button");
  btnTopo.innerText = "↑ Topo";
  btnTopo.id = "btnTopo";
  btnTopo.style.display = "none";
  document.body.appendChild(btnTopo);

  window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Efeito 2: Fade-in em elementos ao aparecer na tela
  const fadeElements = document.querySelectorAll(".anime-card, .anime-item, .sobre, .contato");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));
});
