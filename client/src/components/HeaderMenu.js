import React from 'react'

renderLinks() {
	const { type } = this.props
	if(type == 'hero_index'){
		return (
           <span> Create new hero link </span>
		)
	} else if ( type == 'heros_new') {
		return (
           <span> create link back to index </span>
		)
	} else if ( type == 'heros_show') {
		return (
            <span> back to index and buttton for delete </span>
            <button>Delete Hero </button>
		)
	}
}

const HeaderMenu = () => {
	render() {
		return (
          <div id="main-nav" className="main-nav">
               {this.renderLinks()}
          </div>
		)
	}
}