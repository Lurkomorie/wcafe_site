/* tslint:disable */

import * as React from 'react';
import {Link} from 'react-router';

const CSS = require('./header.css');
const main = require('../css/main.css');

const HeaderLeft = () => {
  return (
    <div className={CSS['header-left-section']}>
      <div className={CSS['header-logo']}>
        <a className={CSS['header-logo-link']} href='/'><img src={require('../../img/logo.png')}/> </a>
        <span className={CSS['header-description']}>
                    Первое агентство Санкт-петербурга<br/>
						по организации Ресторанного бизнеса.
					</span>
      </div>
    </div>
  )
};

const TopSection = (props : any) => {
  if(props.pathname == '/') {
    return (
      <div className={CSS['top-section-text-block']}>
        <div className={CSS['top-section-title']}>Сделайте лицензию</div>
        <div className={CSS['top-section-description']}>
          Равным образом рамки и место обучения кадров способствует<br/> подготовки и
          реализации существенных финансовых<br/> и административных условий.
        </div>
        <a href='#' className={CSS['top-section-btn']}>Подробнее</a>
      </div>
    );
  }
  else if(props.pathname == '/about') {
    return (
      <div className={CSS['top-section-text-block']}>
        <div className={CSS['top-section-title']}>Мир кафе</div>
        <div className={CSS['top-section-description']}>Первое агентство Санкт-петербурга по организации Ресторанного
          бизнеса.
        </div>
      </div>
    )
  }
  else {return null};
};

const HeaderRight = () => {
  return (
    <div className={CSS['header-right-section']}>
      <div className={CSS['header-menu-phone']}>
        <nav className={`${CSS['header-menu']} ${CSS['open']}`}>
          <Link to='/about' className={CSS['header-menu-link']}>О компании</Link>
          <Link to='/property' className={CSS['header-menu-link']}>Недвижимость</Link>
          <a href='#' className={CSS['header-menu-link']}>Юр услуги</a>
          <a href='#' className={CSS['header-menu-link']}>Партнеры</a>
        </nav>
        <a className={CSS['header-phone']} href='tel:+78126408018'>+7 (812) 640-80-18</a>
      </div>
      <div className={CSS['header-social']}>
        <a href='https://vk.com/worldcafe' className={`${CSS['header-social-link']} ${CSS['vk']}`}/>
        <a href='https://www.instagram.com/mircafespb/' className={`${CSS['header-social-link']} ${CSS['fb']}`}/>
        <a href='https://www.facebook.com/worldcaferu/' className={`${CSS['header-social-link']} ${CSS['inst']}`}/>
      </div>
    </div>
  )
};

function switchHeaderStyle (path : any) {
  if(path == '/'){
    return `${CSS['top-section']} ${CSS['main-page']}`;
  }
  if(path == '/about'){
      return `${CSS['top-section']} ${CSS['about-page']}`;
  }
  else {return `${CSS['top-section']} ${CSS['inner-page']}`;};
}

export default class Header extends React.Component <any,any> {
  public render() {
    let pathname = null;
    if (typeof window !== 'undefined') {
      pathname = window.location.pathname;
    }
      const CSStyle = switchHeaderStyle(pathname);
    return (
      <div>
        <div className={CSS['header-menu-toggle']}><i className={CSS['menu-icon']}/>Меню</div>
        <div className={CSStyle}>
          <div className={`${main['wrapper-overlay']} ${CSS['inner-page-wr']}`}>
            <div className={main['overlay-effect']}/>
              <header className={`${CSS['header']} ${main.wrapper}`}>
                <HeaderLeft/>
                <HeaderRight/>
              </header>
              <TopSection pathname={pathname}/>
          </div>
        </div>
      </div>
    );
  }
}
