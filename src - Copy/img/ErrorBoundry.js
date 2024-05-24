import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

constructor(){
    super();
    this.state = {hasError:false}
}

componentDidCatch(e){
    console.log(e);
};
static getDerivedStateFromError(){
    return {hasError:true}
}
  render() {
return this.state.hasError ? "erroe":this.props.children
    
    return (
      <div>ErrorBoundry</div>
    )
  }
}
