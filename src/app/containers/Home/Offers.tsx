/* tslint:disable */
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CSS = require('./offers.css');
const main = require('../../css/main.css');

interface IItem {
  img: string,
  desc: string,
  price: string,
  category: string,
  district: string,
  area: string,
  extraction: string
}

const Item = (props : IItem) => {
  return (
      <a href='#' className={CSS['offers-item']}>
          <div className={CSS['offer-img']}><img src={require(`${props.img}`)}/></div>
        <div className={CSS['offer-descr']}>
          {props.desc}
        </div>
        <div className={CSS['offer-price']}>
          {props.price} руб/мес
        </div>
        <div className={CSS['offer-info']}>
          <div className={CSS['offer-info-row']}>
            <div className={CSS['offer-info-col']}>Категория:</div>
            <div className={CSS['offer-info-col']}>{props.category}</div>
          </div>
          <div className={CSS['offer-info-row']}>
            <div className={CSS['offer-info-col']}>Район:</div>
            <div className={CSS['offer-info-col']}>{props.district}</div>
          </div>
          <div className={CSS['offer-info-row']}>
            <div className={CSS['offer-info-col']}>Площадь:</div>
            <div className={CSS['offer-info-col']}>{props.area}</div>
          </div>
          <div className={CSS['offer-info-row']}>
            <div className={CSS['offer-info-col']}>Вытяжка:</div>
            <div className={CSS['offer-info-col']}>{props.extraction}</div>
          </div>
        </div>
      </a>
  )
}

export default class Offers extends React.Component {
  public render () {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1
    }
    return (
      <section className={CSS['offers']}>
        <div className={main['container']}>
          <div className={main['section-title']}>Интересные предложения</div>
          <Slider  className={CSS['offers-list']} {...settings}>
              <Item         img='./i/offers/1.png'
                            desc="Кафе/фаст-фуд возле метро Кировского района."
                            price="150 000"
                            category="Помещения под кафе"
                            district="Кировский"
                            area="144.7м2"
                            extraction="нет"/>
              <Item         img='./i/offers/2.png'
                            desc="Кафе/фаст-фуд возле метро Кировского района."
                            price="150 000"
                            category="Помещения под кафе"
                            district="Кировский"
                            area="144.7м2"
                            extraction="нет"/>
              <Item         img='./i/offers/3.png'
                            desc="Кафе/фаст-фуд возле метро Кировского района."
                            price="150 000"
                            category="Помещения под кафе"
                            district="Кировский"
                            area="144.7м2"
                            extraction="нет"/>
              <Item         img='./i/offers/4.png'
                            desc="Кафе/фаст-фуд возле метро Кировского района."
                            price="150 000"
                            category="Помещения под кафе"
                            district="Кировский"
                            area="144.7м2"
                            extraction="нет"/>
              <Item         img='./i/offers/1.png'
                            desc="Кафе/фаст-фуд возле метро Кировского района."
                            price="150 000"
                            category="Помещения под кафе"
                            district="Кировский"
                            area="144.7м2"
                            extraction="нет"/>
              <Item         img='./i/offers/2.png'
                            desc="Кафе/фаст-фуд возле метро Кировского района."
                            price="150 000"
                            category="Помещения под кафе"
                            district="Кировский"
                            area="144.7м2"
                            extraction="нет"/>
          </Slider>
          <a className={CSS['offers-view-all']} href='#'>Все помещения</a>
        </div>
      </section>
    )
  }
}
