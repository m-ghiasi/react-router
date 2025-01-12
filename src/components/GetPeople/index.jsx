import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { TailSpin } from "react-loader-spinner";

export default function GetPeople() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://reqres.in/api/users?page=1");
      const users = await res.json();
      setMembers(users.data);
      console.log(users.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <ul>
        {loading ? (
          <TailSpin  height="24" width="24"  />
        ) : (
          members.map((member, index) => (
            <NavLink key={index} to={`/people/${member.id}`}>
              <li className="flex p-4 gap-4 items-center rounded-2xl  hover:bg-slate-400">
                <img
                  src={member.avatar}
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </li>
              <span>
                {member.first_name} {member.last_name}
              </span>
            </NavLink>
          ))
        )}
      </ul>
    </div>
  );
}
