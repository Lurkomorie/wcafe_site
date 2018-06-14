/* tslint:disable */
import * as React from 'react';
import { Link } from 'react-router';
import Popup from './Popup';

const CSS = require('./footer.css');

export default class Footer extends React.Component <any, any>{
  constructor() {
    super({});
    this.togglePopup = this.togglePopup.bind(this);
    this.state = {
      showPopup: false
    }
  }

  public togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  public render () {
    return (
      <footer className={CSS['footer']}>
        <div className={CSS['footer-container']}>
          <div className={CSS['footer-logo']}><img src={require('../../img/logo_footer.png')}/></div>
          <div className={CSS['footer-info']}>
            <div className={CSS['footer-contacts']}>
              <div className={CSS['adress']}>
                <span className={CSS['subtitle']}>Адрес</span>
                <span className={CSS['adress-info']}>
                  г. Санкт-Петербург,<br/>
								Греческий проспект, дом 29
							</span>
              </div>
              <div className={CSS['phone']}>
                  <span className={`${CSS['subtitle']} ${CSS['phone-subtitle']}`}>Телефон в Санкт-Петербурге</span>
                  <span className={CSS['phone-number']}>+7 (812) 640-80-18</span>
              </div>
              <a onClick={this.togglePopup} className={CSS['ask-link']}>Задать вопрос</a>
              <div className={CSS['copyright']}>
                © 2010–2017 ООО “Мир Кафе”<br/> Аренда помещения под ресторан.
              </div>
            </div>

            <div className={CSS['footer-menu']}>
              <div className={CSS['footer-menu-toggle']}><i className={CSS['menu-icon']}/>Меню</div>
              <div className={CSS['footer-menu-inner open']}>
                <span className={CSS['footer-menu-subtitle']}>Услуги</span>
                <a href='#' className={CSS['footer-menu-section-link']}>Аренда помещений</a>
                <ul className={CSS['footer-menu-list']}>
                  <li className={CSS['footer-menu-item']}>
                    <a className={CSS['footer-menu-link']} href='#'>помещения под ресторан</a>
                  </li>
                  <li className={CSS['footer-menu-item']}>
                    <a className={CSS['footer-menu-link']} href='#'>готовые рестораны</a>
                  </li>
                  <li className={CSS['footer-menu-item']}>
                    <a className={CSS['footer-menu-link']} href='#'>столовые на предприятиях</a>
                  </li>
                </ul>
                <a href='#' className={CSS['footer-menu-section-link']}>Продажа помещений</a>
                <ul className={CSS['footer-menu-list']}>
                  <li className={CSS['footer-menu-item']}>
                    <a className={CSS['footer-menu-link']} href='#'>готовые рестораны</a>
                  </li>
                  <li className={CSS['footer-menu-item']}>
                    <a className={CSS['footer-menu-link']} href='#'>пустые помещения</a>
                  </li>
                </ul>
                <a href='#' className={CSS['footer-menu-section-link']}>Регистрация договоров</a><br/>
                <a href='#' className={CSS['footer-menu-section-link']}>Получение лицензии на алкоголь</a><br/>
                <Link to='/contacts' className={CSS['footer-menu-section-link']}>Контакты</Link>

                {this.state.showPopup ?
                  <Popup
                    closePopup={this.togglePopup}
                  />
                  : null
                }

              </div>
            </div>
            <div className={CSS['footer-social']}>
              <span className={CSS['footer-social-subtitle']}>Мы в соцсетях</span>
              <a className={`${CSS['footer-social-link']} ${CSS['vk']}`} href='#'>ВКонтакте</a>
              <a className={`${CSS['footer-social-link']} ${CSS['fb']}`} href='#'>Facebook</a>
              <a className={`${CSS['footer-social-link']} ${CSS['inst']}`} href='#'>Инстаграмм</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

