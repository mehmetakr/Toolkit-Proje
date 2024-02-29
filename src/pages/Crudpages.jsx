import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Table } from "react-bootstrap";
import ForModal from "../components/ForModal";
import { useDispatch, useSelector } from "react-redux";
import { deletetask } from "../redux/slice/crudSlice";
const Crudpages = () => {
  const state = useSelector((store) => store.counterSlice);
  const state2 = useSelector((store) => store.crudSlice);

  const dispatch = useDispatch();

  // görev ekle butonuna basıldıgında Modal açılacak mı state' i

  const [isopen, setisopen] = useState(false);

  //güncellenıcek elemanın stateini tutucaz

  const [edit, setedit] = useState(null);

  console.log(isopen);
  console.log(edit);
  return (
    <div className="px-4">
      <Stack className="align-items-end">
        <Button onClick={() => setisopen(true)} className="mb-5">
          Yeni Görev Ekle
        </Button>
      </Stack>
      <ForModal
        edit={edit}
        isopen={isopen}
        close={() => {
          setisopen(false);
          setedit(null);
        }}
      />
      <Table
        striped
        bordered
        hover
        responsive
        variant={state.is_dark_theme ? "light" : "dark"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>GÖREV</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state2.tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned}</td>
              <td>{task.date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => {
                      setedit(task);
                      setisopen(true);
                    }}
                  >
                    Düzenle
                  </Button>
                  <Button
                    onClick={() => dispatch(deletetask(task.id))}
                    className="mx-4 btn btn-danger rounded"
                  >
                    Sil
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Crudpages;
