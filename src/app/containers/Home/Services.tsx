/* tslint:disable */
import * as React from 'react';

const CSS = require('./services.css');
const main = require('../../css/main.css');

interface IServiceProps {
  title: string
  description: string
  style: string
}

const Item = ( props : IServiceProps) => {
  return (
    <div className={`${CSS['services-item']} ${CSS[props.style]}`}>
      <div className={CSS['services-info']}>
        <div className={CSS['services-title']}>{props.title}</div>
        <div className={CSS['services-descr']}>{props.description}
        </div>
      </div>
    </div>
  )
}

const Rent = () => {
  return (
      <div className={`${CSS['services-subsection']} ${CSS['rent']}`}>
      <div className={CSS['services-subsection-title']}>Аренда</div>
        <Item title="Пустые помещения"
              description="В эту категорию относятся помещения в которых нет мебели и оборудования."
              style="place-for-restaurant"/>
        <Item title="Готовые рестораны"
              description="Помещения с оборудованием и мебелью."
              style="restaurant-active"/>
        <Item title="Столовые на предприятиях"
              description="Помещения в бизнес-центрах, заводах и режимных предприятиях"
              style="dining-rooms"/>
    </div>
  )
}



const Place = () =>{
  return (
      <div className={`${CSS['services-subsection']} ${CSS['place']}`}>
      <div className={CSS['services-subsection-title']}>Покупка помещения в собственность</div>
        <Item title="Готовый ресторан"
              description="Полностью готовый ресторан с помещением в собственность."
              style='place-restaurant-active'/>
        <Item title="Помещение свободного назначения"
              description="Помещения в собственность для инвестиций или самостоятельной работы."
              style="place-free"/>
    </div>
  )
}

const Biz = () => {
  return (
    <div className={`${CSS['services-subsection']} ${CSS['biz']}`}>
      <div className={CSS['services-subsection-title']}>Покупка бизнеса</div>
      <Item title="Покупка бизнеса"
            description="К этой категории относятся полностью действующий бизнес"
            style="biz-buy"/>
    </div>
  )
}

export default class Services extends React.Component {
  public render () {
    return (
      <section className={CSS['services']}>
        <div className={main['container']}>
          <div className={CSS['services-list']}>
            <Rent/>
            <Place/>
            <Biz/>
          </div>
        </div>
      </section>
    )
  }
}
