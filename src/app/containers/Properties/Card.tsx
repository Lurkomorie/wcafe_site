/* tslint:disable */
import * as React from 'react';
import Popup from '../../components/Popup';

const CSS = require('./card.css');

const data = require('./data.json');

function getCardById(id) {
  for (var i = 0; i < data.length; i++){
    // look for the entry with a matching `code` value
    if (data[i].id == id.props.id){
      return data[i];
    }
  }
}
/*
interface IProperty {
    value: string,
    rName: string,
    icon: string
}

interface IDeal {
    id : number,

}


const propConvert = (props : IProperty) => {
    if (props.value != null) {
        if(props.icon == '0'){
            return (
                <div className={CSS['card-info-cell']}>
                    <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
                    <span className={CSS['card-info-cell-name']}>{props.rName}</span>
                </div>
            )
        }
        else if (props.icon == '1'){
            return (
                <div className={CSS['card-info-cell']}>
                    <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
                    <span className={CSS['card-info-cell-name']}>{props.rName}:</span>
                    <span className={CSS['card-info-cell-value']}>{props.value}</span>
                </div>
            )
        }
    }
    else return null
}*/

interface ICard {
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
  category: string,
  kitchenArea: number,
  ceiling: number,
  loudMusic: string,
  leasePrice: string,
  comission: string,
  bisPrice: string
}


const CardDetail = (props: ICard) => {
  return(
    <div className={CSS['card-details']}>
      <div className={CSS['card-title']}>{props.mobTitle}           <span className={CSS['card-num']}>№{props.id}</span>
      </div>
      <div className={CSS['card-slider']}>
        <img src={require('./i/slider.png')}/>
      </div>
      <div className={`${CSS['card-info']} ${CSS['card-info-show']}`}>
        <div className={CSS['card-info-price']}>{props.price}/мес</div>
        <div className={CSS['card-union-mobile']}>
          <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
            <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-name']}>Район:</span></div>
            <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-value']}>{props.disctrict}</span></div>
          </div>
          <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
            <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-name']}>Категория:</span></div>
            <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-value']}>{props.category}</span></div>
          </div>
        </div>
        <div className={`${CSS['card-info-row']} ${CSS['card-union-mobile']}`}>
          <div className={CSS['card-info-cell']}>
            <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
            <span className={CSS['card-info-cell-name']}>Столовая<br/> на предприятии</span>
          </div>
          <div className={CSS['card-info-cell']}>
              <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
            <span className={CSS['card-info-cell-name']}>Отдельное<br/> здание</span>
          </div>
        </div>
        <hr className={CSS['card-info-row-separator']}/>
        <div className={`${CSS['card-info-row']} ${CSS['card-info-row-union']}`}>
            <i className={`${CSS['card-info-icon']} ${CSS['icon-size']}`}/>
          <div className={CSS['card-info-cell']}>
            <span className={CSS['card-info-cell-name']}>Общая площадь:</span>
            <span className={CSS['card-info-cell-value']}>{props.area} м2</span>
          </div>
          <div className={CSS['card-info-cell']}>
            <span className={CSS['card-info-cell-name']}>Площадь кухни:</span>
            <span className={CSS['card-info-cell-value']}>{props.kitchenArea} м2</span>
          </div>
        </div>
        <hr className={CSS['card-info-row-separator']}/>
        <div className={CSS['card-info-row']}>
          <div className={CSS['card-info-cell']}>
            <i className={`${CSS['card-info-icon']} ${CSS['icon-floor']}`}/>
            <span className={CSS['card-info-cell-name']}>Этаж:</span>
            <span className={CSS['card-info-cell-value']}>{props.floor}</span>
          </div>
          <div className={CSS['card-info-cell']}>
              <i className={`${CSS['card-info-icon']} ${CSS['icon-roof']}`}/>
            <span className={CSS['card-info-cell-name']}>Потолок:</span>
            <span className={CSS['card-info-cell-value']}>{props.ceiling} м</span>
          </div>
        </div>
        <div className={CSS['card-info-row']}>
          <div className={CSS['card-info-cell']}>
              <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
            <span className={CSS['card-info-cell-name']}>Вытяжка:</span>
            <span className={CSS['card-info-cell-value']}>{props.extraction}</span>
          </div>
          <div className={CSS['card-info-cell']}>
              <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-elec']}`}/>
            <span className={CSS['card-info-cell-name']}>Мощность:</span>
            <span className={CSS['card-info-cell-value']}>{props.power}</span>
          </div>
        </div>
        <div className={CSS['card-info-row']}>
          <div className={CSS['card-info-cell']}>
              <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-volume']}`}/>
            <span className={CSS['card-info-cell-name']}>Громкая музыка:</span>
            <span className={CSS['card-info-cell-value']}>{props.loudMusic}</span>
          </div>
          <div className={CSS['card-info-cell']}>
              <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-elec']}`}/>
            <span className={CSS['card-info-cell-name']}>Оборудование:</span>
            <span className={CSS['card-info-cell-value']}>{props.equipment}</span>
          </div>
        </div>
        <div className={CSS['card-info-row']}>
          <div className={CSS['card-info-cell']}/>
          <div className={CSS['card-info-cell']}>
              <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-furniture']}`}/>
            <span className={CSS['card-info-cell-name']}>Мебель:</span>
            <span className={CSS['card-info-cell-value']}>{props.furniture}</span>
          </div>
        </div>
        <hr className={CSS['card-info-row-separator']}/>
        <div className={CSS['card-info-row']}>
          <span className={CSS['card-info-subtitle']}>
            <i className={`${CSS['card-info-icon']} ${CSS['icon-fin']}`}/>
            Условия и финансовые показатели:
          </span>
        </div>
          <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
          <div className={CSS['card-info-cell']}>
            <span className={CSS['card-info-cell-name']}>Стоимость бизнеса:</span>
            <span className={CSS['card-info-cell-value']}>{props.bisPrice} руб</span>
          </div>
          <div className={CSS['card-info-cell']}>
            <span className={CSS['card-info-cell-name']}>Стоимость аренды:</span>
            <span className={CSS['card-info-cell-value']}>{props.leasePrice} руб/мес</span>
          </div>
        </div>
          <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
          <div className={CSS['card-info-cell']}>
            <span className={CSS['card-info-cell-name']}>Комиссионные:</span>
            <span className={CSS['card-info-cell-value']}>{props.comission} руб</span>
          </div>
        </div>
      </div>
      <p>
        Аренда помещения под клуб, ресторан в отдельно стоящем 2-х этажном здании рядом с
        метро в Петроградском районе.</p>
      <p>В непосредственной близости большое скопление бизнес центров, стадион Петровский,
        станция метро. Рядом постоянно высокий пешеходный трафик. В помещении
        проведены все необходимые коммуникации.Общая площадь помещения - 500 м2,
        высота потолков 3,4м.</p>
      <p>Выделенная электрическая мощность - 60 кВт (можно увеличить). Установлена
        приточно-вытяжная вентиляционная система.</p><br/>

      <p>Арендная ставка - 950 000 рублей в месяц (в т.ч. НДС)
        Коммунальные услуги оплачиваются отдельно
      </p>
      <div className={`${CSS['card-profits-list']} ${CSS['card-mobile-hidden']}`}>
          <div className={`${CSS['card-profits-item']} ${CSS['icon-plus-1']}`}>
          Получить лицензию на алкоголь и решить все возможные трудности
        </div>
          <div className={`${CSS['card-profits-item']} ${CSS['icon-plus-2']}`}>
          Установить систему автоматизации по специальной цене
        </div>
          <div className={`${CSS['card-profits-item']} ${CSS['icon-plus-3']}`}>
          Закупить оборудование у наших партнеров на особенных условиях
        </div>
      </div>
    </div>
  )
}

const CardInfo = (props: ICard) => {
  return(
    <div className={`${CSS['card-info']} ${CSS['card-mobile-hidden']}`}>
      <div className={CSS['card-info-price']}>{props.price}/мес</div>
      <div className={CSS['card-union-mobile']}>
          <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
              <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-name']}>Район:</span></div>
              <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-value']}>{props.disctrict}</span></div>
          </div>
          <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
              <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-name']}>Категория:</span></div>
              <div className={`${CSS['card-info-cell']} ${CSS['no-pad']}`}><span className={CSS['card-info-cell-value']}>{props.category}</span></div>
          </div>
      </div>
      <div className={`${CSS['card-info-row']} ${CSS['card-union-mobile']}`}>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
          <span className={CSS['card-info-cell-name']}>Столовая<br/> на предприятии</span>
        </div>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
          <span className={CSS['card-info-cell-name']}>Отдельное<br/> здание</span>
        </div>
      </div>
      <hr className={CSS['card-info-row-separator']}/>

      <div className= {`${CSS['card-info-row']} ${CSS['card-info-row-union']}`}>
        <i className={`${CSS['card-info-icon']} ${CSS['icon-size']}`}/>
        <div className={CSS['card-info-cell']}>
          <span className={CSS['card-info-cell-name']}>Общая площадь:</span>
          <span className={CSS['card-info-cell-value']}>{props.area} м2</span>
        </div>
        <div className={CSS['card-info-cell']}>
          <span className={CSS['card-info-cell-name']}>Площадь кухни:</span>
          <span className={CSS['card-info-cell-value']}>{props.kitchenArea} м2</span>
        </div>
      </div>
      <hr className={CSS['card-info-row-separator']}/>
      <div className={CSS['card-info-row']}>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon-floor']}`}/>
          <span className={CSS['card-info-cell-name']}>Этаж:</span>
          <span className={CSS['card-info-cell-value']}>{props.floor}</span>
        </div>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon-roof']}`}/>
          <span className={CSS['card-info-cell-name']}>Потолок:</span>
          <span className={CSS['card-info-cell-value']}>{props.ceiling} м</span>
        </div>
      </div>
      <div className={CSS['card-info-row']}>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon-dining-room']}`}/>
          <span className={CSS['card-info-cell-name']}>Вытяжка:</span>
          <span className={CSS['card-info-cell-value']}>{props.extraction}</span>
        </div>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-elec']}`}/>
          <span className={CSS['card-info-cell-name']}>Мощность:</span>
          <span className={CSS['card-info-cell-value']}>{props.power}</span>
        </div>
      </div>
      <div className={CSS['card-info-row']}>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-volume']}`}/>
          <span className={CSS['card-info-cell-name']}>Громкая музыка:</span>
          <span className={CSS['card-info-cell-value']}>{props.loudMusic}</span>
        </div>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-elec']}`}/>
          <span className={CSS['card-info-cell-name']}>Оборудование:</span>
          <span className={CSS['card-info-cell-value']}>{props.equipment}</span>
        </div>
      </div>
      <div className={CSS['card-info-row']}>
        <div className={CSS['card-info-cell']}/>
        <div className={CSS['card-info-cell']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon']} ${CSS['icon-furniture']}`}/>
          <span className={CSS['card-info-cell-name']}>Мебель:</span>
          <span className={CSS['card-info-cell-value']}>{props.furniture}</span>
        </div>
      </div>
      <hr className={CSS['card-info-row-separator']}/>
      <div className={CSS['card-info-row']}>
        <span className={CSS['card-info-subtitle']}>
          <i className={`${CSS['card-info-icon']} ${CSS['icon-fin']}`}/>
          Условия и финансовые показатели:
        </span>
      </div>
      <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
        <div className={CSS['card-info-cell']}>
          <span className={CSS['card-info-cell-name']}>Стоимость бизнеса:</span>
          <span className={CSS['card-info-cell-value']}>{props.bisPrice} руб</span>
        </div>
        <div className={CSS['card-info-cell']}>
          <span className={CSS['card-info-cell-name']}>Стоимость аренды:</span>
          <span className={CSS['card-info-cell-value']}>{props.leasePrice} руб/мес</span>
        </div>
      </div>
      <div className={`${CSS['card-info-row']} ${CSS['small-pad']}`}>
        <div className={CSS['card-info-cell']}>
          <span className={CSS['card-info-cell-name']}>Комиссионные:</span>
          <span className={CSS['card-info-cell-value']}>{props.comission} руб</span>
        </div>
      </div>
    </div>
  )
}

interface IContainer {
  props: number;
}

class CardContainter extends React.Component <IContainer,any>{
    constructor() {
        super({props: 0});
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

  public render() {
    const card = getCardById(this.props);
    return(
      <div className={CSS['card-container']}>
        <CardDetail title={card.title}
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
                    furniture={card.furniture}
                    category={card.category}
                    kitchenArea={card.kitchenArea}
                    ceiling={card.ceiling}
                    loudMusic={card.loudMusic}
                    bisPrice={card.bisPrice}
                    leasePrice={card.leasePrice}
                    comission={card.comission}
        />
        <CardInfo title={card.title}
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
                    furniture={card.furniture}
                    category={card.category}
                    kitchenArea={card.kitchenArea}
                    ceiling={card.ceiling}
                    loudMusic={card.loudMusic}
                    bisPrice={card.bisPrice}
                    leasePrice={card.leasePrice}
                    comission={card.comission}/>
        <a onClick={this.togglePopup} className={`${CSS['card-call-order-button']} ${CSS['card-mobile-show']}`}>Заказать обратный звонок</a>
        <div className={`${CSS['card-profits-list']} ${CSS['card-mobile-show']}`}>
          <div className={`${CSS['card-profits-item']} ${CSS['icon-plus-1']}`}>
            Получить лицензию на алкоголь и решить все возможные трудности
          </div>
          <div className={`${CSS['card-profits-item']} ${CSS['icon-plus-2']}`}>
            Установить систему автоматизации по специальной цене
          </div>
          <div className={`${CSS['card-profits-item']} ${CSS['icon-plus-3']}`}>
            Закупить оборудование у наших партнеров на особенных условиях
          </div>
        </div>
      </div>
    )
  }
}

class Card extends React.Component <any, any> {
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

  public render(){
      let id = this.props.params;
    return(
      <section className={CSS['card']}>
        <div onClick={this.togglePopup} className={CSS['card-call-order']}>
          Заинтересовало предложение?
          <b>Закажите обратный звонок</b>
        </div>
          {this.state.showPopup ?
              <Popup
                  closePopup={this.togglePopup}
              />
              : null
          }
        <CardContainter props={id}/>
      </section>
    )
  }
}

export {Card}
