/* tslint:disable */
import * as React from 'react';

import Offers from './Offers';
import ServicesTypes from './Service-types';
import Services from './Services';
import ServicesSlider from './Services-slider/Services-slider';

const CSS = require('./clients.css');
const main = require('../../css/main.css');

const Clients = () => {
  return (
    <section className={main['container']}>
      <div className={CSS['clients']}>
        <div className={main['section-title']}>Наши клиенты</div>
        <div className={CSS['clients-list']}>
          <div className={CSS['clients-item']}><img src={require('./i/clients/1.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/2.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/3.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/4.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/5.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/6.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/7.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/8.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/9.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/10.jpg')}/></div>
          <div className={CSS['clients-item']}><img src={require('./i/clients/11.jpg')}/></div>
          <div className={CSS['clients-item']}><img className={CSS.fix} src={require('./i/clients/12.jpg')}/></div>
        </div>
      </div>
    </section>
  )
}


class HomePage extends React.Component {
    public render()
    {
        return (
            <div>
                <Services/>
                <Offers/>
                <ServicesTypes/>
                <Clients/>
                <ServicesSlider/>
            </div>
        );
    }
}

export {HomePage}

