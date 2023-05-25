// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Returns a number.

const getTotalPassengers = (data) => {
	return data.length
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

// const getSurvivorCount = (data) => {
// 	const numberOfSurvivors = data.reduce((count, passenger) => {
// 		if (passenger.fields.survived === "Yes") {
// 			return count + 1;
// 		} else {
// 			return count;
// 		}
// 	}, 0);
// 	return numberOfSurvivors
// }

const getSurvivorCount = (data) => {
	return data.filter(passenger => passenger.fields.survived === "Yes").length
}
// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
	return getTotalPassengers(data) - getSurvivorCount(data)
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Find all of the 
// passengers whose pclass matches and return the count. 
// Return a number

const countPassengersInClass = (data, pclass) => {
	return data.filter(passenger => passenger.fields.pclass === pclass).length
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. 
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
	return data.filter(passenger => (passenger.fields.pclass === pclass && passenger.fields.survived === "Yes")).length
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

const getCasualityCountForClass = (data, pclass) => {
	return data.filter(passenger => (passenger.fields.pclass === pclass && passenger.fields.survived === "No")).length
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You need to filter
// passenger data where the age is missing. 

const getMinAge = (data) => {
	const minAge = data.reduce((age, passenger) => {
		if (passenger.fields.age && passenger.fields.age < age) {
			return age = passenger.fields.age
		} else {
			return age;
		}
	}, 100);
	return minAge
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where 
// age is missing.

const getMaxAge = (data) => {
	const maxAge = data.reduce((age, passenger) => {
		if (passenger.fields.age && passenger.fields.age > age) {
			return age = passenger.fields.age
		} else {
			return age;
		}
	}, 0);
	return maxAge
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the 
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
	return data.filter(passenger => (passenger.fields.embarked && passenger.fields.embarked === embarked)).length
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
	const minFare = data.reduce((fare, passenger) => {
		if (passenger.fields.fare !== "undefined" && passenger.fields.fare < fare) {
			return fare = passenger.fields.fare
		} else {
			return fare;
		}
	}, 100);
	return minFare
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare. Be sure to filter these! 

const getMaxFare = (data) => {
	const maxFare = data.reduce((fare, passenger) => {
		if (passenger.fields.fare !== "undefined" && passenger.fields.fare > fare) {
			return fare = passenger.fields.fare
		} else {
			return fare;
		}
	}, 0);
	return maxFare
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
	return data.filter(passenger => passenger.fields.sex === gender).length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This 
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property. 

const getSurvivorsByGender = (data, gender) => {
	return data.filter(passenger => passenger.fields.sex === gender && passenger.fields.survived === "Yes").length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

const getCasualitiesByGender = (data, gender) => {
	return data.filter(passenger => passenger.fields.sex === gender && passenger.fields.survived === "No").length
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and 
// return that number. Be sure to filter the passengers records 
// where the fare is missing! 

const getTotalFare = (data) => {
	const totalFare = data.reduce((totalFare, passenger) => {
		if (passenger.fields.fare) {
			return totalFare += passenger.fields.fare
		} else {
			return totalFare
		}
	}, 0)
	return totalFare
}

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide 
// by the number of passengers. Be sure to filter passengers who are
// missing a fare! 

const getAverageFare = (data) => {
	return getTotalFare(data) / (data.filter(passenger => passenger.fields.fare !== "undefined").length)
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are 
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items 
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
  let fares = data
    .filter(passenger => typeof passenger.fields.fare !== "undefined")
    .map(passenger => passenger.fields.fare);
	fares = fares.sort((a, b) => a - b)
  if (fares.length % 2 === 0) {
    return (fares[fares.length / 2 - 1] + fares[fares.length / 2]) / 2;
  } else {
    return fares[Math.floor(fares.length / 2)];
  }
};

// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide 
// by the number of passenegers. Be sure to filter where ages are not 
// available. 

const getAverageAge = (data) => {
	const sumAges = data.reduce((sum, passenger) => {
		if (passenger.fields.age && passenger.fields.age !== "undefined") {
			return sum += passenger.fields.age
		} else {
			return sum;
		}
	}, 0);
	return sumAges / data.filter(passenger => (passenger.fields.age && passenger.fields.age !== "undefined")).length
}

// 19 --------------------------------------------------------------
// Return the median age from passengers.

const getMedianAge = (data) => {
	let ages = data
		.filter(passenger => typeof passenger.fields.age !== "undefined")
		.map(passenger => passenger.fields.age);
	ages = ages.sort((a, b) => a - b)
	if (ages.length % 2 === 0) {
		return (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
	} else {
		return ages[Math.floor(ages/length / 2)];
	}
}

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the 
// the total number. 

const getAverageAgeByGender = (data, gender) => {
	const sumAges = data.reduce((sum, passenger) => {
		if (passenger.fields.age && passenger.fields.age !== "undefined" && passenger.fields.sex && passenger.fields.sex === gender) {
			return sum += passenger.fields.age
		} else {
			return sum;
		}
	}, 0);
	return sumAges / data.filter(passenger => (passenger.fields.age && passenger.fields.age !== "undefined") && passenger.fields.sex && passenger.fields.sex === gender).length
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getTotalPassengers,
	getSurvivorCount,
	getCasualityCount,
  countPassengersInClass,
  getSurvivorCountForClass,
	getCasualityCountForClass,
	getMinAge,
	getMaxAge,
	getEmbarkedCount,
	getMaxFare,
	getMinFare,
	getPassengersByGender,
	getSurvivorsByGender,
	getCasualitiesByGender,
	getTotalFare,
	getAverageFare,
	getMedianFare,
	getAverageAge,
	getMedianAge,
	getAverageAgeByGender
}