import React from 'react'
//We'd like to create a new component to display the 
// match results on the Premier League.

// The structure of the component is:

// .fixtures
//    .fixture
//      .team1 with content `Tottenham`
//      .team2 with content `Southampton`
//      .result with content `3-1`

export function PremierLeagueFixtures() {
	return (
		<div className='fixtures'></div>
	);
}

export {PremierLeagueFixtures as default}