import White from "./square";


const WhiteWrapper = () => {


  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "10%",
        width: "800px",
        height: "1200px",
        backgroundColor: "blue",
      }}
    >
      <White />
    </div>
  );
}

export default WhiteWrapper