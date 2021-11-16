import './../styles/features.css' 
const styles = {
  container: {
    margin: 100,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  media: { width: 500, textAlign: "center", margin: 25 },
  heading: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: "40px",
    letterSpacing: 5.6,
  },
  highlight: { backgroundColor: "#6251C4", color: "#fff" },
  subheading: { fontSize: 23, marginBottom: 50 },
  point: { fontSize: 18, color: "#7F7F7F", lineHeight: "27px" },
  button: {
    cursor: "pointer",
    margin: "10px 60px",
    padding: "15px 35px",
    color: "white",
    border: "none",
    borderRadius: "30px",
    backgroundColor: "#6251C4",
  },
};

export const Feature = ({ media, heading, sub, points, btnText, index }) => {
  return (
    <div
      style={{
        ...styles.container,
        flexDirection: index % 2 ? "row-reverse" : "row",
      }}
    >
      <div style={styles.media} className="feature-video-div">
        {media?.type === "video" ? (
          <video height={500} src={media.url} autoPlay loop muted className="feature-video"/>
        ) : (
          <img height={500} src={media.url} alt="" />
        )}
      </div>
      <div style={{ maxWidth: 500 }}>
        <h1 style={styles.heading}>
          {heading
            .split("*")
            .map((part, i) =>
              i % 2 ? (
                <span style={styles.highlight}>{part}</span>
              ) : (
                <span>{part}</span>
              )
            )}
        </h1>
        <h3 style={styles.subheading}>{sub}</h3>
        {points.map((point) => (
          <div style={{ display: "flex" }}>
            <img
              src="./images/tick.png"
              alt=""
              width={40}
              height={40}
              style={{ margin: "20px 20px 0 0" }}
            />
            <p style={styles.point}>{point}</p>
          </div>
        ))}
        <button style={styles.button}>{btnText}</button>
      </div>
    </div>
  );
};
