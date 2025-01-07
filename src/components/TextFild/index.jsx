export default function TextFild({ label, id }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} />
    </div>
  );
}
