import "./../styles/how.css";
function How({ imgurl, heading, content }) {
  return (
    <>
      <div className="H-main">
        <img src={imgurl} className="H-img" alt="" />
        <h3 className="H-heading">{heading}</h3>
        <p className="H-content">{content}</p>
      </div>
    </>
  );
}
export default How;
