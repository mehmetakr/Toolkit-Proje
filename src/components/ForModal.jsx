import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addtask, edittask } from "../redux/slice/crudSlice";
import { useDispatch } from "react-redux";

const ForModal = ({ isopen, close, edit }) => {
  // Form gönderilince sayfayı yenilemesını engellememiz lazım..
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();

    //Formdaki inputlardakı degerleri alıp bir obje olusturmalıyız.

    //Formdata adlı sınıfa gerreklı verileri verdik ve bize fomrdata adlı nesne döndürüldü...
    const formdata = new FormData(e.target);

    // 2) İnputlardaki verilerden bir o bje oluşturduk..
    const task = Object.fromEntries(formdata.entries());

    if (edit) {
      //güncellenıcek eleman varsa eedittask aksıyonu güncelle
      dispatch(edittask({...task ,id :edit.id}));
    } else {
      //Yoksa taske güncelleme yap ve yeni eleman eklemesi yap
      dispatch(addtask(task));
    }

    // 3 ) Yenı taskı store a ekle

    // dispatch payload olarak addtask geçtik ancak payload değeri olarak yeni  taskı eklememiz lazım
    dispatch(addtask(task));

    close();
  };

  return (
    <Modal
      onHide={close}
      show={isopen}
      size="lg"
      aria-labelledby="contained-modal-titlevcenter"
      centered
    >
      {/* BAŞLIK */}
      <Modal.Header closeButton>
        <Modal.Title>
          {edit ? "Görevi Güncelle" : "Yeni Görev Ekle"},
        </Modal.Title>
      </Modal.Header>
      {/* İNPUT İÇERİKLER */}
      <Modal.Body>
        <Form onSubmit={handlesubmit}>
          <Form.Group>
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control
              defaultValue={edit?.title}
              required
              name="title"
              placeholder="Görevi Tanımlayiniz"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Yazan Kişi</Form.Label>
            <Form.Control
              defaultValue={edit?.assigned}
              required
              name="assigned"
              placeholder="Yazan kişi adını giriniz"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanan Kişi</Form.Label>
            <Form.Control
              defaultValue={edit?.author}
              required
              name="author"
              placeholder="Atanan kişi adınız Giriniz"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>

            <Form.Control
              defaultValuevalue={edit?.date}
              required
              name="date"
              type="date"
              placeholder="tarihi giriniz"
            />
          </Form.Group>
          <Modal.Footer>
            {/* BUTONLAR */}
            <Button type="button" onClick={close} variant="secondary">
              Kapat
            </Button>
            <Button type="submit">Kaydet</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ForModal;
{
  /* <label htmlFor="">Görevi Giriniz</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Adınızı Giriniz</label>
              <input type="text" className="form-control" /> */
}
