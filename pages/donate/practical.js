import NavBar from "../../components/NavBar";

const Donate = () => {
  return (
    <>
      <NavBar className="h-16 py-6 " />
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrXrN6HNDssWr1Lw?backgroundColor=cyan"
        frameBorder="0"
        onMouseWheel=""
        width="100%"
        height="533"
        style={{
          background: "transparent",
          height: "200vh",
        }}
      ></iframe>
    </>
  );
};

export default Donate;
