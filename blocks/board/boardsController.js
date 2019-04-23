
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

    for( let [dom, obj] of boards )
    {
      layout.appendChild( dom );
    }

    elem = layout;
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
    return boards.length;
  }

  this.getHTMLElement = getHTMLElement;
  this.addBoard = addBoard;
  this.removeBoard = removeBoard;
  this.getSize = getSize;
}
