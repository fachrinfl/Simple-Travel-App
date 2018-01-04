
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store/Store'
import MainPage from './src/MainPage'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainPage />
            </Provider>
        );
    }
}

export default App