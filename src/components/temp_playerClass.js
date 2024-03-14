class vitclPlayers {
    id;
    name;
    username;
    blitzRating;
    bulletRating;
    averageRating;
    _lastUpdated;
  
    static playersList = [];
  
    _url = `https://lichess.org/api/user/${username}`;
  
    vitclPlayers(name, username) {
      this.id = vitclPlayers.playersList.length + 1;
      this.name = name;
      this.username = username;
      this.averageRating = ((this.blitzRating + this.bulletRating) / 2);
      vitclPlayers.playersList.append(this);
    }
  
    async _apiStatsReq() {
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
  }
  