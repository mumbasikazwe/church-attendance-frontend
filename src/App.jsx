import { useEffect, useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Header from "./components/Header";
import ActionButtons from "./components/ActionButtons";
import StatsCards from "./components/StatsCards";
import AttendanceTable from "./components/AttendanceTable";
import SearchBar from "./components/SearchBar";
import DateFilter from "./components/DateFilter";

const API_URL = "https://church-attendance-backend.onrender.com";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  const loadAttendance = async () => {
    const res = await fetch(`${API_URL}/attendance`);
    const data = await res.json();
    setAttendance(data);
  };

  useEffect(() => {
    if (loggedIn) {
      loadAttendance();
    }
  }, [loggedIn]);

  const login = async () => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
        }),
      });

      const data = await res.json();

      if (data.message === "Login successful") {
        setLoggedIn(true);
        setRole(data.role);
        setMessage("");
        loadAttendance();
      } else {
        setMessage(data.message);
      }
    } catch {
      setMessage("Unable to connect to server.");
    }
  };

  const checkIn = async () => {
    await fetch(`${API_URL}/attendance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        role,
        action: "Check In",
        time: new Date().toLocaleString(),
      }),
    });

    loadAttendance();
  };

  const checkOut = async () => {
    await fetch(`${API_URL}/attendance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        role,
        action: "Check Out",
        time: new Date().toLocaleString(),
      }),
    });

    loadAttendance();
  };

  const logout = () => {
    setLoggedIn(false);
    setName("");
    setPassword("");
    setRole("");
    setAttendance([]);
    setSearch("");
    setDate("");
  };

  const deleteAttendance = async (id) => {
    await fetch(`${API_URL}/attendance/${id}`, {
      method: "DELETE",
    });

    loadAttendance();
  };

  const filteredAttendance = attendance.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const itemDate = new Date(item.time)
      .toISOString()
      .split("T")[0];

    const matchDate = date ? itemDate === date : true;

    return matchName && matchDate;
  });

  if (!loggedIn) {
    return (
      <Login
        name={name}
        password={password}
        setName={setName}
        setPassword={setPassword}
        login={login}
        message={message}
      />
    );
  }

  return (
    <div className="dashboard">
      <Header name={name} role={role} />

      <StatsCards attendance={attendance} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <DateFilter
        date={date}
        setDate={setDate}
      />

      <ActionButtons
        checkIn={checkIn}
        checkOut={checkOut}
        logout={logout}
        role={role}
      />

      <AttendanceTable
        attendance={filteredAttendance}
        role={role}
        onDelete={deleteAttendance}
      />
    </div>
  );
}

export default App;