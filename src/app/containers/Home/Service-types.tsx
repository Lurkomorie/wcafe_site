/* tslint:disable */
import * as React from 'react';

const CSS = require('./services-types.css');
const main = require('../../css/main.css');

export default class ServicesTypes extends React.Component {
  public render() {
    return (
      <section className={CSS['services-types']}>
        <div className={`${CSS['services-types-list']} ${main['container']}`}>
          <div className={`${CSS['services-type']} ${CSS['rent-space']}`}>
            <i className={`${CSS['rent']} ${CSS['services-type-icon']}`}/>
            <span className={CSS['services-type-title']}>Хочу снять/купить<br/> помещение</span>
          </div>
          <div className={`${CSS['services-type']} ${CSS['pass-space']}`}>
              <i className={`${CSS['pass']} ${CSS['services-type-icon']}`}/>
            <span className={CSS['services-type-title']}>Сдать в аренду или продать помещение, бизнес</span>
          </div>
        </div>
      </section>
    )
  }
}


