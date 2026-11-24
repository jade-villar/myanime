import { useState } from "react";
import { handleUpdateMyList } from "../../services/myList";
import "./Modal.css";

function Modal({ setIsOpen, myListItem, myStatus, myScore, user }) {
  const [editStatus, setEditStatus] = useState(myStatus);
  const [editScore, setEditScore] = useState(myScore);

  const update = { myStatus: editStatus, myScore: Number(editScore) };

  return (
    <main className="modal" onClick={() => setIsOpen(false)}>
      <div className="modal__wrap" onClick={(event) => event.stopPropagation()}>
        <div className="modal__fields">
          <div className="modal__field">
            <label className="modal__label" htmlFor="status">Status</label>
            <select
              className="modal__select modal__select--status"
              id="status"
              value={editStatus}
              onChange={(event) => setEditStatus(event.target.value)}
            >
              <option value="Watching">Watching</option>
              <option value="Completed">Completed</option>
              <option value="Dropped">Dropped</option>
              <option value="On Hold">On Hold</option>
              <option value="Plan to Watch">Plan to Watch</option>
            </select>
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="score">Score</label>
            <select
              className="modal__select modal__select--score"
              id="score"
              value={editScore}
              onChange={(event) => setEditScore(event.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        
        <div className="modal__actions">
          <button
            className="modal__btn modal__btn--cancel"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="modal__btn modal__btn--submit"
            onClick={() => {
              handleUpdateMyList(user.uid, myListItem.id, update),
              setIsOpen(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}

export default Modal;
