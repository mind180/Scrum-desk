

export function Sticker__input({color:p_color='aqua', text:p_text='', maxlength:p_maxlength=95})
{
  var elem;
  var color = 'sticker_color_' + p_color;
  var text = p_text;
  var maxlength = p_maxlength;

  function getElement()
  {
    if(!elem) render();
    return elem;
  }

  function render(){
    var textarea = document.createElement('textarea');
    textarea.classList.add('sticker__input');
    textarea.classList.add(color);
    textarea.setAttribute('maxlength', maxlength);
    textarea.innerText = text;
    elem = textarea;
  }

  this.getElement = getElement;
}
