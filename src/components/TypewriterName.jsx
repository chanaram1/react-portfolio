import { Typewriter } from 'react-simple-typewriter';

const TypewriterName = () => (
  <h1 className="text-4xl font-bold">
    <Typewriter
      words={["Recent Computer Engineering Graduate from TMU. Former Software Developer Intern at BMO (2x) and Napleon."]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </h1>
);

export default TypewriterName;