import { useState, useEffect } from "react";

const Seconds = () => {
  const [seconds, setSeconds] = useState(0);
  //useEffect: componentDidMount/ componentDidUpdate / componentWillUnmount
  //expects an actualization (changing) function and a dependency value
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);
  return seconds;
};

export default Seconds;
