


// const main = document.createElement('main');
// const div = document.createElement('div');

// document.body.appendChild(main);
// document.body.appendChild(div);

// console.log(main);

function createBody() {
  const PAGE = document.body;
  const MAIN =  document.createElement('main');

  let KEYBOARD = document.createElement('div');
  KEYBOARD.classList.add('keyboard');

  let WRAPPER = document.createElement('div');
  WRAPPER.classList.add('keyboard__wrapper');

  let TITLE = document.createElement('h1');
  TITLE.classList.add('title');
  TITLE.innerText = 'Virtual keyboard';

  let DIV_TEXTAREA = document.createElement('div');
  DIV_TEXTAREA.classList.add('textarea');

  let TEXTAREA = document.createElement('textarea');
  TEXTAREA.name ="keyboard__area"; 
  TEXTAREA.id ="textarea"; 
  TEXTAREA.cols="90";
  TEXTAREA.rows="15";
  // TEXTAREA.autofocus;
  

  let KEYBOARD_CONTAINER = document.createElement('div');
  KEYBOARD_CONTAINER.classList.add('keyboard__container');
  KEYBOARD_CONTAINER.id = "keyboard";

  let INFO = document.createElement('div');
  INFO.classList.add('info'); 

  let INFO_DESC_1 = document.createElement('p');
  INFO_DESC_1.classList.add('description');
  INFO_DESC_1.innerText = 'Клавиатура создана в ОС Windows';

  let INFO_DESC_2 = document.createElement('p');
  INFO_DESC_2.classList.add('description');
  INFO_DESC_2.innerText = 'Для переключения языка комбинация: левые ctrl + alt';

  PAGE.append(MAIN);
  MAIN.append(KEYBOARD);
  KEYBOARD.append(WRAPPER);
  WRAPPER.append(TITLE);
  WRAPPER.append(DIV_TEXTAREA);  
  WRAPPER.append(TEXTAREA);  
  WRAPPER.append(KEYBOARD_CONTAINER);  
  WRAPPER.append(INFO);  
  INFO.append(INFO_DESC_1); 
  INFO.append(INFO_DESC_2); 
}


class KeyControls {

  constructor(keylist = [
    "Backquote",
    "Digit1", 
    "Digit2", 
    "Digit3", 
    "Digit4", 
    "Digit5", 
    "Digit6", 
    "Digit7", 
    "Digit8", 
    "Digit9", 
    "Digit0", 
    "Minus", 
    "Equal", 
    "Backspace",
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "ControlRight",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ]) {
    this.keylist = keylist;
    this.keys = {}; // для хранения состояния клавиш
    this.out = ''; 
    this.textContent = this.textContent;
    this.keycodes = this.keycodes;
    
    addEventListener('keydown', (e) => this.changeState(e));
    addEventListener('keyup', (e) => this.changeState(e));
    

  }

  changeState(e) {
    if(!this.keylist.includes(e.code)) return; 
    this.keys[e.code] = e.type === 'keydown' ? true : false; 
    console.log(this.keys);
    if(this.keys[e.code] = e.type === 'keyup') {
      document.querySelector(`#keyboard .k-key.${e.code}`).classList.remove('active');
    }
  }

  init() {

    const keycodes = [
      {code:'`', keyEn:'~', keyRu:'ё'},
      {code:'1', keyEn:'1', keyRu:'2'},
      {code:'2', keyEn:'2', keyRu:'2'},
      {code:'3', keyEn:'3', keyRu:'3'},
      {code:'4', keyEn:'4', keyRu:'4'},
      {code:'5', keyEn:'5', keyRu:'5'},
      {code:'6', keyEn:'6', keyRu:'6'},
      {code:'7', keyEn:'7', keyRu:'7'},
      {code:'8', keyEn:'8', keyRu:'8'},
      {code:'9', keyEn:'9', keyRu:'9'},
      {code:'0', keyEn:'0', keyRu:'0'},
      {code:'-', keyEn:'-', keyRu:'-'},
      {code:'=', keyEn:'=', keyRu:'='},
      {code:'BACKSPACE', keyEn:'BACKSPACE', keyRu:'BACKSPACE'},
      {code:'TAB', keyEn:'TAB', keyRu:'TAB'},
      {code:'q', keyEn:'q', keyRu:'Й'},
      {code:'w', keyEn:'w', keyRu:'Ц'},
      {code:'e', keyEn:'e', keyRu:'У'},
      {code:'r', keyEn:'r', keyRu:'К'},
      {code:'t', keyEn:'t', keyRu:'Е'},
      {code:'y', keyEn:'y', keyRu:'Н'},
      {code:'u', keyEn:'u', keyRu:'Г'},
      {code:'i', keyEn:'i', keyRu:'Ш'},
      {code:'o', keyEn:'o', keyRu:'Щ'},
      {code:'p', keyEn:'p', keyRu:'З'},
      {code:'[', keyEn:'[', keyRu:'Х'},
      {code:']', keyEn:']', keyRu:'Ъ'},
      {code:"/".match(/\//), keyEn:"/".match(/\//), keyRu:"/".match(/\//)},
      {code:'CAPSLOCK', keyEn:'CAPSLOCK', keyRu:'CAPSLOCK'},
      {code:'a', keyEn:'a', keyRu:'Ф'},
      {code:'s', keyEn:'s', keyRu:'Ы'},
      {code:'d', keyEn:'d', keyRu:'В'},
      {code:'f', keyEn:'f', keyRu:'А'},
      {code:'g', keyEn:'g', keyRu:'П'},
      {code:'h', keyEn:'h', keyRu:'Р'},
      {code:'j', keyEn:'j', keyRu:'О'}, 
      {code:'k', keyEn:'k', keyRu:'Л'},
      {code:'l', keyEn:'l', keyRu:'Д'},
      {code:';', keyEn:';', keyRu:'Ж'},
      {code:'""', keyEn:'""', keyRu:'Э'},
      {code:'ENTER', keyEn:'ENTER', keyRu:'ENTER'},
      {code:'SHIFT', keyEn:'SHIFT', keyRu:'SHIFT'},
      {code:'z', keyEn:'z', keyRu:'Я'},
      {code:'x', keyEn:'x', keyRu:'Ч'},
      {code:'c', keyEn:'c', keyRu:'С'},
      {code:'v', keyEn:'v', keyRu:'М'},
      {code:'b', keyEn:'b', keyRu:'И'},
      {code:'n', keyEn:'n', keyRu:'Т'},
      {code:'m', keyEn:'m', keyRu:'Ь'},
      {code:',', keyEn:',', keyRu:'Б'},
      {code:'.', keyEn:'.', keyRu:'Ю'},
      {code:'/', keyEn:'/', keyRu:','},
      {code:'SHIFT', keyEn:'SHIFT', keyRu:'SHIFT'},
      {code:'CTRL', keyEn:'CTRL', keyRu:'CTRL'},
      {code: 'window', keyEn:'window', keyRu:'window'},
      {code:'ALT', keyEn:'ALT', keyRu:'ALT'},
      {code:'SPACE', keyEn:'SPACE', keyRu:'SPACE'},
      {code:'ALT', keyEn:'ALT', keyRu:'ALT'},
      {code:'CTRL', keyEn:'CTRL', keyRu:'CTRL'},
      {code:'🡡', keyEn:'🡡', keyRu:'🡡'},
      {code:'🡣', keyEn:'🡣', keyRu:'🡣'},
      {code:'🡠', keyEn:'🡠', keyRu:'🡠'},
      {code:'🡢', keyEn:'🡢', keyRu:'🡢'}
    ];

    console.log(keycodes[1].code);
    let board =  document.querySelector('#keyboard'); 
    for(let i = 0; i < this.keylist.length; i++) {
      let btn = document.createElement("div")
      btn.className = `k-key ${this.keylist[i]}`;
      btn.textContent = keycodes[i].keyEn; 
      board.appendChild(btn);

      if(i == 14 || i == 28 || i == 41 || i == 53) {
        btn += btn.classList.add('clearfix');
      }
    }
  }

  keyboardInitHover() {
   let keyboard_items = this.keylist;
    document.addEventListener('keydown', function(event) {
      for(let i = 0; i < keyboard_items.length; i++) {
        if(keyboard_items[i] === event.code && event.type === 'keydown') {
          document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
            element.classList.remove('active');
          })
          document.querySelector(`#keyboard .k-key.${event.code}`).classList.add('active');
        } 
       
      }
    })
  }

  MouseInitHover() {
    let keyboard_items = this.keylist;
    document.addEventListener('click', function(event) {
      document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
        element.classList.remove('active');
      })

      if(event.target.classList.contains('k-key')) {
        event.target.classList.add('active');
      }
      console.log(event);
    })

  }
}
createBody();

let x = new KeyControls();
x.init();  
x.keyboardInitHover();  
x.MouseInitHover();


// document.addEventListener('keydown', (e) => console.log(e));