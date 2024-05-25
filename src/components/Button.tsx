// type BtnProps = {
//   label: string;
//   click: () => void;
//   disabled?: boolean;
//   className: string;
// };

function Button (props:{label:string;click:()=>void;className:string}) {
  const { label, click, className } = props;
  return (
    <button onClick={click} className={className} >
      {label}
    </button>
  );
};

export default Button;
