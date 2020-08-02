var cat = {     name: 'Fluffy',
                activities: ['play', 'eat cat food'],
                catFriends: [
                              {
                                  name: 'bar',
                                  activities: ['be grumpy', 'eat bread omblet'],
                                  weight: 8,
                                  furcolor: 'white'
                              }, 
                              {
                                  name: 'foo',
                                  activities: ['sleep', 'pre-sleep naps'],
                                  weight: 3
                              }
                            ]
          }

// Add height and weight to Fluffy

cat.height = 300;
cat.weight = 50;

// Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy"

// List all the activities of Fluffyy’s catFriends.

let frndActyv = cat.catFriends.reduce((val, friend) => val.concat(friend.activities), []);
console.log("Fluffyys  catFriends Activities  -->" ,frndActyv);

// Print the catFriends names.

let frindName = cat.catFriends.reduce((val, friend) => val.concat(friend.name), []);
console.log("Fluffyys  catFriends Name -->" ,frindName);

// Print the total weight of catFriends

let frindWght = cat.catFriends.reduce((dat, val) => dat+=val.weight, 0);
console.log("Fluffyys and catFriends weight -->" ,frindWght + cat.weight);


// Print the total activities of all cats 
let allActyv = frndActyv.concat(cat.activities);
console.log('All cat activities -->', allActyv);

// Add 2 more activities to bar & foo cats
cat.catFriends.forEach(frnd => frnd.activities.push('jump', 'run'));
console.log("Add activity to cat friends -->", cat);

// Update the fur color of bar

cat.catFriends[0].furcolor = 'white';
console.log('Bars fur color update -->', cat);



