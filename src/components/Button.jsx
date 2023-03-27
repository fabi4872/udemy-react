export const Button = ({ type, className, nombreBoton }) => {
  return (
    <button type={ type } className={ className }>
        { nombreBoton }
    </button>
  )
}
