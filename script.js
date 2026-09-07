const cards = [
  {
    icon: "💌",
    title: "Seu jeito",
    message: "Eu gosto muito do seu jeito de ser. Você tem uma personalidade que faz você ser única, e é justamente isso que torna você tão especial para mim."
  },
  {
    icon: "🌷",
    title: "Seu sorriso",
    message: "Seu sorriso consegue deixar qualquer momento melhor. É uma daquelas pequenas coisas que talvez você nem perceba, mas que eu adoro."
  },
  {
    icon: "⭐",
    title: "Você me faz bem",
    message: "Conversar com você sempre deixa meus dias um pouco melhores. Até uma conversa simples pode virar um momento que eu vou lembrar."
  },
  {
    icon: "🫶",
    title: "Sua presença",
    message: "Gosto de ter você por perto. Sua presença faz diferença, mesmo quando não estamos fazendo nada de especial."
  },
  {
    icon: "✨",
    title: "Pequenos momentos",
    message: "Às vezes, são justamente os momentos mais simples que acabam sendo os melhores. E muitos deles ficam especiais porque você estava neles."
  },
  {
    icon: "🌙",
    title: "Quando penso em você",
    message: "Tem momentos em que alguma coisa me lembra você do nada, e eu simplesmente fico pensando em como você se tornou alguém importante para mim."
  },
  {
    icon: "💗",
    title: "O que admiro",
    message: "Admiro várias coisas em você, mas principalmente a maneira como você consegue ser você mesma. Isso é algo que eu valorizo muito."
  },
  {
    icon: "🦋",
    title: "Você é importante",
    message: "Talvez eu não fale isso o suficiente, mas você é uma pessoa muito importante para mim. Ter conhecido você foi uma coisa que eu realmente gostei."
  },
  {
    icon: "🌹",
    title: "Talvez você não saiba",
    message: "Talvez você nem imagine o quanto algumas coisas que você faz ou fala podem significar para mim. Às vezes, você melhora meu dia sem nem perceber."
  },
  {
    icon: "🎁",
    title: "Última mensagem",
    message: "Eu poderia escrever várias coisas aqui, mas acho que a mais importante é simples: obrigado por existir na minha vida e por ser exatamente quem você é."
  }
];

const intro = document.getElementById("intro");
const cardsScreen = document.getElementById("cardsScreen");
const finalScreen = document.getElementById("finalScreen");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const card = document.getElementById("card");
const icon = document.getElementById("icon");
const title = document.getElementById("title");
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");

let current = 0;
let revealed = false;

function showScreen(screen) {
  [intro, cardsScreen, finalScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function renderCard() {
  const item = cards[current];
  icon.textContent = item.icon;
  title.textContent = item.title;
  message.textContent = item.message;
  counter.textContent = `${current + 1} / ${cards.length}`;
  progressBar.style.width = `${((current + 1) / cards.length) * 100}%`;
  nextBtn.textContent = "Abrir 💗";
  revealed = false;
}

startBtn.addEventListener("click", () => {
  current = 0;
  showScreen(cardsScreen);
  renderCard();
});

nextBtn.addEventListener("click", () => {
  if (!revealed) {
    revealed = true;
    nextBtn.textContent = current === cards.length - 1
      ? "Continuar ✨"
      : "Próximo cartão ➜";
    return;
  }

  if (current < cards.length - 1) {
    card.classList.add("opening");

    setTimeout(() => {
      current++;
      renderCard();
      card.classList.remove("opening");
    }, 220);
  } else {
    showScreen(finalScreen);
  }
});

restartBtn.addEventListener("click", () => {
  current = 0;
  showScreen(intro);
});

function createHeart() {
  const heart = document.createElement("span");
  heart.textContent = ["♥", "♡", "💗", "✨"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 700);
