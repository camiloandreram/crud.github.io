import React from 'react';
import { useForm } from 'react-hook-form';

const EditUsertForm = (props) => {
  console.log(props.currenUsert);
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, menssage: 'campo requerido' },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="Username"
        ref={register({
          required: { value: true, menssage: 'campo requerido' },
        })}
      />
      <div>{errors?.Username?.menssage}</div>
      <button>Edit user</button>
    </form>
  );
};

export default EditUsertForm;
