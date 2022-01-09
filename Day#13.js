
// Introduction
// Given an age in seconds, calculate how old someone would be on:
// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old,
// you should be able to say that they're 31.69 Earth-years old.


const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}

    let orbitalPeriod = [
        0.2408467,
        0.61519726,
        1.0,
        1.8808158,
        11.862615,
        29.447498,
        84.016846,
        164.79132
    ];

    yearsInAllPlanets.Mercury = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[0] ) * 100) / 100;
    yearsInAllPlanets.Venus = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[1] ) * 100) / 100;
    yearsInAllPlanets.Earth = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[2] ) * 100) / 100;
    yearsInAllPlanets.Mars = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[3] ) * 100) / 100;
    yearsInAllPlanets.Jupiter = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[4] ) * 100) / 100;
    yearsInAllPlanets.Saturn = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[5] ) * 100) / 100;
    yearsInAllPlanets.Uranus = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[6] ) * 100) / 100;
    yearsInAllPlanets.Neptune = Math.round(((seconds / 1000000000 * 31.69 ) / orbitalPeriod[7] ) * 100) / 100;

	// Your solution starts here

	// Your solution ends here

	return yearsInAllPlanets
}

console.log(spaceAge(436575687))
