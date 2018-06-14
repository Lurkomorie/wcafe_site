const appConfig = require('../../../../config/main');
import '../../css/main.css';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import {default as Header} from '../../components/Header';
import {default as Footer} from '../../components/Footer';

class App extends React.Component<any, any> {
  public render() {
    return (
      <section>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        {this.props.children}
        <Footer/>
      </section>
    );
  }
}

export { App }
