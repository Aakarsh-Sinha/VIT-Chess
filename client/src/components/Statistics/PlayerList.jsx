// async function fetchStats(userName) {
//   const _url = `https://lichess.org/api/user/${userName}`;

//   try {
//     const response = await fetch(_url);
//     if (!response.ok) {
//       console.log("ERROR: Failure on fetching user stats");
//       return null;
//     }
//     const data = await response.json();
//     console.log("Successful response on fetch userStats");
//     return data;
//   } catch (error) {
//     console.error("ERROR: Fetch operation failed!");
//     return null;
//   }
// }

// var vitclPlayers = [];

// var registeredPlayers = [
//   {
//     id: 1,
//     name: "Aakarsh Sinha",
//     username: "Aakarsh-IND",
//   },
//   {
//     id: 2,
//     name: "Kalki Eshwar D",
//     username: "The_Avalanche",
//   },
// ];

// for (var i = 0; i < registeredPlayers.length; i++) {
//   var userStats;

//   fetchStats(registeredPlayers[i].username)
//     .then((data) => {
//       userStats = data; // Assign the fetched data to userStats
//       console.log(userStats);
//       if (userStats == null) {
//         throw new Error("ERROR: userStats is null!");
//       }
//     })
//     .then(() => {
//       vitclPlayers[i] = {
//         id: i + 1,
//         name: registeredPlayers[i].name,
//         userName: registeredPlayers[i].username,
//         blitzRating: userStats.perfs.blitz.rating,
//         bulletRating: userStats.perfs.bullet.rating,
//         averageRating:
//           (userStats.perfs.blitz.rating + userStats.perfs.bullet.rating) / 2,
//       };
//     });
// }

// export default registeredPlayers;
