import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.scss";
import { useGlobalContext } from "../../context";
import { createAsyncPost } from "../../features/post-slice";
import { useDispatch } from "react-redux";

const CreatePostForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userid } = useGlobalContext();
  const dispatch = useDispatch();

  const state = {
    title: "",
    body: "",
    userid: userid,
  };
  const [formData, setFormData] = useState(state);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreatePost = () => {
    dispatch(createAsyncPost(formData));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create a Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="body" className="form-label">
                Description
              </label>
              <textarea
                name="body"
                className="form-control"
                value={formData.body}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreatePost}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePostForm;
