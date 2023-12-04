
const Button = ({value, handleSubmit}) => {
  return (
    <button type="submit" className="btn-1" onClick={handleSubmit}>{value}</button>
  )
}

export default Button