import React from 'react'
import { connect } from 'react-redux'
import { createHero } from '../../actions'

const CreateHero = ({ dispatch }) => {
	let input

	return (
       <div>
         <form>
            <input ref={node => {
            	input = node
            }}
            />
            <button type="submit">
              Add Hero 
            </button>
         </form>
       </div>
	)
}

export default CreateHero;
