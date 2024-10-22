export default function Input({type, placeholder}) {
  return (
    <>
      <input className="border-b-2 outline-none" type={type} placeholder={placeholder}/>
    </>
  )
}