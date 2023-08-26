
const Card = () => {
  return (
    <button type="button" className="btn btn-primary position-relative">
    Profile
    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
      <span className="visually-hidden">New alerts</span>
    </span>
  </button>
  )
}

export default Card