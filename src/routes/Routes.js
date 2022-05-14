import React from "react"
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Cookies from 'js-cookie'
import Login from "../auth/login/Login"
import Register from "../auth/register/Register"
import SetDashboard from "../layout/dashboard/SetDashboard"
import Home from "../layout/landing/Home"
import SetLanding from "../layout/landing/SetLanding"
import Dashboard from "../page/Dashboard/Dashboard"
import DetailsHome from "../page/detail-home/DetailsHome"
import { LowonganProvider } from "../context/JobContext"
import ListDataDashboard from "../page/list-data-dashboard/ListDataDashboard"
import JobVacancy from "../page/job-vacanvy/JobVacancy"



const  Routes = () => {
    
    const LoginRoute = ({ ...props }) => {

        if (Cookies.get('token') !== undefined) {
            return <Redirect to="/dashboard" />
        } else if (Cookies.get('token') === undefined) {
            return <Route {...props} />
        }

    }
    const DashboardRoute = ({ ...props }) => {

        if (Cookies.get('token') !== undefined) {
            return <Route {...props} />
        } else if (Cookies.get('token') === undefined) {
            return <Redirect to="/login" />
        }

    }

    const ListDataRoute = ({ ...props }) => {

        if (Cookies.get('token') !== undefined) {
            return <Route {...props} />
        } else if (Cookies.get('token') === undefined) {
            return <Redirect to="/login" />
        }

    }

    return(
        <>
        <Router>
            <LowonganProvider>
            
            <Switch>
                <Route path={'/'} exact >
                    <SetLanding>
                    <Home/> 
                    </SetLanding>
                </Route>
                <Route path={'/job-vacancy'} exact >
                <SetLanding>
                    <JobVacancy/>
                    </SetLanding>
                </Route>
                <Route path={'/job-vacancy/:slug'} exact >
                    <DetailsHome/>
                </Route>
                <LoginRoute path={'/login'} exact >
                    <Login/>
                </LoginRoute>
                <Route path = {'/register'} exact >
                    <Register/>
                </Route>
                <DashboardRoute path={'/dashboard'} exact >
                    <SetDashboard>
                        <Dashboard/>
                    </SetDashboard>
                </DashboardRoute>
                <ListDataRoute path = {'/dashboard/list-job-vacancy'} exact >
                    <ListDataDashboard/>
                </ListDataRoute>

            </Switch>
            </LowonganProvider>
            
        </Router>
        </>
    )
}

export default Routes