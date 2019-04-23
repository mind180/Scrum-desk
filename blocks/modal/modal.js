
export function Modal(){

  var elem;
  var response = "";

  function getHTMLElement()
  {
    if(!elem) render();
    return elem;
  }

  function render()
  {

  }


  function forTabTitle()
  {
    var modal = document.createElement('div');
    modal.classList.add('modal__background');
    modal.addEventListener('click', removeModal);

      var wnd = document.createElement('div');
      wnd.classList.add('modal__window');

        var header = document.createElement('div');
        header.classList.add('modal__window-header');
        header.innerHTML = "Enter tab name";

        var body = document.createElement('div');
        body.classList.add('modal__window-body');

          let input = document.createElement('input');
          input.classList.add('modal__input');
          body.appendChild(input);

        var footer = document.createElement('div');
        footer.classList.add('modal__window-footer');

          var btn1 = document.createElement('input');
          btn1.classList.add('modal__button');
          btn1.setAttribute('type', 'button');
          btn1.setAttribute('value', 'Cancel');
          btn1.onclick = function(){
            var body = document.querySelector('body');
            body.removeChild( document.querySelector('.modal__background') );
          }

          var btn2 = document.createElement('input');
          btn2.classList.add('modal__button');
          btn2.setAttribute('type', 'button');
          btn2.setAttribute('value', 'Ok');
          btn2.onclick = function(){
            response = document.querySelector('.modal__input').value;
            var body = document.querySelector('body');
            body.removeChild( document.querySelector('.modal__background') );
          }

          footer.appendChild( btn1 );
          footer.appendChild( btn2 );

        wnd.appendChild( header );
        wnd.appendChild( body );
        wnd.appendChild( footer );

      modal.appendChild( wnd );

      return modal;
  }

  function removeModal(e)
  {
    if(!e.target.classList.contains('modal__background') ) return;
    var body = document.querySelector('body');
    body.removeChild( e.target );
  }



  function getResponse()
  {
      return response;
  }

  //public
  //this.getHTMLElement = getHTMLElement;
  this.getResponse = getResponse;
  this.forTabTitle = forTabTitle;

}
