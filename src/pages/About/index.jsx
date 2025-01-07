import { Outlet } from "react-router";
import TextFild from "../../components/TextFild";
import Button from "../../components/Button";

export default function AboutPage() {
  return (
    <div className="w-full h-96">
      <h1>hello</h1>
      <form action="">
        <TextFild id={"firstname"} label={"firstname"} />
        
        <br />
        <TextFild id={"lastname"} label={"lastname"} />
        <br />
        <TextFild id={"email"} label={"email"} />
        <br />
        <TextFild id={"personId"} label={"personId"} />

        <Button label={submit} className={submit}/>
        
      </form>

      <Outlet />
    </div>
  );
}
