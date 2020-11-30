import { useState } from "react";
import "../App.css";
import { Formik } from "formik";
import FetchFunction from "./FetchFunction";
import BikeContext from "./BikeContext";
import TotalContext from "./ToTalContext";
import "../App.css";
import TotalFound from "./TotalFound";

function SearchBike() {
  const useStateWithLocalStorage = () => {
    const [value, setValue] = useState(localStorage.getItem("lk") || "");

    return [value, setValue];
  };
  const [value, setValue] = useStateWithLocalStorage("myValueInLocalStorage");

  return (
    <div className="formBody">
      <div className="wrapper">
        <div>Request more information in your location</div>

        <div className="box">
          <Formik
            initialValues={{ name: "", email: "", country: "", city: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                //alert(JSON.stringify(values, null, 2));
                //setSubmitting(false);
                localStorage.setItem("lK", setValue(values));
              }, 1000);
            }}
            validate={(values) => {
              const errors = {};

              if (values.name.trim() === "") {
                errors.name = "name cannot be empty";
              }
              if (values.city.trim() === "") {
                errors.city = "city cannot be empty";
              }
              if (values.country.trim() === "") {
                errors.country = "country cannot be empty";
              }

              if (values.email.trim() === "") {
                errors.email = "email cannot be empty";
              } else if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
          >
            {({
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
              values,
              touched,
              handleBlur,
              dirty,
              handleReset,
              isValid,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>
                    Name
                    <input
                      name="name"
                      onChange={handleChange}
                      type="text"
                      value={values.name}
                      placeholder={errors.name}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <span className="spanBox">{errors.name}</span>
                    )}
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    City
                    <input
                      name="city"
                      onChange={handleChange}
                      type="text"
                      value={values.city}
                      placeholder={errors.city}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city && (
                      <span className="spanBox">{errors.city}</span>
                    )}
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Country
                    <input
                      name="country"
                      onChange={handleChange}
                      type="text"
                      value={values.country}
                      placeholder={errors.country}
                      onBlur={handleBlur}
                    />
                    {errors.country && touched.country && (
                      <span className="spanBox">{errors.country}</span>
                    )}
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    E-mail
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder={errors.email}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <span className="spanBox">{errors.email}</span>
                    )}
                  </label>
                </div>
                <div className="form-group"></div>
                <div className="form-group">
                  <button disabled={!dirty || !isValid} type="submit">
                    {" "}
                    Submit
                  </button>
                  <button
                    onClick={handleReset}
                    type="reset"
                    className="btn btn-secondary"
                  >
                    Undo
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div>
          {value.name ? (
            <div>
              Hello {value.name},
              <TotalContext.Provider value={value.city}>
                <TotalFound word={value.city} />
              </TotalContext.Provider>
            </div>
          ) : (
            <p>
              Kindly fill the form, please capitalize your desired City eg
              "London", to get result
            </p>
          )}
        </div>

        <div className="boxB">
          <BikeContext.Provider value={value.city}>
            <FetchFunction word={value.city} />
          </BikeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default SearchBike;
