
export function ReportsController()
{

  var elem;


  function getHTMLElement()
  {
    alert('TAB In progress');
    if(!elem) render();
    return elem;
  }


  function render()
  {
    var div = document.createElement('div');

    elem = div;
  }









  //public
  this.getHTMLElement = getHTMLElement;

}
