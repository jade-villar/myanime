import { createPortal } from "react-dom";
import "./Toast.css";

function Toast({ message }) {
  return createPortal(
    <div className="toast">
      <p className="toast__message">{message}</p>
    </div>,
    document.body
  );
}

export default Toast;
