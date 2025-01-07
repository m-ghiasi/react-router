import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/Card";
import { PuffLoader } from "react-spinners";

export default function PeopleDetail() {
  const params = useParams();

  const [details, setDetails] = useState(null);
  const [loading, setLoading]= useState(false)

  const getDetail = async () => {
setLoading(true)

    try {
      const res = await fetch(`https://reqres.in/api/users/${params.id}`);
      const data = await res.json();
      setDetails(data);
      console.log(data);
    } catch (error) {
      console.log("errr");
    } finally {
        setLoading(false)
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="w-full p-4">
      {loading? (
        <PuffLoader color="#36d7b7" size={60} />
      ):  details ? (
        <div className="rounded-xl hover:bg-gray-200 p-4 flex flex-col items-center">
            <Card data={details}/>




        </div>
      ) : null}
    </div>
  );
}
