/**
 * Array declaration
 */
const athleteName = [];
const athleteHeight = [];

/**
 * Insert athlete function
 * @param {string} name 
 * @param {number} height 
 */

function insertAthlete(name, height) {
  if (athleteName.length == 5 && athleteHeight.length == 5) {
    console.log('array is full');
  } else {
    athleteName.push(name);
    athleteHeight.push(height);
    console.log('added successfully');
  }
}

/**
 * Delete athlete function
 * @param {string} name 
 */


function deleteAthlete(name) {
  const searchAthlete = athleteName.indexOf(name);
  if (searchAthlete > -1) {
    athleteName.splice(searchAthlete, 1);
    athleteHeight.splice(searchAthlete, 1);
    console.log('removed successfully');
  } else {
    console.log('not found');
  }
}