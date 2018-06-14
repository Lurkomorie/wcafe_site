/* tslint:disable */
import * as React from 'react';

const CSS = require('./about.css');
const clients = require('./clients.css');
const main = require('../../css/main.css');

class AboutPage extends React.Component {
    public render() {
        return (
            <div>
                <section className={CSS['about']}>
                    <div className={`${main['container']} ${CSS['about-container']}`}>
                        <div className={CSS['about-img-right']}>
                            <img className={CSS['About-logo']} src={require('./i/logo.png')}/>
                        </div>
                        <div className={CSS['about-text-left']}>
                            <p>- лидер рынка по аренде, продаже и управлению коммерческой<br/> недвижимостью в сфере
                                ресторанного бизнеса.</p>
                            <p>Оказываем любую юридическую поддержку рестораторам,<br/>
                                в том числе получение лицензии на алкоголь <br/>
                                и регистрацию договора аренды в УФРС.</p>
                        </div>
                    </div>
                </section>

                <section className={main['container']}>
                    <div className={`${clients['clients']} ${CSS['about-clients']}`}>
                        <div className={CSS['about-clients-title']}>Более 1400 постоянных клиентов</div>
                        <div className={clients['clients-list']}>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/1.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/2.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/3.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/4.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/5.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/6.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/7.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/8.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/9.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/10.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/11.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/12.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/13.jpg')}/></div>
                            <div className={clients['clients-item']}><img src={require('../Home/i/clients/14.jpg')}/></div>
                        </div>
                    </div>
                </section>

                <section className={CSS['estimate']}>
                    <div className={`${main.container} ${CSS['estimate-container']}`}>
                        <div className={CSS['about-img-right']}><img src={require('./i/estimate.png')}/></div>
                        <div className={CSS['about-text-left']}>
                            Мы проводим оценку и знаем сколько <br/>
                            действительно стоит помещение.
                        </div>
                    </div>
                </section>

                <section className={CSS['ad-placement']}>
                    <div className={`${main.container} ${CSS['ad-placement-container']}`}>
                        <div className={CSS['about-img-right']}><img src={require('./i/ad-placement.png')}/></div>
                        <div className={CSS['about-text-left']}>
                            <p className={CSS['ad-big-text']}><b>Наши объявления размещены более чем в
                                30 интернет и офлайн ресурсах.</b></p>
                            <p className={CSS['ad-small-text']}>
                                О Вашем предложение в кротчайшие сроки узнает огромное количество потенциальных
                                арендаторов.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={CSS['partnership']}>
                    <div className={main['container']}>
                        Мы сотрудничаем более чем с <b>1000</b> бизнес-центров<br/> и торгово развлекательных
                        комплексов.
                    </div>
                </section>

                <section className={CSS['confidentiality']}>
                    <div className={main['container']}>
                        <div className={CSS['confidentiality-title']}>По многим объектам работаем конфиденциально, в связи с
                            тем, что:
                        </div>
                        <div className={CSS['confidentiality-list']}>
                            <div className={`${CSS['confidentiality-item']} ${CSS['eye-icon']}`}>
                                Собственники не хотят открыто афишировать на рынке о предложении;
                            </div>
                            <div className={`${CSS['confidentiality-item']} ${CSS['cup-icon']}`}>
                                Большинство из наших предложений являются действующими точками питания,
                                сотрудники которых не должны знать о желании собственника сменить арендатора.
                            </div>
                        </div>
                    </div>
                </section>

                <section className={CSS['legal-features']}>
                    <div className={`${main['container']} ${CSS['legal-features-container']}`}>
                        <div className={CSS['legal-features-text']}>
                            <div className={CSS['legal-features-caption']}>Знаем все юридические тонкости</div>
                            <p>для защиты интересов арендодателя и арендатора</p>
                        </div>
                        <div className={CSS['legal-features-img']}>
                            <img src={require('./i/ur-uslugi.png')}/>
                        </div>
                    </div>
                </section>

                <section className={CSS['experience']}>
                    <div className={`${main['container']} ${CSS['experience-container']}`}>
                        <div className={CSS['experience-img']}><img src={require('./i/map.png')}/></div>
                        <div className={CSS['experience-text']}>Более 1800 успешных сделок
                            по аренде и продаже ресторанов.
                        </div>
                    </div>
                </section>

                <section className={CSS['about-services']}>
                    <div className={CSS['about-services-title']}>Мир кафе так же является Управляющей компанией.</div>
                    <div className={CSS['about-services-descr']}>Мы решаем следующие задачи</div>
                    <div className={CSS['about-services-list']}>
                        <div className={`${CSS['about-services-item']} ${CSS['hand-icon']}`}>
                            <b>Контроль своевременной оплаты аренды, коммунальных услуг</b>
                            <p>Вы получаете профессиональное юредическое сопровождение</p>
                        </div>
                        <div className={`${CSS['about-services-item']} ${CSS['list-icon']}`}>
                            <b>Полный контроль над помещением</b>
                            <p>Жалобы соседей<br/>
                                Вопросы ЖКХ<br/>
                                Вопросы арендатора
                            </p>
                        </div>
                        <div className={`${CSS['about-services-item']} ${CSS['search-icon']}`}>
                            <b>Поиски арендатора</b>
                            <p>Оценка ликвидности помещения, размещение на рекоамных
                                площадках, умение работать конфиденциально.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export {AboutPage};

