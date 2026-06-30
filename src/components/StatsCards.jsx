function StatsCards({ attendance }) {
  const total = attendance.length;

  const checkIns = attendance.filter(
    (a) => a.action === "Check In"
  ).length;

  const checkOuts = attendance.filter(
    (a) => a.action === "Check Out"
  ).length;

  const uniqueUsers = new Set(attendance.map((a) => a.name)).size;

  return (
    <div className="stats">

      <div className="card">
        <h3>Total</h3>
        <h2>{total}</h2>
      </div>

      <div className="card">
        <h3>Check Ins</h3>
        <h2>{checkIns}</h2>
      </div>

      <div className="card">
        <h3>Check Outs</h3>
        <h2>{checkOuts}</h2>
      </div>

      <div className="card">
        <h3>Users</h3>
        <h2>{uniqueUsers}</h2>
      </div>

    </div>
  );
}

export default StatsCards;