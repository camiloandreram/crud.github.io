import React, { useState } from 'react';
import UserTable from './Components/UserTable';
import AddUserForm from './Components/AddUserForm';
import EditUsertForm from './Components/EditUsertForm';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const usersData = [
    { id: uuidv4(), name: 'Give up', username: 'Chester Bennington' },
    { id: uuidv4(), name: 'Dua lipa', username: 'Breack my heart' },
    { id: uuidv4(), name: 'Eminem', username: 'Lose yorself' },
  ];

  const [users, setUsers] = useState(usersData);
  //agregar user
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  /*const deleteUser = (id) => {
    const arrayFiltrado = users.filter((user) => User.id !== id);
    setUsers(arrayFiltrado);
  };*/
  //eliminar
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  //editar
  const [editing, setEditing] = useState(false);

  const [currentUser, setcurrentUsert] = useState({
    id: null,
    name: '',
    username: '',
  });

  const editRow = (user) => {
    setEditing(true);
    setcurrentUsert({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  return (
    <div className="container">
      <h1>Las mejores Canciones</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edita tu cancion</h2>
              <EditUsertForm currentUser={currentUser} />
            </div>
          ) : (
            <div>
              <h2>Agrega tu cancion</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>

        <div className="flex-large">
          <h2>Tus Canciones</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
