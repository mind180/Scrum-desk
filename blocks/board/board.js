
import {Sticker} from '../sticker/sticker.js';

export function Board({caption:_caption='', index:_index=0})
{
  //-------------------------------
  var index = _index;
  var elem;
  var caption = _caption;
  var stickers = [];
  //--------------------------------


  function getHTMLElement()
  {
    if(!elem) render();
    return elem;
  }

  function render()
  {
    var board = document.createElement('section');
    board.classList.add('board');
    board.addEventListener('click', removeSticker);
    board.addEventListener('click', addStickerEvent);

    var head = document.createElement('div');
    head.classList.add('board__header');
    head.innerHTML = caption;

    var closeItem = document.createElement('div');
    closeItem.classList.add('board__header-close');
    closeItem.innerHTML = '&#xd7';
    head.appendChild(closeItem);

    var stickersLayout = document.createElement('div');
    stickersLayout.classList.add('board__l-stickers');

    var addItem = document.createElement('div');
    addItem.classList.add('sticker__add-item');
    addItem.innerHTML = "\n+\n";
    addItem.setAttribute('data-tooltip', 'Add sticker');

    stickersLayout.appendChild(addItem);
    board.appendChild(head);
    board.appendChild(stickersLayout);

    elem = board;
  }


  function renderStickers(){
    var stickersLayout = elem.querySelector('.board__l-stickers');
    stickersLayout.innerHTML = "";

    stickers.forEach( function(sticker){
        stickersLayout.appendChild(sticker);
    });

    var addItem = document.createElement('div');
    addItem.classList.add('sticker__add-item');
    addItem.innerHTML = "\n+\n";
    addItem.setAttribute('data-tooltip', 'Add sticker');

    stickersLayout.appendChild(addItem);
  }

  function addStickerEvent(e){
    if( !e.target.classList.contains('sticker__add-item') ) return;
    var sticker = new Sticker({ color: 'aqua', author: 'Unknown User', boardIndex: 1 });
    stickers.push( sticker.getHTMLElement() );
    console.log(stickers);
    renderStickers();
  }

  function addSticker(sticker)
  {
    if(!elem) render();
    stickers.push(sticker);
    renderStickers();
  }

  function removeSticker(e){
    var closeElem = e.target;
    if( !closeElem.classList.contains('sticker__menu-close') ) return;

    var sticker = closeElem.closest("div");
    if(!sticker) return new Error('sticker not found!');

    stickers.splice( stickers.indexOf(sticker), 1);
    renderStickers();
  }

  //-----------public-----------------
  this.getHTMLElement = getHTMLElement;
  this.addSticker = addSticker;
}
