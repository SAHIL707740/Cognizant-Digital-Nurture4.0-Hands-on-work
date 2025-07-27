import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Steeve"
        School="TDMV Public School"
        total={284}
        goal={343}
      />
    </div>
  );
}

export default App;
