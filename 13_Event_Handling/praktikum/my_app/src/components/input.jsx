import React from "react";

function Input(props) {
  const {
    label,
    onChange,
    type,
    placeholder,
    value,
    defaultValue,
    errorMessage,
  } = props;

  return (
    <div className="flex flex-col mb-3">
      <label>{label}</label>
      <input
        className="input input-bordered w-full max-w-md h-[2.5rem]"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      <p className="text-red-500 p-0">{errorMessage}</p>
    </div>
  );
}

function File(props) {
  const { label, value, onChange, errorMessage } = props;

  return (
    <div className="flex flex-col mb-3">
      <label>{label}</label>
      <input
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs h-full"
        value={value}
        onChange={onChange}
      />
      <p className="text-red-500 p-0">{errorMessage}</p>
    </div>
  );
}

function Radio(props) {
  const {
    labels = [],
    header,
    onChange,
    name,
    selectedValue,
    errorMessage,
  } = props;

  return (
    <div className="flex flex-col mb-3">
      <p>{header}</p>
      {labels.map((label, index) => (
        <>
          <label className="flex mt-3">
            <input
              key={index}
              type="radio"
              name={name}
              className="radio me-3 checked:bg-primary"
              value={label}
              checked={selectedValue === label}
              onChange={onChange}
            />
            {label}
          </label>
        </>
      ))}
      <p className="text-red-500 p-0">{errorMessage}</p>
    </div>
  );
}

function Select(props) {
  const { label, errorMessage, value, onChange, options = [] } = props;

  return (
    <div className="flex flex-col mb-3">
      <label>{label}</label>
      <select
        className="select select-bordered w-full max-w-xs h-[0.6rem] "
        onChange={onChange}
        value={value}
      >
        <option>Choose...</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <p className="text-red-500 p-0">{errorMessage}</p>
    </div>
  );
}

function TextArea(props) {
  const { label, value, onChange } = props;
  return (
    <div className="flex flex-col mb-3 w-auto">
      <label>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={3}
        className="textarea textarea-bordered"
      />
    </div>
  );
}

function Toggle(props) {
  const { onChange } = props;

  return (
    <div className="flex flex-row justify-center items-center mb-3">
      <img
        src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
        className="h-5 inline me-2"
        alt=""
      />
      <input type="checkbox" className="toggle" onChange={onChange} />
      <img
        src="https://flagicons.lipis.dev/flags/4x3/id.svg"
        className="h-5 inline ms-2"
        alt=""
      />
    </div>
  );
}

export { Input, Select, TextArea, File, Radio, Toggle }; // named export
// export default Input // export default)
