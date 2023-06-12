import './App.css'
import React, { useEffect, useState } from "react";
import validate from "./FormValidation";
import { motion } from "framer-motion/dist/framer-motion";
import { Background, ButtonsDiv, Clean } from "./FormStyle";

function Form() {
    const allMarkers = useSelector((state) => state.markers);

    const [input, setInput] = useState({
        name: "",
        latitude: "",
        longitude: "",
        img: "",
        link: "",
        tipo: "",
      });

      const [errors, setErrors] = useState({
        name: "",
        latitude: "",
        longitude: "",
        img: "",
        link: "",
        tipo: "",
      });

      const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
      };


      return (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0, transition: { duration: 0.1 } }}
        >
          <Background>
            <Link to="/activities">
              <ButtonsDiv>Back to Activities</ButtonsDiv>
            </Link>
            <form className="form">
              <h4>Create New Activity</h4>
              <div>
                <label>Activity Name:</label>
                <input
                  id="inputname"
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  title="name"
                />
                {errors.name && <p className={style.alert}>{errors.name}</p>}
              </div>
              <div>
                <label>Difficulty:</label>
                <input
                  type="number"
                  value={input.difficulty}
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                  title="difficulty"
                  min="1"
                  max="5"
                  placeholder="1 to 5"
                />
                {errors.difficulty && (
                  <p className={style.alert}>{errors.difficulty}</p>
                )}
              </div>
              <div>
                <label>Duration:</label>
                <input
                  type="number"
                  value={input.duration}
                  name="duration"
                  onChange={(e) => handleChange(e)}
                  title="duration"
                  min="1"
                  max="72"
                  placeholder="1 to 72"
                />
                {errors.duration && (
                  <p className={style.alert}>{errors.duration}</p>
                )}
              </div>
              <br></br>
              <div className="SeasonCheckboxs">
                <label>Season:</label> <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="Summer"
                    value="Summer"
                    onChange={(e) => handleCheck(e)}
                  />{" "}
                  Summer
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Autumn"
                    value="Autumn"
                    onChange={(e) => handleCheck(e)}
                  />
                  Autumn
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Winter"
                    value="Winter"
                    onChange={(e) => handleCheck(e)}
                  />
                  Winter
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Spring"
                    value="Spring"
                    onChange={(e) => handleCheck(e)}
                  />
                  Spring
                </label>
                {input.season.length === 0 && (
                  <p className={style.alert}>{errors.season}</p>
                )}
              </div>
    
              <div className={style.selectCountries}>Select Countries:</div>
              <select onChange={(e) => handleSelect(e)}>
                <option>Select Country</option>
                {countries.map((country) => (
                  <option value={country.name} key={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
    
              <div className={style.divblance}>
                <h3>Countries Selected</h3>
                <ul>
                  <li>{input.country.map((el) => el + "  , ")}</li>
                </ul>
                {input.country.length === 0 && (
                  <p className={style.alert}>{errors.country}</p>
                )}
                {input.country.length !== 0 && (
                  <Clean onClick={(e) => clean(e)}>Clean</Clean>
                )}
              </div>
    
              <div>
                <label>Add Image:</label>
                <input
                  placeholder="This is optional"
                  id="inputimg"
                  type="text"
                  value={input.img}
                  name="img"
                  onChange={(e) => handleChange(e)}
                  title="img"
                />
              </div>
              <div className="divSubmitButton">
                {input.name !== "" &&
                input.difficulty <= 5 &&
                input.difficulty >= 1 &&
                input.duration <= 72 &&
                input.duration >= 1 &&
                input.season.length !== 0 &&
                input.country.length !== 0 ? (
                  <button
                    id="submitButton"
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                  >
                    CREATE ACTIVITY
                  </button>
                ) : (
                  <button
                    id="submitButton"
                    disabled
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                  >
                    CREATE ACTIVITY
                  </button>
                )}
              </div>
            </form>
          </Background>
        </motion.div>
      );
}

export default Form