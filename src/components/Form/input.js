import { InputContainer } from "./Input.style"

export const Input = ({ type, placeholder, value, onChange, onClick }) => {
  return <InputContainer type={type} placeholder={placeholder}  value={value} onChange={onChange} onClick={onClick} />
}