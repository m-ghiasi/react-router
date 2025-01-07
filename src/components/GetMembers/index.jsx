import { useEffect, useState } from "react";
import { NavLink } from "react-router";
export default function GetMembers() {
  const [member, setMember] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();
      console.log(data.data);
      setMember(data.data)


    } catch (error) {
      console.log("errr");
    }
  };

  useEffect(()=>getData(), []);

  return <div className="p-4"> 
  <h1>people page</h1>
  <div className="p-4">
    <table className="border">
      <thead>
        <tr>
          <th>id</th>
          <th>Avatar</th>
          <th>name</th>
          <th>iemail</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td><img className="rounded-full" src= {member.avatar} alt="" /></td>
            <td>{member.first_name}</td>
            <td> {member.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
</div>
}
