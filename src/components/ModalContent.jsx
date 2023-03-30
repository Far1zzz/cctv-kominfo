import React, { useState } from "react";
import { Fade, makeStyles } from "@material-ui/core";
import Modal from "@mui/material/Modal";

const useStyle = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "50%",
    height: "80%",
    backgroundColor: "#39445a",
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1),
    margin: "10px",
  },
}));

const ModalContent = ({ children }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="item-cctv" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <iframe
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              title="no"
              src="https://g3.ipcamlive.com/player/player.php?alias=641b4c088bb4e"
              frameBorder={"none"}
              allowFullScreen={true}
              allow="autoplay"
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalContent;
