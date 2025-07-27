import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal * 100).toFixed(1) + "%";
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

export default function CalculateScore({ Name, School, total, goal }) {
  return (
    <div className="formalStyle">
      <h1>Student Details</h1>
      <div className="Name">
        <b>Name: </b>
        <span>{Name}</span>
      </div>
      <div className="School">
        <b>School: </b>
        <span>{School}</span>
      </div>
      <div className="Total">
        <b>Total: </b>
        <span>{total}</span>
      </div>
      <div className="Score">
        <b>Score: </b>
        <span>{calcScore(total, goal)}</span>
      </div>
    </div>
  );
}
