function SearchBar({ search, setSearch }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="🔍 Search usher by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default SearchBar;