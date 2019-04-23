
import {Header__menu} from './__menu/header__menu.js';

export function Header(){

  var elem;
  var contextMenu;
  var mainMenu;

  function getHTMLElement(){
    if(!elem) render();
    return elem;
  }

  function render(){

    var header = document.createElement('header');
    header.classList.add('header');
    header.addEventListener('click', selectTab );

    var menu = new Header__menu({}).getHTMLElement();

    header.appendChild(menu);

    elem = header;
  }

  function renderContext()
  {
    var menus = elem.querySelectorAll('.header__menu');
    if(menus.length >= 2){
      elem.removeChild( menus[1] );
    }
    elem.appendChild(contextMenu);
  }

  //--------------------------------context------------------------------------
  function getBoardsContext(){
    var ul  = document.createElement('ul');
    ul.classList.add('header__menu');
    ul.innerHTML = '<li class="header__context-item"><i class="fas fa-plus"></i>Add Board</li> ';
    return ul;
  }

  function getProjectsContext(){
    var ul  = document.createElement('ul');
    ul.classList.add('header__menu');
    ul.innerHTML = '<li class="header__context-item"><i class="fas fa-plus"></i>TEST</li> ';
    return ul;
  }


  function getReportContext(){
      var ul  = document.createElement('ul');
      ul.classList.add('header__menu');
      ul.innerHTML = '<li class="header__context-item"><i class="fas fa-plus"></i>TEST</li> ';
      return ul;
    }
  //--------------------------------context------------------------------------
  function deselectTabs(){
    var tabs = elem.querySelectorAll('li');
    tabs.forEach( li => li.classList.remove('header_item_active') );
  }
  //---------------------------------------------------------------------------
  function choseTab(tab){
    deselectTabs();
    tab.classList.add('header_item_active');
    if(tab.innerText === 'Projects'){
      contextMenu = getProjectsContext();
    }
    if(tab.innerText === 'Boards'){
      contextMenu = getBoardsContext();
    }
    if(tab.innerText === 'Reports'){
      contextMenu = getReportContext();
    }
    renderContext();

  }

  function selectTab(e){
    var tab = e.target;
    if(tab.innerText === 'Projects' || tab.innerText === 'Boards' || tab.innerText === 'Reports'){
      choseTab(tab);
    }


  }
  //------------------------------------------------------------

  this.getHTMLElement = getHTMLElement;


}
