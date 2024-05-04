import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-list-container">
      <div className="content-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain url">{domainUrl}</p>
      </div>
      <button data-testid="delete" type="button" onClick={onDeleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
