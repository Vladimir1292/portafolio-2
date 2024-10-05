import skillCard from "../data/skillsData.js";
export const cardsContainer = document.querySelector(".skills__container");

const cardSkill = skillCard.map(
  (card) => `
<div class="card">
<iconify-icon class="card__icons" icon=${card.icon}></iconify-icon>
<h2 class="card__title">${card.title}</h2>
</div>
`
).join(" ");

cardsContainer.innerHTML = cardSkill;