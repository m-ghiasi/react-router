import { Outlet } from "react-router";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useState } from "react";

export default function Prudacts() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      prudacts pages:
      <br />
      <Button
        label={"get-list"}
        className="bg-slate-500"
        onClick={handleClick}
      />

      {show ? (
        <Modal>
          <p onClick={handleClose}>close</p>
        </Modal>
      ) : null}
      <Outlet />
    </div>
  );
}
