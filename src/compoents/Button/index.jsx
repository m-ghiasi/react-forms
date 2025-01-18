export default function Button({ label, type = "button", className = "" ,onClick}) {
  return (
    <div>
      <button className={`rounded-xl py-2 px-3 border-none ${className}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
