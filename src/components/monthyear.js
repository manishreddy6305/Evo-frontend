import "./../styles/monthyear.css";
function Monthyear({ period, setPeriod }) {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-switcher">
          <p className="fieldset">
            <input type="radio" id="monthly" />
            <label
              htmlFor="monthly"
              style={{ color: period === "monthly" ? "#fff" : "#2d3d4f" }}
              onClick={() => setPeriod("monthly")}
            >
              Monthly
            </label>
            <input type="radio" id="yearly" />
            <label
              htmlFor="yearly"
              style={{ color: period === "yearly" ? "#fff" : "#2d3d4f" }}
              onClick={() => setPeriod("yearly")}
            >
              Yearly
            </label>
            <span
              className="switch"
              style={{
                transform:
                  period === "monthly" ? "translateX(0)" : "translateX(90px)",
              }}
            ></span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Monthyear;
