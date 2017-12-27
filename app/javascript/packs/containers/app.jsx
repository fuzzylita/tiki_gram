import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

import Header from '../components/header'
import Footer from '../components/footer'
import FavoritesList from '../components/favorites_list'
import ImageList from '../components/image_list'
import ImageDetail from './image_detail'

import { setSession } from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(setSession)
  }

  render() {
    return (
      <Router >
        <div>
        <ToastContainer />
          <Header isLoggedIn={this.props.isLoggedIn} currentUser={this.props.userInfo}/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={FavoritesList} />
              <Route path="/all" component={ImageList} />
              <Route path="/image/:id" component={ImageDetail} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

 const mapStateToProps = (state) => {
   return {
      isLoggedIn: state.session.isLoggedIn,
      userInfo: state.session.userInfo
    }
 }

 export default connect(mapStateToProps)(App)
