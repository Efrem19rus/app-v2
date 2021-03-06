export const Radio = ({ label, id, ...rest }) => {
  return (
    <div className="w-full mr-4 flex items-center">
      <input
        className="h-5 w-5 bg-EEEEEE border-B0C4DB mr-2"
        type="radio"
        id={id}
        {...rest}
      />
      <label className="uppercase text-sm" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
