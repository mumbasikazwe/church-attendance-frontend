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
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>

      <div className="card" style={{ flex: 1 }}>
        <h3>Total Records</h3>
        <p>{total}</p>
      </div>

      <div className="card" style={{ flex: 1 }}>
        <h3>Check Ins</h3>
        <p>{checkIns}</p>
      </div>

      <div className="card" style={{ flex: 1 }}>
        <h3>Check Outs</h3>
        <p>{checkOuts}</p>
      </div>

      <div className="card" style={{ flex: 1 }}>
        <h3>Active Users</h3>
        <p>{uniqueUsers}</p>
      </div>

    </div>
  );
}

export default StatsCards;