


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
  

  let KEYBOARD_CONTAINER = document.createElement('div');
  KEYBOARD_CONTAINER.classList.add('keyboard__container');
  KEYBOARD_CONTAINER.classList.add('en');
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
  ],
  keycodes = [
    {code:'`', keyen:'~' ,keyEn:'~', keyru:'ё', keyRu:'ё'},
    {code:'1', keyen:'1' ,keyEn:'1', keyru:'1', keyRu:'1'},
    {code:'2', keyen:'2' ,keyEn:'2', keyru:'2', keyRu:'2'},
    {code:'3', keyen:'3' ,keyEn:'3', keyru:'3', keyRu:'3'},
    {code:'4', keyen:'4' ,keyEn:'4', keyru:'4', keyRu:'4'},
    {code:'5', keyen:'5' ,keyEn:'5', keyru:'5', keyRu:'5'},
    {code:'6', keyen:'6' ,keyEn:'6', keyru:'6', keyRu:'6'},
    {code:'7', keyen:'7' ,keyEn:'7', keyru:'7', keyRu:'7'},
    {code:'8', keyen:'8' ,keyEn:'8', keyru:'8', keyRu:'8'},
    {code:'9', keyen:'9' ,keyEn:'9', keyru:'9', keyRu:'9'},
    {code:'0', keyen:'0' ,keyEn:'0', keyru:'0', keyRu:'0'},
    {code:'-', keyen:'-' ,keyEn:'-', keyru:'-', keyRu:'-'},
    {code:'=', keyen:'=' ,keyEn:'=', keyru:'=', keyRu:'='},
    {code:'BACKSPACE', keyen:'BACKSPACE', keyEn:'BACKSPACE', keyru:'BACKSPACE', keyRu:'BACKSPACE'},
    {code:'TAB', keyen:'TAB', keyEn:'TAB', keyru:'TAB', keyRu:'TAB'},
    {code:'q', keyen:'q', keyEn:'Q', keyru:'й', keyRu:'Й'},
    {code:'w', keyen:'w', keyEn:'W', keyru:'ц', keyRu:'Ц'},
    {code:'e', keyen:'e', keyEn:'E', keyru:'у', keyRu:'У'},
    {code:'r', keyen:'r', keyEn:'R', keyru:'к', keyRu:'К'},
    {code:'t', keyen:'t', keyEn:'T', keyru:'е', keyRu:'Е'},
    {code:'y', keyen:'y', keyEn:'Y', keyru:'н', keyRu:'Н'},
    {code:'u', keyen:'u', keyEn:'U', keyru:'г', keyRu:'Г'},
    {code:'i', keyen:'i', keyEn:'I', keyru:'ш', keyRu:'Ш'},
    {code:'o', keyen:'o', keyEn:'O', keyru:'щ', keyRu:'Щ'},
    {code:'p', keyen:'p', keyEn:'P', keyru:'з', keyRu:'З'},
    {code:'[', keyen:'[', keyEn:'[', keyru:'х', keyRu:'Х'},
    {code:']', keyen:']', keyEn:']', keyru:'ъ', keyRu:'Ъ'},
    {code:"/".match(/\//), keyen:"/".match(/\//), keyEn:"/".match(/\//), keyru:"/".match(/\//), keyRu:"/".match(/\//)},
    {code:'CAPSLOCK', keyen:'CAPSLOCK', keyEn:'CAPSLOCK', keyru:'CAPSLOCK', keyRu:'CAPSLOCK'},
    {code:'a', keyen:'a', keyEn:'A', keyru:'ф', keyRu:'Ф'},
    {code:'s', keyen:'s', keyEn:'S', keyru:'ы', keyRu:'Ы'},
    {code:'d', keyen:'d', keyEn:'D', keyru:'в', keyRu:'В'},
    {code:'f', keyen:'f', keyEn:'F', keyru:'а', keyRu:'А'},
    {code:'g', keyen:'g', keyEn:'G', keyru:'п', keyRu:'П'},
    {code:'h', keyen:'h', keyEn:'H', keyru:'р', keyRu:'Р'},
    {code:'j', keyen:'j', keyEn:'J', keyru:'о', keyRu:'О'}, 
    {code:'k', keyen:'k', keyEn:'K', keyru:'л', keyRu:'Л'},
    {code:'l', keyen:'l', keyEn:'L', keyru:'д', keyRu:'Д'},
    {code:';', keyen:';', keyEn:';', keyru:'ж', keyRu:'Ж'},
    {code:'""', keyen:'""', keyEn:'""', keyru:'э', keyRu:'Э'},
    {code:'ENTER', keyen:'ENTER', keyEn:'ENTER', keyru:'ENTER', keyRu:'ENTER'},
    {code:'SHIFT', keyen:'SHIFT', keyEn:'SHIFT', keyru:'SHIFT', keyRu:'SHIFT'},
    {code:'z', keyen:'z', keyEn:'Z', keyru:'я', keyRu:'Я'},
    {code:'x', keyen:'x', keyEn:'X', keyru:'ч', keyRu:'Ч'},
    {code:'c', keyen:'c', keyEn:'C', keyru:'с', keyRu:'С'},
    {code:'v', keyen:'v', keyEn:'V', keyru:'м', keyRu:'М'},
    {code:'b', keyen:'b', keyEn:'B', keyru:'и', keyRu:'И'},
    {code:'n', keyen:'n', keyEn:'N', keyru:'т', keyRu:'Т'},
    {code:'m', keyen:'m', keyEn:'M', keyru:'ь', keyRu:'Ь'},
    {code:',', keyen:',', keyEn:',', keyru:'б', keyRu:'Б'},
    {code:'.', keyen:'.', keyEn:'.', keyru:'ю', keyRu:'Ю'},
    {code:'/', keyen:'/', keyEn:'/', keyru:',', keyRu:','},
    {code:'SHIFT', keyen:'SHIFT', keyEn:'SHIFT', keyru:'SHIFT', keyRu:'SHIFT'},
    {code:'CTRL', keyen:'CTRL', keyEn:'CTRL', keyru:'CTRL', keyRu:'CTRL'},
    {code: 'window', keyen:'window', keyEn:'window', keyru:'window', keyRu:'window'},
    {code:'ALT', keyen:'ALT', keyEn:'ALT', keyru:'ALT', keyRu:'ALT'},
    {code:'SPACE', keyen:'SPACE', keyEn:'SPACE', keyru:'SPACE', keyRu:'SPACE'},
    {code:'ALT', keyen:'ALT', keyEn:'ALT', keyru:'ALT', keyRu:'ALT'},
    {code:'CTRL', keyen:'CTRL', keyEn:'CTRL', keyru:'CTRL', keyRu:'CTRL'},
    {code:'🡡', keyen:'🡡', keyEn:'🡡', keyru:'🡡', keyRu:'🡡'},
    {code:'🡣', keyen:'🡣', keyEn:'🡣', keyru:'🡣', keyRu:'🡣'},
    {code:'🡠', keyen:'🡠', keyEn:'🡠', keyru:'🡠', keyRu:'🡠'},
    {code:'🡢', keyen:'🡢', keyEn:'🡢', keyru:'🡢', keyRu:'🡢'}
  ])
  {
    this.keylist = keylist;
    this.keycodes = keycodes;
    this.keys = {}; // для хранения состояния клавиш
    this.out = ''; 
    this.textContent = this.textContent;
    this.textarea = document.querySelector('#textarea');
    addEventListener('keydown', (e) => this.changeState(e));
    addEventListener('keyup', (e) => this.changeState(e));
  }

  changeState(e) {
    if(!this.keylist.includes(e.code)) return; 
    this.keys[e.code] = e.type === 'keydown' ? true : false; 
    if(this.keys[e.code] = e.type === 'keyup') {
      document.querySelector(`#keyboard .k-key.${e.code}`).classList.remove('active');
    }
  }

  init() {
    let keycodes = this.keycodes;
    console.log(keycodes[1].code);
    let board =  document.querySelector('#keyboard'); 
    for(let i = 0; i < this.keylist.length; i++) {
      let btn = document.createElement("div")
      btn.className = `k-key ${this.keylist[i]}`;
      btn.textContent = keycodes[i].keyen; 
      board.appendChild(btn);

      if(i == 14 || i == 28 || i == 41 || i == 53) {
        btn += btn.classList.add('clearfix');
      }
    }
  }

  keyboardInitHover() {
   let keyboard_items = this.keylist;
   let textarea = document.querySelector('#textarea');
   let keycodes = this.keycodes;
   let board =  document.querySelector('#keyboard');
   let btn = document.querySelectorAll('#keyboard .k-key');
   let hotkeys = [
     'Backspace', 
     'Tab', 
     'CapsLock', 
     'Enter', 
     'ShiftLeft', 
     'ShiftRight', 
     'ControlLeft', 
     'MetaLeft',  
     'AltLeft',
     'Space',
     'AltRight',
     'ControlRight',
     'ArrowUp',
     'ArrowDown',
     'ArrowLeft',
     'ArrowRight'
    ];

    document.addEventListener('keydown', function(event) {
      for(let i = 0; i < keyboard_items.length; i++) {
        if(keyboard_items[i] === event.code && event.type === 'keydown' 
        && event.code !== 'Backspace'
        && event.code !== 'Tab'
        && event.code !== 'Enter'
        && event.code !== 'CapsLock'
        && event.code !== 'ShiftLeft'
        && event.code !== 'ShiftRight'
        && event.code !== 'ControlLeft'
        && event.code !== 'AltLeft'
        && event.code !== 'MetaLeft'
        && event.code !== 'Space'
        && event.code !== 'AltRight'
        && event.code !== 'ControlRight'
        && event.code !== 'ArrowUp'
        && event.code !== 'ArrowDown'
        && event.code !== 'ArrowLeft'
        && event.code !== 'ArrowRight') {
          console.log(event.code);
          if(board.classList.contains('en')) {
            textarea.value += keycodes[i].keyen; // печатаем в textarea 
            document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
              element.classList.remove('active');
            })

          } else if (board.classList.contains('ru')) {
            textarea.value += keycodes[i].keyru; // печатаем в textarea 
            document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
              element.classList.remove('active');
            })
          }
          document.querySelector(`#keyboard .k-key.${event.code}`).classList.add('active');
        } 
      }
      
    })
  }

  MouseInitHover() {
    let keyboard_items = this.keylist;
    let textarea = document.querySelector('#textarea');
    console.log(textarea);
    document.addEventListener('click', function(event) {
      document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
        element.classList.remove('active');
      })
      if(event.target.classList.contains('k-key')) {
        event.target.classList.add('active');
      }

       // печатаем в textarea 
      if(event.target.classList.contains('k-key')) {
        textarea.value += event.target.innerHTML;
      }
      if(event.target.classList.contains('Backspace')) {
        console.log(textarea.value);
        let arr = textarea.value.slice(0, textarea.value.length - 10);
        textarea.value = arr; 
        console.log(arr);
      }


    })
  }


  changeLanguageRu() {
    let keylist = this.keylist;
    let keycodes = this.keycodes;
    let board =  document.querySelector('#keyboard');
    let btn = document.querySelectorAll('#keyboard .k-key');
    
    document.addEventListener('keydown', function(event) {
      if(board.classList.contains('en')) {
        if(event.code == 'ControlLeft') {
          document.onkeyup = function(e) {
            if(e.code == 'AltLeft') {
              for(let i = 0; i < btn.length; i++) {
                btn[i].classList.remove('en')
                btn[i].classList.add('ru');
                board.classList.remove('en');
                board.classList.add('ru');
                btn[i].textContent = keycodes[i].keyru;
              }
            }
          }
        }
      }
    })
  }


  changeLanguageEn() {
    let keylist = this.keylist;
    let keycodes = this.keycodes;
    let board =  document.querySelector('#keyboard');
    let btn = document.querySelectorAll('#keyboard .k-key');
    
    document.addEventListener('keydown', function(event) {
      if(board.classList.contains('ru')) {
        console.log('true');
        if(event.code == 'ControlLeft') {
          document.onkeyup = function(e) {
            if(e.code == 'AltLeft') {
              console.log('work');
              for(let i = 0; i < btn.length; i++) {
                btn[i].classList.remove('ru');
                btn[i].classList.add('en');
                board.classList.remove('ru');
                board.classList.add('en');
                btn[i].textContent = keycodes[i].keyen;
              }
            }
          }
        }
      }
    })
  }


  backspaceInit() {
    let backspace = document.querySelector('.k-key.Backspace');
    let textarea = document.querySelector('#textarea');
    console.log(backspace);
    document.addEventListener('keydown', function(event) {
      if(event.target.classList.contains('Backspace')) {
        console.log(event.target);
        console.log(textarea.value);
        let arr = textarea.value.slice(0, textarea.value.length - 10);
        textarea.value = arr; 
        console.log(arr);
      }
      
    })
  }

  // capsLockInit() {
  //   let textarea = document.querySelector('#textarea');
  //   let keylist = this.keylist;
  //   let keycodes = this.keycodes;
  //   let board =  document.querySelector('#keyboard');
  //   let btn = document.querySelectorAll('#keyboard .k-key');

  //   document.addEventListener('keydown', function(event) {
  //     if(event.code === 'CapsLock') {
  //       console.log(event);
  //       if(board.classList.contains('en')) {
  //         board.classList.toggle('CAPS'); 
  //       }
  //       for(let i = 0; i < btn.length; i++) {
  //         btn[i].textContent = keycodes[i].keyEn;
  //       }
  //        textarea.value += keycodes.keyEn;
  //     }
  //   })
  // }
        





}
createBody();

let x = new KeyControls();
x.init();  
x.keyboardInitHover();  
x.MouseInitHover();
x.changeLanguageRu();
x.changeLanguageEn();
x.backspaceInit();
// x.capsLockInit();



// document.addEventListener('keydown', (e) => console.log(e));
