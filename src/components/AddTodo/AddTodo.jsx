import React, { useState } from 'react';
import s from './AddTodo.module.css'
import { v1 as uuidv1 } from 'uuid';

const AddTodo = ({ todo, setTodo }) => {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv1(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }


    return (
        <div className={s.container_addtask}>
            <div className={s.form_add}>
                <input className={s.inp_add} onChange={(e) => setValue(e.target.value)} value={value} />
                <button className={s.btn_add} onClick={saveTodo}>ADD</button>
            </div>
        </div>
    );
};

export default AddTodo;