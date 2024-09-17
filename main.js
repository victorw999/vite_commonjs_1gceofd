import './style.css';

window.addEventListener('load', () => {
  setTimeout(() => {
    //#A
    import('./myModule/myModule.js').then((module) => {
      module.default.myFunction('#A');
    });

    //#B
    const myMod = require('./myModule/myModule.js');
    myMod.myFunction('#B');
  }, 1);
});
