import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha'

export class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
       isVerified: false
    }
  }

  recaptchaLoaded(){
    console.log('success')
  }
  handleSubscribe(){
    if(this.state.isVerified){
      alert('Success.! You are Human');
    }else{
      alert('Please check you are Human')
    }
  }
  verifyCallback(response){
    if(response){
      this.setState({
        isVerified: true
      })
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="email" />
        <button  onClick={this.handleSubscribe}>
          Click
        </button>
        <Recaptcha
          sitekey="6LccWv8UAAAAABPk9WEi3ZRutBsOBfCta9mhtODB"
          render="explicit"
          verifyCallback={this.verifyCallback}
          onloadCallback={this.recaptchaLoaded}
        />
      </div>
    )
  }
}

export default App
