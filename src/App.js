import React from 'react'
import Router from './Component/Routes/Router';
import { ToastContainer } from "react-toastify";
import '../src/Component/Appstyle/Base.scss';
//import '../src/Component/Appstyle/Platform.sccs'

export default class App extends React.Component {
   
    render() {
        return (
            <div>
                <Router />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    closeButton={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    icon={true}
                    toastStyle={{ background: '#0B649D', color: '#fff', fontWeight: 500 }}
                    theme="colored"
                />
            </div>
        )
    }
}
