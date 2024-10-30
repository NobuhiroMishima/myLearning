const Notice = ({title, data}) => {
  return (
    <div className="card">
        <p className="card__title">{title}</p>
        <h4 className="card__number">{data}</h4>
    </div>
  )
}

export default Notice;
