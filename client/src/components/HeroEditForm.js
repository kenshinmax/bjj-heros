import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { validateHeroFields, validateHeroFieldsSuccess, validateHeroFieldsFailure } from '../actions'
import { updateHero, updateHeroSuccess, updateHeroFailure } from '../actions'
import renderField  from './renderField'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import HerosMenu  from './HerosMenu'
import CurrentOffers from './CurrentOffers'

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

const validateAndUpdatePost = (values, dispatch) => {
	console.log('Validate and update post', values)
	return dispatch(updateHero(values))
	  .then(result => {
           if(result.payload.response && result.payload.status!=200){
           	  dispatch(updateHeroFailure(result.payload.response.data))
              //reject(result.payload.response.data); //this is for redux-form itself
           	  //throw new SubmissionError(result.payload.response.data)
           }
           // let other components know all is ok
           dispatch(updateHeroSuccess(result.payload.data))
           dispatch(push('/'))
           //resolve();//this is for redux-form itself
	    } 
	  )
}


class HerosEditForm extends Component {

  constructor(props) {
    super(props)
    this.state = {isEditing: false};
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id != nextProps.id) {
      console.log("old hero", this.state.hero)
      this.setState({hero: nextProps.hero});
      console.log("hero has updated", this.state.hero)
    }
  }

  updateHeroState(event) {
    const field = event.target.name;
    const hero = this.state.hero;
    hero[field] = event.target.value;
    return this.setState({hero: hero});
  }

	componentWillMount() {
	    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
	    //always reset that global state back to null when you REMOUNT
	    //this.props.resetMe();
      this.props.fetchHero();
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
   
	 const {deleteHero, handleSubmit, pristine, reset, submitting, activeHero, onClick} = this.props;
   const id  = this.props.id
   const heros   = this.props.heroList
   const hero = heros.find(current => current.id === id)
   const headerStyle = { backgroundImage: `url(/styles/images/${hero.cover})` };
   

    if (this.state.isEditing) {
		 return (
			<div className='container'>
			 { this.renderError(activeHero) }
	         <form className="add-hero-form" onSubmit={ handleSubmit(validateAndUpdatePost) }>
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
                 <button onClick={onClick}>Cancel</button>
              </div>
	         </form>
	       </div>
		 )
    }
    return (
    
      <div className="hero-full">
      <HerosMenu heros={heros} />
        <div className="hero">
          <header style={headerStyle} />
          <div className="picture-container">
             <img alt={`${hero.firstname}'s profile`} src={`/styles/images/${hero.image}`} />
             <h2 className="name">{hero.firstname + ' ' + hero.lastname}</h2>
          </div>
          <section className="description">
                <p>First: {hero.firstname}</p>
                <p>Last: {hero.lastname}</p>
                <p>Nickname: {hero.nickname}</p>
                <p>Rank: {hero.rank}</p>
                <p>Association: {hero.association}</p>
                <p>Division: {hero.division}</p>
                 <CurrentOffers offer={{ "message": "Premium status"}} />
          </section>
         
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={deleteHero}>Delete</button>
        </div>
        <div className="navigateBack">
            <Link to="/">« Back to the index</Link>
          </div>
      </div>
    )

	}
}

function mapStateToProps(state, ownProps) {
    
    return {
        initialValues : state.items.heroList.heros.find(current => current.id === ownProps.id)
     }
}


export default connect( mapStateToProps )(
    reduxForm({
	    form: 'HerosEditForm',
     	validate,
      enableReinitialize : true
    })(HerosEditForm)
  );