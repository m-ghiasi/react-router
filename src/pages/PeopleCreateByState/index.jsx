import { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

export default function PeopleCreateByState() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);   
    console.log(email);
    console.log(id); 
  };

  const handelFirstname = (e) => {
    setFirstname(e.target.value);
    console.log(e.target.value);
  };

  const handelLastname = (e) => {
    setLastname(e.target.value);
    console.log(e.target.value);
  };

  const handelEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handelId = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="p-4 w-full">
        <h1 className="text-3xl p-4 ">Add people</h1>
        <hr className="my-6" />
        <form onSubmit={handelSubmit}>
          <TextField
            id={"firstname"}
            label={"Fairst Name"}
            handelChange={handelFirstname}
          />

          <br />
          <TextField
            id={"lastname"}
            label={"Last Name"}
            handelChange={handelLastname}
          />
          <br />
          <TextField id={"email"} label={"Email"} handelChange={handelEmail} />
          <br />
          <TextField id={"id"} label={"Id"} handelChange={handelId} />
          <br />
          <br />
          <Button
            label={"create people"}
            type="submit"
            className="bg-blue-400 text-gray-100"
          />
          <Button label={"create people" } type="reset" className="text-blue-400 bg-gray-100" />
        </form>
      </div>
    </div>
  );
}
