function Login({
  name,
  password,
  setName,
  setPassword,
  login,
  message,
}) {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>✝ Church System</h1>
        <p className="sub">Welcome back</p>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>
          Login
        </button>

        <p className="error">{message}</p>
      </div>
    </div>
  );
}

export default Login;