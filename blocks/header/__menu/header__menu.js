
export function Header__menu( {username:_username='Unknown User'} ){

  var elem;
  var username = _username;


  function getHTMLElement(){
    if(!elem) render();
    return elem;
  }

  function render(){

    var ul = document.createElement('ul');
    ul.classList.add('header__menu');
    ul.innerHTML = '<li class="header__menu-item header_item_active"><i class="fas fa-user"></i>User</li>' +
    '<li class="header__menu-item"><i class="fas fa-project-diagram"></i>Projects</li>' +
    '<li class="header__menu-item"><i class="fas fa-th-large"></i>Boards</li>' +
    '<li class="header__menu-item"><i class="fas fa-chart-line"></i>Reports</li>';

    elem = ul;
  }

  this.getHTMLElement = getHTMLElement;

}
