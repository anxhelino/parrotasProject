import { useContext, useState } from "react";
import CalculateContext from "../context/calculateContext";

const Calculate = ({ tool, output, minutes, submit }) => {
  const { data, setData, calculateELVandEAV } = useContext(CalculateContext);
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!data.tool || !data.output || !data.minutes) {
      setError(true);
      return;
    }
    calculateELVandEAV();
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="formContainer">
      <form>
        {error && <p>Please fill out all fields</p>}
        <div className="formData">
          <span className="tool">
            <label htmlFor="tool">{tool}</label>
            <input
              onChange={changeHandler}
              type="text"
              name="tool"
              id="tool"
              placeholder="Eg. Hammer"
            />
          </span>
          <span className="output">
            <label htmlFor="output">{output}</label>
            <input
              onChange={changeHandler}
              type="number"
              name="output"
              id="output"
              placeholder="Eg. 10"
            />
          </span>
          <span className="minutes">
            <label htmlFor="minutes">{minutes}</label>
            <input
              onChange={changeHandler}
              type="number"
              name="minutes"
              id="minutes"
              placeholder="Eg. 30"
            />
          </span>
        </div>
        <button type="submit" onClick={submitHandler}>
          {submit}
        </button>
      </form>
    </div>
  );
};

export default Calculate;
