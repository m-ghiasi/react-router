
import { Outlet } from "react-router";
import GetPeople from "../../components/getPeople";


export default function People() {
  return (
    <div>
        <GetPeople/>
      <Outlet />
    </div>
  );
}
