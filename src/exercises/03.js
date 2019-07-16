import React from 'react'
// We want to introduce a new component (BasketballStar) 
// to display some details about some legendary basketball players!

// We'd like to add a className attribute to the first name and last name props, 
// for styling purposes.
// 💰💰 https://reactjs.org/docs/faq-styling.html
export function BasketballStar() {
	return (
		<div>
			<div>Michael</div>
			<div>Jordan</div>
		</div>
	)
}
export {BasketballStar as default}