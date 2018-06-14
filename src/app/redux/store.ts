const appConfig = require('../../../config/main');
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import { IStore } from './IStore';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(history) {

    const middlewares: Redux.Middleware[] = [
        routerMiddleware(history),
        sagaMiddleware,
    ];

    /** Add Only Dev. Middlewares */
    if (appConfig.env !== 'production' && process.env.BROWSER) {
        const logger = createLogger();
        middlewares.push(logger);
    }

    const composeEnhancers = (appConfig.env !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store: Redux.Store<IStore> = createStore<IStore>(rootReducer, composeEnhancers(
        applyMiddleware(...middlewares),
    ));

    if (appConfig.env === 'development' && (module as any).hot) {
        (module as any).hot.accept('./reducers', () => {
            store.replaceReducer((require('./reducers')));
        });
    }
    return store;
}
