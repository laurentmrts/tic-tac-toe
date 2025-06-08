import {useState} from "react";

export default function Player({initialName, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
  }

  function handleChange(event) {
    setPlayerName(event.target.value); // ici on passe le poiteur comme argument
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    ); // Two Way Binding ici
    btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>{btnCaption}</button>
    </li>
  );
}