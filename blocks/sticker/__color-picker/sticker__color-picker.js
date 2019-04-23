
export function Sticker__color_picker(){

  var elem;


  function getColorPicker(){
    if(!elem){
      render();
    }
    return elem;
  }

  function render(){

    var cp = document.createElement('ul');
    cp.classList.add('sticker__color-picker');

    cp.innerHTML =
    '<li data-color="orange" class="sticker__menu-color sticker_color_orange">'+
    '<li data-color="aqua" class="sticker__menu-color sticker_color_aqua">'+
    '<li data-color="violet" class="sticker__menu-color sticker_color_violet">'+
    '<li data-color="yellow" class="sticker__menu-color sticker_color_yellow">';

    elem = cp;
  }

  function toggleVision(){
    if(!elem) render();
    elem.classList.toggle('is-open');
  }

  this.getColorPicker = getColorPicker;
  this.toggleVision = toggleVision;

}
