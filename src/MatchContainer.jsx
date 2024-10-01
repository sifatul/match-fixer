import React, { useCallback, useEffect, useState } from 'react';
import ScoreBoard from './Scoreboard';
import PlayerList from './PlayerList';

const MatchScoreDashboard = props => {
  const { teams, matches, setMatches, teamScore } = props;
  function createMatch() {
    const matches = [];

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches.push([
          { ...teams[i], score: 0 },
          { ...teams[j], score: 0 },
        ]);
      }
    }
    setMatches(matches);
  }

  return (
    <>
      <div className="main-content">
        {teams.length > 0 && !teamScore && (
          <>
            <div className="titleHolder">
              <h1>Create Match</h1>
              <span>Ready to get the competition started?</span>
            </div>
            <button onClick={createMatch}>Create Match</button>
          </>
        )}
      </div>

      <>{teams.length > 0 && <PlayerList teams={teams}></PlayerList>}</>
    </>
  );
};

export default MatchScoreDashboard;
