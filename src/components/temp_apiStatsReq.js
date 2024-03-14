var userStats;

var vitclPlayers = [];

var registeredPlayers = [
  {
    id: 1,
    name: "Aakarsh Sinha",
    username: "Aakarsh_IND" 
  },
  {
    id: 2,
    name: "Kalki Eshwar D",
    username: "The_Avalanche"
  }
];


async function fetchStats(userName) {
  const _url = `https://lichess.org/api/user/${userName}`

  try {
    const response = await fetch(_url);
    if (!response.ok) {
      console.log('ERROR: Failure on fetching user stats');
      return null;
    }
    const data = await response.json();
    console.log('Successful response on fetch userStats');
    return data;
  } catch (error) {
    console.error('ERROR: Fetch operation failed!');
    return null;
  }
}

for (var i = 0; i < registeredPlayers.length;) {

    var userStats;  
    fetchStats(registeredPlayers[i].username)
    .then((data) => {
        userStats = data; // Assign the fetched data to userStats
        // assignData();
        console.log(i);
    }).then(() => {
        vitclPlayers.push({
            id: i + 1,
            // name: ,
            userName: userStats.username,
            blitzRating: userStats.perfs.blitz.rating,
            bulletRating: userStats.perfs.bullet.rating,
            averageRating: ((userStats.perfs.blitz.rating + userStats.perfs.bullet.rating) / 2),
        });
        console.log(vitclPlayers[0]);
        console.log(vitclPlayers);
    });

    while (vitclPlayers[i] == null) {

    }
}



/////////////////////////////

// let willFetchStats = new Promise((resolve, reject) => {
    
//     let condition = 
  
//     if (condition) {
//       resolve('Promise is kept!');
//     } else {
//       reject('Promise is broken');
//     }
//   });