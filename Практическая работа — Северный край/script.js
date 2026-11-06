const stories = {
 river:{number:"Легенда 01 · Вода",title:"Река, которая помнит",text:"Говорят, в тихих изгибах северной реки вода хранит не слова, а отражения тех, кто однажды нашёл здесь дорогу домой.",link:"legends.html#river"},
 forest:{number:"Легенда 02 · Лес",title:"Хранитель еловой тени",text:"На границе старого бора путник может заметить свет между ветвей. В этой истории он указывает путь тем, кто умеет идти не торопясь.",link:"legends.html#forest"},
 sky:{number:"Легенда 03 · Небо",title:"Нить северного сияния",text:"Когда небо вспыхивает зелёным светом, кажется, будто над землёй протянута тонкая нить, соединяющая ночные берега.",link:"legends.html#sky"},
 stone:{number:"Легенда 04 · Камень",title:"Камень, возвращающий эхо",text:"У большого камня звук возвращается чуть позже. Будто место сначала слушает человека, а затем отвечает ему его же словами.",link:"legends.html#stone"}
};
document.querySelectorAll(".map-point").forEach(point=>{
 point.addEventListener("click",()=>{
  const story=stories[point.dataset.place]; if(!story)return;
  document.querySelectorAll(".map-point").forEach(item=>item.classList.remove("active"));
  point.classList.add("active");
  const number=document.getElementById("story-number"),title=document.getElementById("story-title"),body=document.getElementById("story-text"),link=document.getElementById("story-link");
  if(number)number.textContent=story.number;
  if(title)title.textContent=story.title;
  if(body)body.textContent=story.text;
  if(link){link.href=story.link;}
 });
});
document.querySelectorAll(".filter-btn").forEach(button=>{
 button.addEventListener("click",()=>{
  document.querySelectorAll(".filter-btn").forEach(item=>item.classList.remove("active"));
  button.classList.add("active");
  const filter=button.dataset.filter;
  document.querySelectorAll(".legend-card").forEach(card=>{
   card.hidden=filter!=="all" && card.dataset.world!==filter;
  });
 });
});
