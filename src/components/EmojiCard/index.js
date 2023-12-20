// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetalis, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetalis

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button
        className="button"
        className="emoji-btn"
        onClick={onClickEmojiCard}
      >
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
