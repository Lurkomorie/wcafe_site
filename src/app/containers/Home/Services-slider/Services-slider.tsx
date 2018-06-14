/* tslint:disable */
import * as React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';

const servicesS = require('./services-slider.css');
const main = require('../../../css/main.css');

import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot} from 'pure-react-carousel';

export default class ServicesSlider extends React.Component{
  public render() {
    const empty = " ";
    return (
      <section className={servicesS['services-slider']}>
        <div className={servicesS['services-slider-list']}>
          <div className={main['wrapper-overlay']}>
            <div className={main['overlay-effect']}/>
            <CarouselProvider naturalSlideWidth={100}
                              naturalSlideHeight={35.25} totalSlides={3}>
              <Slider>
                <Slide index={0}>
                  <div className={`${servicesS['services-slide']} ${servicesS['sr-sl-1']}`}>
                    <div className={`${servicesS['services-slide-text']} ${main['container']}`}>
                      <div className={servicesS['services-slide-title']}>Название услуги будет тут</div>
                      <div className={servicesS['services-slide-descr']}>То есть, картинки должны меняться вместе с услугами.
                        Плюс,<br/>
                        так же как и на сайте банка должны быть кружочки, нажав на<br/>
                        который можно выбрать нужную картинку.
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className={`${servicesS['services-slide']} ${servicesS['sr-sl-1']}`}>
                    <div className={`${servicesS['services-slide-text']} ${main['container']}`}>
                      <div className={servicesS['services-slide-title']}>Название услуги будет тут</div>
                      <div className={servicesS['services-slide-descr']}>То есть, картинки должны меняться вместе с услугами.
                        Плюс,<br/>
                        так же как и на сайте банка должны быть кружочки, нажав на<br/>
                        который можно выбрать нужную картинку.
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className={`${servicesS['services-slide']} ${servicesS['sr-sl-1']}`}>
                    <div className={`${servicesS['services-slide-text']} ${main['container']}`}>
                      <div className={servicesS['services-slide-title']}>Название услуги будет тут</div>
                      <div className={servicesS['services-slide-descr']}>То есть, картинки должны меняться вместе с услугами.
                        Плюс,<br/>
                        так же как и на сайте банка должны быть кружочки, нажав на<br/>
                        который можно выбрать нужную картинку.
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className={servicesS['services-slider-nav']}>
                <ButtonBack className={servicesS['services-slider-prev']}>{empty}</ButtonBack>
                <ButtonNext className={servicesS['services-slider-next']}>{empty}</ButtonNext>
              </div>
              <div className={servicesS['services-slider-dots']}>
                <Dot children={null} className={servicesS['services-slider-dot']} slide={0}/>
                <Dot children={null} className={servicesS['services-slider-dot']} slide={1}/>
                <Dot children={null} className={servicesS['services-slider-dot']} slide={2}/>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </section>
    );
  }
}



/*export default class ServicesSlider extends React.Component{
  public render() {
    return (
        <section className={servicesS['services-slider']}>
            <div className={servicesS['services-slider-list']}>
                <div className={main['wrapper-overlay']}>
                    <div className={main['overlay-effect']}/>
                    <div className={`${servicesS['services-slide']} ${servicesS['sr-sl-1']}`}>
                        <div className={`${servicesS['services-slide-text']} ${main['container']}`}>
                            <div className={servicesS['services-slide-title']}>Название услуи будет тут</div>
                            <div className={servicesS['services-slide-descr']}>То есть, картинки должны меняться вместе с услугами.
                                Плюс,<br/>
                                    так же как и на сайте банка должны быть кружочки, нажав на<br/>
                                    который можно выбрать нужную картинку.
                            </div>
                        </div>
                    </div>
                    <div className={servicesS['services-slider-nav']}>
                        <div className={servicesS['services-slider-prev']}/>
                        <div className={servicesS['services-slider-next']}/>
                    </div>
                    <div className={servicesS['services-slider-dots']}>
                        <div className={`${servicesS['services-slider-dot']} ${servicesS['active']}`}/>
                        <div className={servicesS['services-slider-dot']}/>
                        <div className={servicesS['services-slider-dot']}/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
*/
