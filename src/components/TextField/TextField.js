export const TextField = ({ label, id, register, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register} {...props} />
    </div>
  );
};
