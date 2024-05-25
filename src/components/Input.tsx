// type InpProps = {
//   label: string;
//   type: string;
//   className?: string;
//   placeholder: string;
//   change?: (val: string) => void;
//   value?: string;
//   required?: boolean;
// };

function Input(props:{label:string;type:string;className:string;placeholder:string;change?:(val:string)=>void;required?:boolean;value?:string}) {
  const handleChange = (val: string) => {
    if (props.change) {
      props.change(val);
    }
  };

  return (
    <>
      <h6>{props.label}</h6>
      <input
        type={props.type ?? "text"}
        className={props.className}
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e.target.value)}
        value={props.value}
        required={props.required}
      />
    </>
  );
}

export default Input;
