import React from 'react'
import { connect } from 'react-redux'


export const AddHero = ({ dispatch }) => {
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

