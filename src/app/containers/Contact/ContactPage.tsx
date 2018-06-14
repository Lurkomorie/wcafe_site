/* tslint:disable */
import * as React from 'react';
import { GoogleMap,Marker, withGoogleMap,withScriptjs} from 'react-google-maps';

const CSS = require('./contacts.css');
const main = require('../../css/main.css');

const MyMapComponent = withScriptjs(withGoogleMap(() =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 59.9385, lng: 30.3701 }}
    >
    <Marker position={{ lat: 59.9385, lng: 30.3701 }}
            icon={require('../../../img/ballon.png')}
        />
    </GoogleMap>
))

class ContactPage extends React.Component {
  public render() {
    return (
        <div>
            <section className={CSS['contacts']}>
                <div className={main['container']}>
                    <div className={CSS['breadcrumbs']}>
                        <ul className={CSS['breadcrumbs-list']}>
                            <li className={CSS['breadcrumbs-item']}>
                                <a href='#' className={CSS['breadcrumbs-link']}>Главная</a>
                            </li>
                            <li className={CSS['breadcrumbs-item']}>
                                <span className={CSS['breadcrumbs-link']}>Контакты</span>
                            </li>
                        </ul>
                    </div>
                    <div className={CSS['contacts-title']}>Контакты</div>
                    <div className={`${CSS['contacts-item']} ${CSS['contacts-adress']}`}>
                        <b>Офис:</b>
                        <p>г. Санкт-Петербург, Греческий проспект, дом 29</p>
                    </div>
                    <div className={`${CSS['contacts-item']} ${CSS['contacts-phone']}`}><b>+7 (812) 640-80-18</b></div>
                    <div className={`${CSS['contacts-item']} ${CSS['contacts-mail']}`}><b>info@worldcafe.ru</b></div>
                </div>
            </section>

            <section className = 'map' >
                <MyMapComponent googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `470px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}/>
            </section>
        </div>

    )
  }
}

export { ContactPage }
