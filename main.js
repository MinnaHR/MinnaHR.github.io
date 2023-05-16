let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy estudiante de QFB y me entusiasma aprender cosas nuevas, en especial en cuanto a la naturaleza, la ciencia y la tecnología')
  .pauseFor(200)
  .deleteChars(10)
  .start();
