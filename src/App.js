import React, { useState } from 'react';
import './styles.css';

const strategies = {
  'Zawsze współpracuj': alwaysCooperate,
  'Zawsze donoś': alwaysDefect,
  'Strategia losowa': randomStrategy,
  'Oko za oko': titForTat,
  'Grudger': grudger,
  'Pavlov': pavlov,
  'Oko za oko x2': titForTwoTats,
  'Wybaczaj oko za oko': forgivingTitForTat,
  'Losowe oko za oko': randomTitForTat
};

function myPenalty(myDecision, hisDecision) {
  if (myDecision === -1 && hisDecision === -1) return 7;
  if (myDecision === 1 && hisDecision === 1) return 3;
  if (myDecision === -1 && hisDecision === 1) return 0;
  if (myDecision === 1 && hisDecision === -1) return 10;
}

function alwaysCooperate() {
  return 1;
}

function alwaysDefect() {
  return -1;
}

function randomStrategy() {
  return Math.random() < 0.5 ? -1 : 1;
}

function titForTat(historyB) {
  if (historyB.length === 0) return 1;
  return historyB[historyB.length - 1];
}

function grudger(historyB) {
  if (historyB.length === 0) return 1;
  if (historyB.includes(-1)) return -1;
  return 1;
}

function pavlov(historyA, historyB) {
  if (historyA.length === 0) return 1;
  if (historyA[historyA.length - 1] === historyB[historyB.length - 1]) return 1;
  return -1;
}

function titForTwoTats(historyB) {
  if (historyB.length < 2) return 1;
  return (historyB[historyB.length - 1] === -1 && historyB[historyB.length - 2] === -1) ? -1 : 1;
}

function forgivingTitForTat(historyB) {
  if (historyB.length === 0) return 1;
  if (historyB[historyB.length - 1] === -1) return Math.random() < 0.1 ? 1 : -1;
  return 1;
}

function randomTitForTat(historyB) {
  if (historyB.length === 0) return 1;
  return Math.random() < 0.2 ? (Math.random() < 0.5 ? -1 : 1) : historyB[historyB.length - 1];
}

const App = () => {
  const [results, setResults] = useState([]);

  const simulate = () => {
    const simulationResults = [];

    for (let nameA in strategies) {
      for (let nameB in strategies) {
        let scoreA = 0;
        let scoreB = 0;
        let historyA = [];
        let historyB = [];
        let cooperationsA = 0;
        let cooperationsB = 0;
        let defectionsA = 0;
        let defectionsB = 0;

        for (let i = 0; i < 1000; i++) {
          let moveA = strategies[nameA](historyA, historyB);
          let moveB = strategies[nameB](historyB, historyA);
          scoreA += myPenalty(moveA, moveB);
          scoreB += myPenalty(moveB, moveA);
          historyA.push(moveA);
          historyB.push(moveB);
          if (moveA === 1) cooperationsA++;
          else defectionsA++;
          if (moveB === 1) cooperationsB++;
          else defectionsB++;
        }

        simulationResults.push({
          strategyA: nameA,
          strategyB: nameB,
          scoreA,
          scoreB,
          cooperationsA,
          defectionsA,
          cooperationsB,
          defectionsB
        });
      }
    }

    setResults(simulationResults);
  };

  return (
    <div className="App">
      <h1>Turniej Axelrod</h1>
      <button onClick={simulate}>Symuluj</button>

      <div>
        <h2>Podsumowanie i Wnioski</h2>
        <p>Symulacja została przeprowadzona z użyciem dziewięciu różnych strategii, z których każda rozgrywała 1000 rund przeciwko każdej innej.</p>
        <ul>
          <li>Strategie stosujące zasadę wzajemności, takie jak Oko za oko, radzą sobie dobrze przeciwko różnorodnym przeciwnikom.</li>
          <li>Strategia Zawsze zdradzaj, choć początkowo silna przeciwko współpracującym, cierpi w starciach z odwetowymi strategiami.</li>
          <li>Wybaczające strategie i te z niewielką losowością mogą łagodzić wady czystego Oko za oko, zapobiegając długim sekwencjom wzajemnych zdrad.</li>
        </ul>
        <p>Ogólnie rzecz biorąc, symulacja pokazuje znaczenie różnorodności strategii oraz korzyści płynących ze współpracy w powtarzających się interakcjach.</p>
      </div>

      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Strategia A</th>
              <th>Strategia B</th>
              <th>Wynik A</th>
              <th>Wynik B</th>
              <th>Współpraca A</th>
              <th>Zdrada A</th>
              <th>Współpraca B</th>
              <th>Zdrada B</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.strategyA}</td>
                <td>{result.strategyB}</td>
                <td>{result.scoreA}</td>
                <td>{result.scoreB}</td>
                <td>{result.cooperationsA}</td>
                <td>{result.defectionsA}</td>
                <td>{result.cooperationsB}</td>
                <td>{result.defectionsB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
