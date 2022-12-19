import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false
    };
    this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
    this.handleLinksOrShadeClick = this.handleLinksOrShadeClick.bind(this);
  }

  handleMenuIconClick() {
    this.setState({
      isMenuOpened: true
    });
  }

  handleLinksOrShadeClick() {
    this.setState({
      isMenuOpened: false
    });
  }

  render() {
    const classNameOfMenu = this.state.isMenuOpened ? 'menu is-active' : 'menu';
    const classNameOfBackground = this.state.isMenuOpened ? 'menu-background is-active' : 'menu-background';
    return (
      <div>
        <div className='icon-wrapper'>
          <i className="fa-solid fa-bars" onClick={this.handleMenuIconClick}></i>
        </div>

        <nav className={classNameOfMenu} onClick={this.handleLinksOrShadeClick}>
          <ul className='menu-list'>
            <li className='menu-item'>
              <a href="#" className='item-menu'>Menu</a>
            </li>
            <li className='menu-item'>
              <a href="#" className='item-about'>About</a>
            </li>
            <li className='menu-item'>
              <a href="#" className='item-get-started'>Get Started</a>
            </li>
            <li className='menu-item'>
              <a href="#" className='item-sign-up'>Sign In</a>
            </li>
          </ul>
        </nav>

        <div className={classNameOfBackground} onClick={this.handleLinksOrShadeClick}></div>
      </div>
    );
  }
}
