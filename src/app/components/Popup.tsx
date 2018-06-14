/* tslint:disable */
import * as React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';

const CSS = require('./form.css');

import validator from 'validator';
const required = (value) => {
  if (!value.toString().trim().length) {
    return 'require';
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};


export default class Popup extends React.Component <any, any> {
constructor(props: any) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = {
    formValues: {},
  }
}

public handleChange(event : any) {
  event.preventDefault();
  const formValues = this.state.formValues;
  const name = event.target.name;
  const value = event.target.value;

  formValues[name] = value;

  this.setState({formValues})
}

public handleSubmit(event : any) {
  event.preventDefault();
  console.log(this.state.formValues);
}

  public render() {
    return (
      <div className={CSS['modal-overlay']}>
        <Form className={CSS['modal-form']}>
          <div className={CSS['modal-form-close']}>
            <i className={CSS['modal-form-close-icon']} onClick={this.props.closePopup}/>
          </div>
          <div className={CSS['modal-form-title']}>Форма заявки</div>
          <div className={CSS['modal-form-info']}>Для того, что бы менеджер мог с Вами связаться, заполните следующие пункты.
          </div>
          <Input className={`${CSS['modal-form-input']} ${CSS['modal-form-name']}`} name='name' type='text' placeholder='Ваше имя' onChange={this.handleChange} validations={[required]}/>
          <Input className={`${CSS['modal-form-input']} ${CSS['modal-form-phone']}`} name='phone' type='text' placeholder='Телефон' onChange={this.handleChange} validations={[required]}/>
          <Input className={`${CSS['modal-form-input']} ${CSS['modal-form-mail']}`} type='text' name='mail' placeholder='Email' onChange={this.handleChange} validations={[required, email]}/>
          <Textarea className={`${CSS['modal-form-input']} ${CSS['modal-form-comment']}`} name='comment' placeholder='Комментарий' onChange={this.handleChange}/>
          <Input className={CSS['modal-form-submit']} type='submit' value='Отправить' onClick={(event) => {this.props.closePopup(); this.handleSubmit(event);}}/>
        </Form>
      </div>
    )
  }
}
