import { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { TailSpin } from "react-loader-spinner";
import { Navigate, useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Register() {
  const [eail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const newMember = async (formData) => {
    try {
      setLoading(true);
      const res = await fetch("https://reqres.in/api/register", {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
     

      

      toast.error(data.error)
      navigate("/people")


    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);
    // console.log(formData);
    newMember(formData);
  };

  const handelEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="p-4 w-full">
        <h1 className="text-3xl p-4 ">Add people</h1>
        <hr className="my-6" />
        <form onSubmit={handelSubmit}>
          <br />
          <TextField id={"email"} label={"Email"} handelChange={handelEmail} />
          <br />
          <TextField
            id={"id"}
            label={"password"}
            handelChange={handelPassword}
          />
          <br />
          <br />
          <Button
            label={loading ? <TailSpin height="24" width="24" /> : "register"}
            type="submit"
            className="bg-blue-400 text-gray-100"
          />
          <Button
            label={"create people"}
            type="reset"
            className="text-blue-400 bg-gray-100"
          />
        </form>
      </div>
    </div>
  );
}
