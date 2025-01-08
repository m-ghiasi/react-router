import Button from "../../components/Button";
import TextField from "../../components/TextField";

export default function PeopleCreatePage() {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);
    console.log(formData);
  };
  return (
    <div className="p-4 w-full">
      <h1 className="text-3xl p-4 ">Add people</h1>
      <hr className="my-6" />
      <form onSubmit={handelSubmit}>
        <TextField id={"Firstname"} label={"First Name"} />
        <br />
        <TextField id={"Lastname"} label={"Last Name"} />
        <br />
        <TextField id={"Email"} label={"Email"} />
        <br />
        <TextField id={"id"} label={"Id"} />
        <br />
        <Button
          type="submit"
          label={"Create person"}
          className="bg-blue-500 rounded-8 text-gray-50 "
        />
      </form>
    </div>
  );
}
