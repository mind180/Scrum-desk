

import {Header} from '../blocks/header/header.js';
import {Board} from '../blocks/board/board.js';
import {Modal} from '../blocks/modal/modal.js';
import {desktopControllers} from './desktopControllers.js';


export function Page(){

  var body = document.querySelector('body');
  var desktopController;
  var desktopLayout;

  var modal = new Modal();

  function render()
  {
    var header = new Header().getHTMLElement();
    header.addEventListener('click', tabClick);
    header.addEventListener('click', contextTabAdd);



    var boardsLayout = desktopLayout = document.createElement('div');
    boardsLayout.classList.add('desktop');
    boardsLayout.addEventListener('click', removeBoard );

    body.appendChild(header);
    body.appendChild(boardsLayout);
  }


  function renderDesktop()
  {
    var desktopContainer = body.querySelector('desktop');
    desktopLayout.innerHTML = "";
    desktopLayout.appendChild(desktopController.getHTMLElement());
  }

  function tabClick( e )
  {
    var tab = e.target;
    if( !tab.classList.contains('header__menu-item') ) return;
    var controllerName = tab.innerText + 'Controller';

    desktopController = desktopControllers[controllerName].getController();

    renderDesktop();
  }

  //-------------------------- context menu events --------------------------
  function contextTabAdd(e)
  {
    var tab = e.target;
    if( !tab.classList.contains('header__context-item')) return;
    if( tab.innerText !== 'Add Board' ) return;

    body.appendChild( modal.forTabTitle() );
    body.addEventListener('click', addTab);
  }

  function addTab(e)
  {
    let btn = e.target;
    if(!btn.classList.contains('modal__button') ) return;
    if( btn.value !== 'Ok'  ) return;

    let caption = modal.getResponse();
    desktopController.addBoard( new Board({caption: caption}) );
    renderDesktop();

    body.removeEventListener('click', addTab);
  }

  function removeBoard(e)
  {
    if( !e.target.classList.contains('board__header-close') ) return;
    var board = e.target.closest('section');
    desktopController.removeBoard(board);
      renderDesktop();
  }

  //-------------------------- context menu events --------------------------

  //public
  this.render = render;

}
