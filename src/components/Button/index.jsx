export default function Button({
  onClick=()=>{},
  type = "button",
  label,
  className = "",
 
}) {
  return (
    <button
      className={`rounded-xl py-2 px-4 border-none ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
     
      
    </button>
  );
}
