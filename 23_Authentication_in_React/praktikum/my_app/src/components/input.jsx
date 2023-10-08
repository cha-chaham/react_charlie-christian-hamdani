import clsx from "clsx";

function Input(props) {
  const { label, id, error, register, name, type } = props;

  return (
    <div className="flex flex-col mb-4">
      <label className="text-black tracking-wider mb-3" htmlFor={id}>
        {label}
      </label>
      <input
        className={clsx(
          "border rounded-lg bg-slate-200 border-red-500 text-black p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        {...(register
          ? register(name, {
              valueAsNumber: type === "number" ? true : false,
            })
          : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function TextArea(props) {
  const { label, id, error, register, name } = props;

  return (
    <div className="flex flex-col mb-4">
      <label className="text-black tracking-wider mb-3" htmlFor={id}>
        {label}
      </label>
      <textarea
        className={clsx(
          "border rounded-lg bg-slate-200 border-red-500 text-black p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function Select(props) {
  const { label, placeholder, id, error, options, register, name } = props;

  return (
    <div className="flex flex-col mb-4">
      <label className="text-black tracking-wider mb-3" htmlFor={id}>
        {label}
      </label>
      <select
        className={clsx(
          "border rounded-lg bg-slate-200 border-red-500 text-black p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        defaultValue=""
        {...(register ? register(name) : {})}
        {...props}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function RadioGroup(props) {
  const { label, error, options, register, name } = props;

  return (
    <div className="flex flex-col mb-4" aria-label={props["aria-label"]}>
      <label className="text-black  mb-3">{label}</label>
      {options.map((option) => (
        <div key={option} className="flex gap-3">
          <input
            type="radio"
            value={option}
            id={option}
            {...(register ? register(name) : {})}
          />
          <label className="text-black " htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function Number(props) {
  const {
    label,
    onChange,
    type,
    placeholder,
    value,
    defaultValue,
    errorMessage,
    register,
    name,
  } = props;

  return (
    <div className="flex flex-col mb-3">
      <label>{label}</label>
      <input
        className="input input-bordered w-full max-w-md h-[2.5rem]"
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        {...(register ? register(name, { valueAsNumber: true }) : {})}
      />
      <p className="text-red-500 p-0">{errorMessage}</p>
    </div>
  );
}

function File(props) {
  const { label, value, onChange, errorMessage, name, register } = props;

  return (
    <div className="flex flex-col mb-3">
      <label>{label}</label>
      <input
        name={name}
        register={register}
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs h-full"
        value={value}
        onChange={onChange}
        accept="image/*"
        {...(register ? register(name) : {})}
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
    register,
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
              onChange={onChange}
              register={register}
              {...(register ? register(name) : {})}
            />
            {label}
          </label>
        </>
      ))}
      <p className="text-red-500 p-0">{errorMessage}</p>
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

export { Input, TextArea, Select, RadioGroup, Number, File, Radio, Toggle };
