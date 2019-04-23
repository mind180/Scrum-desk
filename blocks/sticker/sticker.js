

import {Sticker__menu} from './__menu/sticker__menu.js';
import {Sticker__input} from './__input/sticker__input.js';

function Sticker({text:p_text='',
                  author:p_author='',
                  color:p_color='aqua',
                  boardIndex:p_boardIndex=0}){

  var elem;
  var textarea;
  var text = p_text || '';
  var author = p_author;
  var color = 'sticker_color_' + p_color;
  var boardIndex = p_boardIndex;

  function getHTMLElement(){
    if(!elem) render();
    return elem;
  }

  function render()
  {
    var sticker = document.createElement('div');
    sticker.classList.add('sticker');
    sticker.classList.add(color);
    sticker.addEventListener('click', changeColor);
    sticker.addEventListener('click', changeIndex);

    var record = document.createElement('div');
    record.classList.add('sticker__record');
      textarea = getTextarea();
      record.appendChild(textarea);

    var menu = new Sticker__menu({color: color.split('_')[2]}).getMenu();

    var authorElem = document.createElement('div');
    authorElem.classList.add('sticker__author');
    authorElem.innerText = author;

    sticker.appendChild(record);
    sticker.appendChild(menu);
    sticker.appendChild(authorElem);

    elem = sticker;
  }

  function changeColor(e)
  {
    var cp = e.target;
    if(!cp || !cp.classList.contains('sticker__menu-color')) return;

    if(!cp.hasAttribute('data-color')) return;

    setColor(cp.classList.item(1));
  }

  function setColor(colorName)
  {
    if(!elem) return;

    if(elem.classList.length >= 2){
      elem.classList.remove(elem.classList.item(1));
      elem.classList.add(colorName);
    }
    var txtArea = getTextarea();
    if(txtArea.classList.length >= 2){
      txtArea.classList.remove(txtArea.classList.item(1));
      txtArea.classList.add(colorName);
    }
  }

  function changeIndex(e){
    var item = e.target;
    if( item.classList.contains('sticker__menu-next') ){
      if(boardIndex === getBoardsCount() ) return;
      boardIndex++;
    }
    if( item.classList.contains('sticker__menu-prev') ){
      if(boardIndex === 0) return;
      boardIndex--;
    }
  }

  function getTextarea(){
    if(!textarea) textarea = new Sticker__input({color: color.split('_')[2], text: text}).getElement();
    return textarea;
  }

  function getBoardsCount(){
    var boards = document.querySelectorAll('.board');
    return boards.length;
  }

  //public
  this.setColor = setColor;

  this.setText = function setText(text){
    if(!elem) return;
    elem.querySelector('.sticker__record').innerText = text;
  }

  this.getHTMLElement = getHTMLElement;
}

export {Sticker};
