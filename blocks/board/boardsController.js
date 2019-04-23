
import {Board} from './board.js';


export function BoardsController() {

  var elem;
  var boards = new Map();

  function getHTMLElement()
  {
    if(!elem) renderBoards();
    return elem;
  }

  function renderBoards()
  {
    var layout = document.createElement('div');
    layout.classList.add('l-board');
    layout.addEventListener('click', moveStickerForvard);
    layout.addEventListener('click', moveStickerBack);

    for( let [dom, obj] of boards )
    {
      layout.appendChild( dom );
    }

    elem = layout;
  }

  function moveStickerForvard(e)
  {
    if(!e.target.classList.contains('sticker__menu-next')) return;

    let currentBoard = boards.get(e.target.closest('section'));
    if( currentBoard.getIndex()+1 >= boards.size  ) return;

    var sticker = e.target.closest('div');
      currentBoard.deleteSticker( sticker);

    let i = 0;
    var nextBoard;
    for( let [dom, obj] of boards )
    {
      if( i === currentBoard.getIndex()+2 ) break;
      nextBoard = obj;
      i++;
    }
    nextBoard.addSticker( sticker );
    renderBoards();
    // Create the event
    var event = new CustomEvent("renderDesktop");
    // Dispatch/Trigger/Fire the event
    document.querySelector('body').dispatchEvent(event);
  }

  function moveStickerBack(e)
  {
    if( !e.target.classList.contains('sticker__menu-prev') ) return;

    let currentBoard = boards.get(e.target.closest('section'));
    if( currentBoard.getIndex()-1 < 0 ) return;

    var sticker = e.target.closest('div');
      currentBoard.deleteSticker(sticker);

    let i = 0;
    var prevBoard;
    for( let [dom, obj] of boards )
    {
      prevBoard = obj;
      i++;
      if( i === currentBoard.getIndex() ) break;
    }
    prevBoard.addSticker( sticker );
    renderBoards();
    // Create the event
    var event = new CustomEvent("renderDesktop");
    // Dispatch/Trigger/Fire the event
    document.querySelector('body').dispatchEvent(event);

  }

  function addBoard( board )
  {
    boards.set( board.getHTMLElement(), board );
    renderBoards();
  }

  function removeBoard( board )
  {
    boards.delete(board);
    renderBoards();
  }

  function getSize(){
    return boards.size;
  }

  this.getHTMLElement = getHTMLElement;
  this.addBoard = addBoard;
  this.removeBoard = removeBoard;
  this.getSize = getSize;
}
