import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { modal } from '../../store/actions/actionModal';

function Example({ linkId }) {
  const dispatch = useDispatch();
  const show = useSelector((store) => store.storeModal.window);
  const handleClose = () => dispatch(modal(false));
  return (
    <>
      <Modal
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Find out more.</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Link className="btn btn-primary my-3 fs-6" to={`${linkId}`}>Details</Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
