import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/header'
import Footer from '../components/footer'
import ImageList from '../components/image_list'
import Image from './image'

import { setSession } from '../actions'

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.dispatch(setSession)
  }

  render() {
    return (
      <Router >
        <div>
          <Header isLoggedIn={this.props.isLoggedIn} currentUser={this.props.userInfo}/>
          <div className="container">
            <Route path="/" component={ImageList} />
            {/* <Route path="/" component={FindTikis} />*/}
            <Route path="/image" component={Image} />
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
