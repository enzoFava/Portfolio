import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{display: 'inline', whiteSpace: 'nowrap'}}>
        <Typewriter
      options={{
        strings: [
          "Software Developer",
          "FullStack",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
    
  );
}

export default Type;
