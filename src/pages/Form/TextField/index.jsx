export default function TextField({ id, label, handelChange }) {
  return (
    <div className="p-2 flex gap-4 ">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        className="bg-slate-200 px-2 rounded-xl border-none focus:outline-none"
        type="text"
        name={id}
        id={id}
        onChange={handelChange}
      />
    </div>
  );
}
