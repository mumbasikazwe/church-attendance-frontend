function ActionButtons({ checkIn, checkOut, logout, role }) {
  return (
    <div className="buttons">

      <button className="green" onClick={checkIn}>
        Check In
      </button>

      <button className="red" onClick={checkOut}>
        Check Out
      </button>

      {role === "admin" && (
        <button
          style={{
            background: "#0ea5e9",
            color: "white",
          }}
          onClick={() => alert("Admin Panel (next feature 🚀)")}
        >
          Admin Tools
        </button>
      )}

      <button className="gray" onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default ActionButtons;