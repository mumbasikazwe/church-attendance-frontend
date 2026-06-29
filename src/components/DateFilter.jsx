function DateFilter({ date, setDate }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "100%",
        }}
      />
    </div>
  );
}

export default DateFilter;