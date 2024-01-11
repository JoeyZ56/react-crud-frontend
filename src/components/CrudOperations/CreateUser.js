import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //axios.post excepts 2 or 3 parameters "URL", "DATA", "CONFIG
    axios
      .post("http://localhost:80/react-crud-operations-api/users/save", inputs)
      .then(function (res) {
        console.log(res.data);
        navigate("/"); // Redirect to Home Page
      });
    console.log(inputs);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="create_container">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name:</label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>Mobile:</label>
              </th>
              <td>
                {" "}
                <input type="text" name="mobile" onChange={handleChange} />{" "}
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CreateUser;

/* <table> // table is a html tag for formating forms
<tbody> 
<tr>
<th>
LABEL
</th>
<tb>
INPUT
</tb>
</tr>
</tbody>
</table> */
