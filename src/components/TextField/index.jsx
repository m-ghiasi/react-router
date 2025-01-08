export default function TextField({ label, id , handelChange}) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={id} >{label}:</label>
      <br />
      <input onChange={handelChange} name={id} id={id} type="text" />
    </div>
  );
}
