/* tslint:disable */
import * as React from 'react';
import { Link } from 'react-router';
import Test from './Test';

const CSS = require('./list-search.css');
const cardS = require('./card.css');
const main = require('../../css/main.css');

const data = require('./data.json');

interface IPropertyList {
  title: string,
  mobTitle: string,
  id: number,
  price: string,
  description: string,
  disctrict: string,
  floor: string,
  area: number,
  equipment: string,
  extraction: string,
  power: string,
  furniture: string,
}


const Obj = (props: IPropertyList) => {
  return (<div className={CSS['objects-item']}>

    <Link to={{pathname: '/card/'+props.id}} className={`${CSS['item-caption']} ${CSS['mobile-info-show']}`}>
      <span className={`${CSS['item-caption-text']} ${main['crop-text']}`}> </span>
      <div className={CSS['item-caption-price']}>
        <span className={CSS['item-caption-amount']}>{props.mobTitle}</span>
        <span className={CSS['item-caption-number']}>№{props.id}</span>
      </div>
    </Link>
    <Link to={{pathname: '/card/'+props.id}} className={CSS['item-img']}>
      <div className={CSS['item-slider-container']}>
        <span className={CSS['item-slider-dot']}/>
        <span className={CSS['item-slider-dot']}/>
        <span className={CSS['item-slider-dot']}/>
        <span className={CSS['item-slider-dot']}/>
        <span className={CSS['item-slider-dot']}/>
        <ul className={CSS['item-slider-list']}>
          <li className={CSS['item-slider']}>
            <img src={require('./i/item-img.jpg')}/>
          </li>
          <li className={CSS['item-slider']}>
            <img src={require('./i/item-img-test.jpg')}/>
          </li>
          <li className={CSS['item-slider']}>
            <img src={require('./i/item-img.jpg')}/>
          </li>
          <li className={CSS['item-slider']}>
            <img src={require('./i/item-img-test.jpg')}/>
          </li>
          <li className={CSS['item-slider']}>
            <img src={require('./i/item-img.jpg')}/>
            <div className={CSS['item-slider-more']}>
              Ещё<br/>2 фото
            </div>
          </li>
        </ul>
        <span className={CSS['item-slider-counter']}>
              <i className={CSS['icon-photo']}>6</i>
              </span>
      </div>
    </Link>
    <div className={CSS['item-description']}>
      <Link to={{pathname: '/card/'+props.id}} className={CSS['item-caption']}>
              <span className={`${CSS['item-caption-text']} ${main['crop-text']}`}>{props.title}</span>
        <div className={CSS['item-caption-price']}>
          <span className={CSS['item-caption-amount']}>{props.price}</span>
          <span className={CSS['item-caption-number']}>№{props.id}</span>
        </div>
      </Link>
      <div className={`${CSS['item-info']} ${CSS['mobile-info-show']}`}>
        <div className={CSS['item-info-row']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
          <span className={`${CSS['item-info-name']} ${CSS['item-info-name-pad']}`}>Столовая<br/> на предприятии</span>
        </div>
      </div>
      <div className={CSS['item-descr']}>
        <p></p>
        <div className={CSS['item-info']}>
          <div className={CSS['item-info-column']}>
            <div className={CSS['item-info-row']}>
              <span className={CSS['item-info-name']}>Район:</span>
              <span className={CSS['item-info-value']}>{props.disctrict}</span>
            </div>
            <div className={CSS['item-info-row']}>
              <span className={CSS['item-info-name']}>Этаж:</span>
              <span className={CSS['item-info-value']}>{props.floor}</span>
            </div>
            <div className={CSS['item-info-row']}>
              <span className={CSS['item-info-name']}>Площадь</span>
              <span className={CSS['item-info-value']}>{props.area}м2</span>
            </div>
          </div>
          <div className={CSS['item-info-column']}>
            <div className={CSS['item-info-row']}>
              <span className={CSS['item-info-name']}>Оборудование:</span>
              <span className={CSS['item-info-value']}>{props.equipment}</span>
            </div>
            <div className={CSS['item-info-row']}>
              <span className={CSS['item-info-name']}>Вытяжка:</span>
              <span className={CSS['item-info-value']}>{props.extraction}</span>
            </div>
            <div className={CSS['item-info-row']}>
              <span className={CSS['item-info-name']}>Мощность:</span>
              <span className={CSS['item-info-value']}>{props.power}</span>
            </div>
          </div>
          <div className={`${CSS['item-info-column']} ${CSS['item-info-column-hidden']}`}>
            <div className={CSS['item-info-row']}>
              <span className={CSS['item-info-name']}>Мебель:</span>
              <span className={CSS['item-info-value']}>{props.furniture}</span>
            </div>
            <div className={CSS['item-info-row']}>
              <i className={`${cardS['card-info-icon']} ${cardS['icon-dining-room']}`}/>
              <span className={`${CSS['item-info-name']} ${CSS['item-info-name-pad']}`}>Столовая<br/> на предприятии</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const ObjectsList = () => {
  return (
    <section className={CSS['objects-list']}>
      {
        data.map(function(card){
          return <Obj title={card.title}
                      mobTitle={card.mobTitle}
                      id={card.id}
                      price={card.price}
                      description={card.description}
                      disctrict={card.disctrict}
                      floor={card.floor}
                      area={card.area}
                      equipment={card.equipment}
                      extraction={card.extraction}
                      power={card.power}
                      furniture={card.furniture}/>;
        })
      }
    </section>
  )
}

const Filter = () => {
    return (
      <div className={CSS['filter']}>
        <form className={CSS['filter-form']}>
          <div className={CSS['filter-form-title']}>Поиск объектов</div>
          <label className={CSS['filter-label']}>Тип</label>
          <div className={CSS['filter-line']}>
            <select className={CSS['filter-field']} id='type'>
              <option value='Любой'>Любой</option>
              <option value='Район'>Тип</option>
            </select>
          </div>
          <label className={CSS['filter-label']}>Район</label>
          <div className={CSS['filter-line']}>
            <select className={CSS['filter-field']} id='location' name='location'>
              <option value='Любой'>Любой</option>
              <option value='Район'>Район</option>
            </select>
            <button className={CSS['filter-add-btn']}>+</button>
          </div>
          <span className={CSS['filter-label']}>Площадь</span>
          <div className={CSS['filter-line']}>
            <input className={`${CSS['filter-field']} ${CSS['filter-input']}`} type='text' placeholder='от'/>
              <input className={`${CSS['filter-field']} ${CSS['filter-input']}`} type='text' placeholder='до'/>
                <span className={CSS['filter-unit']}>м2</span>
          </div>
          <span className={CSS['filter-label']}>Цена</span>
          <div className={CSS['filter-line']}>
            <input className={`${CSS['filter-field']} ${CSS['filter-input']}`} type='text' placeholder='от'/>
              <input className={`${CSS['filter-field']} ${CSS['filter-input']}`} type='text' placeholder='до'/>
                <span className={CSS['filter-unit']}>руб.</span>
          </div>
          <span className={CSS['filter-label']}>Мощность</span>
          <div className={CSS['filter-line']}>
            <input className={`${CSS['filter-field']} ${CSS['filter-input']}`} type='text' placeholder='от'/>
              <span className={`${CSS['filter-unit']} ${CSS['space-left']}`}>кВт</span>
              <span className={CSS['filter-empty-space']}/>
          </div>
          <div className={CSS['filter-line-check']}>
            <input type='checkbox' id='extract' value='extract' className={CSS['filter-checkbox']}/>
              <label className={CSS['filter-checkbox-label']}>Вытяжка</label>
          </div>
          <div className={CSS['filter-line-check']}>
            <input type='checkbox' id='muzic' value='muzic' className={CSS['filter-checkbox']}/>
              <label className={CSS['filter-checkbox-label']}>Громкая музыка</label>
          </div>
          <div className={CSS['filter-line-check']}>
            <input type='checkbox' id='elec' value='elec' className={CSS['filter-checkbox']}/>
              <label className={CSS['filter-checkbox-label']}>Оборудование</label>
          </div>
          <div className={CSS['filter-line-check']}>
            <input type='checkbox' id='furniture' value='furniture' className={CSS['filter-checkbox']}/>
              <label  className={CSS['filter-checkbox-label']}>Мебель</label>
          </div>
          <div className={`${CSS['mobile-show']} ${CSS['filter-search-result']}`}>Найдено 56 объектов</div>
          <button className={CSS['filter-button']} type='submit'>Искать</button>
        </form>
      </div>
    )
  }

const ListSearch = () => {
    return (
      <section className={CSS['list-search']}>
        <div className={`${main['container']} ${CSS['list-search-container']}`}>
          <button className={`${CSS['filter-button']} ${CSS['filter-show-button']} ${CSS['mobile-show']}`} type='submit'>Открыть фильтр</button>
        <ObjectsList/>
            <Filter/>
        </div>
      </section>
    )
}


class PropertyList extends React.Component {
  public render() {
    return (
      <div>
        TESTING///////////////
        <Test/>
        TESTING///////////////
          <ListSearch/>
      </div>
    )
  }}

  export {PropertyList}
