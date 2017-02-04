import React, {Component, PropTypes} from 'react';

import {col} from 'bootstrap';
import FormOne from './formOne';
import FormTwo from './formTwo';

class MainForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)

    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1
    })
  }

  handleSubmit(data) {
    window.alert("You submitted: " + JSON.stringify(data));
  }


  render() {
    const {onSubmit} = this.props;
    const {page} = this.state;
    return (
     <div className="container">
       <div className="mt-5">
         <h1 className="text-center">Signup Form</h1>
        {page === 1 && <FormOne onSubmit = {this.nextPage} />}
        {page === 2 && <FormTwo onSubmit = {this.handleSubmit} />}
      </div>
     </div>
   );
  }
}



export default MainForm;
