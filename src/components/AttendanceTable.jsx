function AttendanceTable({ attendance, role, onDelete }) {
  const getStatus = (name) => {
    const userLogs = attendance.filter((a) => a.name === name);
    if (userLogs.length === 0) return "Unknown";

    const lastAction = userLogs[userLogs.length - 1].action;

    return lastAction === "Check In" ? "Present" : "Absent";
  };

  const uniqueAttendance = [];

  attendance.forEach((item) => {
    if (!uniqueAttendance.find((u) => u.name === item.name)) {
      uniqueAttendance.push(item);
    }
  });

  return (
    <div className="card">
      <h3>Live Presence</h3>

      {attendance.length === 0 ? (
        <p>No records yet</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Action</th>
              <th>Time</th>
              {role === "admin" && <th>Delete</th>}
            </tr>
          </thead>

          <tbody>
            {uniqueAttendance.map((a, i) => {
              const status = getStatus(a.name);

              const userLogs = attendance.filter(
                (x) => x.name === a.name
              );

              const last = userLogs[userLogs.length - 1];

              return (
                <tr key={i}>
                  <td>{a.name}</td>
                  <td>{a.role}</td>

                  <td>
                    <span
                      style={{
                        color: status === "Present" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {status}
                    </span>
                  </td>

                  <td>{last.action}</td>
                  <td>{last.time}</td>

                  {role === "admin" && (
                    <td>
                      <button
                        onClick={() => onDelete(i)}
                        style={{
                          background: "red",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AttendanceTable;