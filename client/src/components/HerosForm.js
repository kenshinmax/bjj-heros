import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { validateHeroFields, validateHeroFieldsSuccess, validateHeroFieldsFailure } from '../actions'
import { createHero, createHeroSuccess, createHeroFailure } from '../actions'
import renderField  from './renderField'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

//Client side validation
function validate(values) {
  const errors = {};

  if (!values.firstname || values.firstname.trim() === '') {
    errors.firstname = 'Enter a First name';
  }
  if (!values.lastname || values.lastname.trim() === '') {
    errors.lastname = 'Enter Last name';
  }

  return errors;
}
const asyncValidate = (values, dispatch) => {
	return dispatch(validateHeroFields(values))
      .then((result) => {
   	  
      //Note: Error's "data" is in result.payload.response.data
      // success's "data" is in result.payload.data
      if (!result.payload.response) { //1st onblur
        return;
      }
      
      let {data, status} = result.payload.response;
      //if status is not 200 or any one of the fields exist, then there is a field error
      if (status != 200) {
        //let other components know of error by updating the redux` state
        dispatch(validateHeroFieldsFailure(data));
        throw data; //throw error
      } else {
        //let other components know that everything is fine by updating the redux` state
        dispatch(validateHeroFieldsSuccess(data)); //ps: this is same as dispatching RESET_USER_FIELDS
      }
      
    });
}

const validateAndCreatePost = (values, dispatch) => {
	return dispatch(createHero(values))
	  .then(result => {
           if(result.payload.response && result.payload.status!=200){
           	  dispatch(createHeroFailure(result.payload.response.data))
           }
           // let other components know all is ok
           dispatch(createHeroSuccess(result.payload.data))
           dispatch(push('/'))
	    } 
	  )
}

class HerosForm extends Component {
	componentWillMount() {
	    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
	    //always reset that global state back to null when you REMOUNT
	    this.props.resetMe();
	 }

	componentWillReceiveProps(nextProps) {
	    /*if (nextProps.newHero.post && !nextProps.newHero.error) {
	      this.context.router.push('/');
	    }
	    */
	}

	renderError (newHero){
     if(newHero && newHero.err && newHero.err.message){
     	return (
           <div className="alert alert-danger">
             { newHero ? newHero.error.message : '' }
           </div>
     	)
     } else {
     	return <span></span>
     }
	}
	render() {
		const {handleSubmit, pristine, reset, submitting, newHero} = this.props;

		return (
			<div className='container'>
			 { this.renderError(newHero) }
	         <form className="add-hero-form" onSubmit={ handleSubmit(validateAndCreatePost) }>
	             <Field
                   name="firstname"
                   type="text"
                   component={ renderField }
                   label="First*" />
                 <Field
                   name="lastname"
                   type="text"
                   component={ renderField }
                   label="Last*" />
	            <Field
                   name="nickname"
                   type="text"
                   component={ renderField }
                   label="Nickname" />
                <Field
                   name="rank"
                   type="text"
                   component={ renderField }
                   label="Rank" />
	            <Field
                   name="association"
                   type="text"
                   component={ renderField }
                   label="Association" />
	            <Field
                   name="division"
                   type="text"
                   component={ renderField }
                   label="Division" />
	           <div className="button-container">
               <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={pristine || submitting}>
                   Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                
                <Link
                  to="/"
                  className="btn btn-error"> Cancel
                </Link>
              </div>
	         </form>
	       </div>
		)
	}
}
export default reduxForm({
	form: 'HerosForm',
	validate,
	//asyncValidate
})(HerosForm)