
import {Sticker__color_picker} from '../__color-picker/sticker__color-picker.js';

export function Sticker__menu({color:p_color='aqua' }){

  var elem;
  var colorPicker;
  var color = 'sticker_color_' + p_color;

  function getMenu(){
    if(!elem) render();
    return elem;
  }

  var render = function(){

    var menu = document.createElement('ul');
    menu.classList.add('sticker__menu');
    menu.onclick = renderColorPicker;

    var close = document.createElement('li');
    close.classList.add('sticker__menu-close');
    close.innerText = 'Ⓧ';

    var next = document.createElement('li');
    next.classList.add('sticker__menu-next');
    next.innerText = '>>';

    var prev = document.createElement('li');
    prev.classList.add('sticker__menu-prev');
    prev.innerText = '<<';

    var menuColor = document.createElement('li');
    menuColor.classList.add('sticker__menu-color');
    menuColor.classList.add(color);


    menu.appendChild(close);
    menu.appendChild(next);
    menu.appendChild(prev);
    menu.appendChild(menuColor);

    elem = menu;
  }

  function renderColorPicker(e)
  {
    var menu = e.target;
    if(!menu || !menu.classList.contains('sticker__menu-color')) return;

    if(!colorPicker){
      colorPicker = new Sticker__color_picker();
      var menuColor = elem.querySelector('.sticker__menu-color');
      if(!menuColor) throw new Error();
      menuColor.appendChild(colorPicker.getColorPicker());
    }

    if(menu.hasAttribute('data-color')){
      setColorForColorMenu( menu.classList.item(1) );
    }

    colorPicker.toggleVision();
  }

  function setColorForColorMenu(p_color){
    var col = elem.querySelector('.sticker__menu-color');
    if(!col) return new Error('Item li menu-color not selected!');
    col.classList.remove(col.classList.item(1));
    col.classList.add(p_color);
  }

  this.getMenu = getMenu;
  //this.setColorPicker = setColorPicker;

}
