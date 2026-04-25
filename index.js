// Import datejs
require ("datejs");

//  Initialize the Return Object with empty users array
function combineUsers (...args) {
   const combinedObject = {
     users: []
   };

// Loop through args and merge each array into users
args.forEach((userArray) => {
  combinedObject.users.push (...userArray);
});

// Add today's date in M/d/yyyy format
combinedObject.merge_date = new date ().toString ("M/d/yyyy");

// Return the combined object
return combinedObject;
}

module.exports = { combineUsers };