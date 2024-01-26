import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationPanel from './NavigationPanel'
import { Provider } from 'react-redux'
import store from '../redux/store'

const RootLayout = () => {
    return (
         
        <Provider store={store}>
      <NavigationPanel />
            <main>
            <Outlet />
            </main>
        </Provider>
    )
}

export default RootLayout