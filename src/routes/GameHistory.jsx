import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const query = gql`
  {
    games {
      id
      playerOneID
      playerTwoID
      playerOneColor
      playerTwoColor
      startDate
      endDate
      fen
      pgn
      gameOver
      victoryType
    }
  }
`;

class GameHistoryRoute extends Component {
  state = {
    loading: true,
    games: null,
    error: null
  };

  componentDidMount() {
    this.fetchGames();
  }

  async fetchGames() {
    const { client } = this.props;
    try {
      const response = await client.query({ query });
      this.setState({
        games: response.data.games,
        loading: false
      });
    } catch (error) {
      this.setState({
        error,
        loading: false
      });
    }
  }

  render() {
    const { games, error, loading } = this.state;
    return (
      <div className="container">
        <h1>Game History</h1>

        {loading && <LoadingSpinner />}
        {error && <p className="message--error">{error.message}</p>}

        {games && (
          <div className="games-list">
            {games.length === 0 && <p className="message">No games to list</p>}
            <ul>
              {games.map((game, index) => (
                <li key={game.id}>
                  <span>{index + 1}</span>
                  <span>{game.fen}</span>
                  <span>{game.startDate}</span>
                  <span>{game.endDate}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default withApollo(GameHistoryRoute);
