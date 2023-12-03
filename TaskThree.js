/**
 * Athlete array declaration
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
    alert("array is full");
  } else {
    athleteName.push(name);
    athleteHeight.push(height);
    alert("added successfully");
  }
  sortAthlete()
  document.getElementById("display").innerHTML = `Name: ${athleteName} <br> Height: ${athleteHeight}`;
}

/**
 * Athlete position function is the binary search
 * @param {string} name 
 */
function athletePosition(name) {
  let result = binarySearch(athleteName, name);
  if (result != -1) {
    alert(`Found in array index ${result} `);
  } else {
    alert(`Athlete "${name}" is not within the array`);
  }
}

// The following website was used to produce the code below
// Source - https://www.geeksforgeeks.org/binary-search-in-javascript/

function binarySearch(array, name) {
  var start = 0;
  var end = athleteName.length - 1;
  while (start <= end){
 
        // Find the middle index
        let middle = Math.floor((start + end) / 2);
  
        // If the element is present at middle then return mid
        if (array[middle] === name) {
          return middle;
        }
        // If not then look in left or right for number
        else if (array[middle] < name){
          start = middle + 1;
        }
             
        else{
          end = middle - 1;
        }   
    }
    // If the athlete is not found then return -1
    return -1;
}

// The following website was used to produce the code below
// Source - https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
function sortAthlete() {
  let length = athleteName.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length- i - 1; j++) {
      if (athleteName[j] > athleteName[j + 1]) {
        let temp = athleteName[j];
        let temp2 = athleteHeight[j]
        athleteName[j] = athleteName[j + 1];
        athleteHeight[j] = athleteHeight[j + 1];
        athleteName[j + 1] = temp;
        athleteHeight[j + 1] = temp2;
      }
    }
  }

}

/**
 * Delete athlete function
 * @param {string} name 
 */
function deleteAthlete(name) {
  const searchAthlete = athletePosition(name);
  if (searchAthlete > -1) {
    athleteName.splice(searchAthlete, 1);
    athleteHeight.splice(searchAthlete, 1);
    alert('removed successfully');

  } else {
    alert('not found');
  }
}