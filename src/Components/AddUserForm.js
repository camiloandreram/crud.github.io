import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    props.addUser(data);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Cancion</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, menssage: 'campo requerido' },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Cantante</label>
      <input
        type="text"
        name="Username"
        ref={register({
          required: { value: true, menssage: 'campo requerido' },
        })}
      />
      <div>{errors?.Username?.menssage}</div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
