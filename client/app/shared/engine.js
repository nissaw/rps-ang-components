import _ from 'lodash';

const engine = ($http) => {

// an array that gets filled with completed game objects
  const gamesPlayed = [];
// initialize 2 properties to display before user plays
  const lastGame = {
    outcome: 'You Pick first!',
    alertStatus: 'won'
  };
  const record = {
    won: 0,
    lost: 0,
    tied: 0
  };

  const getGamesPlayed = () => {
    return gamesPlayed;
  };
  const getLastGame = () => {
    return lastGame;
  };
  const getRecord = () => {
    return record;
  };

  const randomPick = () => {
    const plays = ['Rock', 'Paper', 'Scissors'];
    return plays[Math.floor(Math.random()*3)];
  };

  const play = (option) => {
    let game = {};
    let computerPlay = randomPick();

    game.user = option;
    game.computer = computerPlay;
    if (option === computerPlay){
      record.tied++;
      game.winner = 1;
      game.result = 'Tied';
    } else if ((computerPlay === 'Rock' && option === 'Paper') ||
      (computerPlay === 'Paper' && option === 'Scissors') ||
      (computerPlay === 'Scissors' && option === 'Rock')) {
      record.won++;
      game.winner = 2;
      game.result = 'Won';
    } else {
      record.lost++;
      game.winner = 0;
      game.result = 'Lost';
    }
    // add completed game to array
    gamesPlayed.push(game);
    // update lastGame with the newest info
    _.assign(lastGame, game);
    // add outcome string and alertStatus to lastGame
    setWinner(game.winner);
  };

  const setWinner = (winner) => {
    if(winner === 1){
      lastGame.outcome = 'Tie Game! Play Again!'
      lastGame.alertStatus = 'tie';
    } else if (winner === 2){
      lastGame.outcome = `You Won! ${lastGame.user} beat ${lastGame.computer}!`;
      lastGame.alertStatus = 'won';
    } else {
      lastGame.outcome = `You Lost! ${lastGame.computer} beat ${lastGame.user}!`
      lastGame.alertStatus = 'lost';
    }
  };

  return {play, getGamesPlayed, getRecord, getLastGame};
}

engine.$inject = ['$http'];

export {engine}
