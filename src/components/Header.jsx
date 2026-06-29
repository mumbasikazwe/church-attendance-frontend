function Header({ name, role }) {
  return (
    <div className="topbar">
      <h2>Church Dashboard</h2>
      <p>
        Welcome <b>{name}</b> ({role})
      </p>
    </div>
  );
}

export default Header;