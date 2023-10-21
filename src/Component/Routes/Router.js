import React from 'react'
import {
  BrowserRouter as Router, Route, Routes, BrowserRouter,
} from 'react-router-dom'
import Sidebar from '../Layout/Sidebar'
import Header from '../Layout/Header'
import PageLayout from '../Layout/PageLayout'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
// import Dashboard from '../FunctionLayout/Dashboard'
import Login from '../Authmodule/Login'


// import Userdata from '../Page/Dashboard/Userdata'
 /* <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Userdata />} />
          </Route>*/

function Path() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route path="/Header" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/PageLayout" element={<PageLayout />} />

        

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path
