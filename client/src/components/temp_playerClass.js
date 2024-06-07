class vitclPlayers {
  // TODO:
  // Complete constructor
  // Create API call handler

  // Atributes ---------------------------------------
  id;
  name;
  userName;
  blitzRating;
  bulletRating;
  averageRating;
  
  _playerStats = { 
    lastUpdated: null,
    stats: null,
  }
  //  -------------------------------------------------
  
  // Static variables ---------------------------------
  static count = 1;
  static registeredPlayersList = [];
  // --------------------------------------------------
  
  // TODO: Create constructur for VITCL Players list
  vitclPlayers(name, userName) {
    this.createPlayer(name, userName).then(
      () => {
        registeredPlayersList.push(this);
        count++;
      }
    );
  }
  
  async _createPlayer(name, userName) {
    console.log('I was here...');
    this.id = count;
    this.name = name;
    this.userName = userName;
    await this._apiStatsReq(userName); // this await thing is not working... The function continues.
    this.blitzRating = this._playerStats.perfs.blitz.rating;
    this.bulletRating = this._playerStats.perfs.bullet.rating;
    this.blitzRating = ((this.blitzRating + this.bulletRating) / 2);
  }

  // TODO: Create API call handler
  async _apiStatsReq(userName) {
    _url = `https://lichess.org/api/user/${userName}`;

    try {
      const response = await fetch(_url)
      .then((response) => {
        if (response.ok) {
          resolve('Fetch operation response ok!');
        } else {
          reject('ERROR: Fetch operation failed!');
        }
      }).then((data) => {
        data = data.json();
        console.log(data);
        this._playerStats.stats = data;
        this._p.resolve();
        return data;
      });
    } catch (error) {
      console.error('ERROR: Failed to fetch statistics!');
      console.log(error);
      this._p.reject();
      return null;
    } 
  }
}

new vitclPlayers('Kalki Eshwar D', 'The_Avalanche');
console.log(vitclPlayers.registeredPlayersList[0]);