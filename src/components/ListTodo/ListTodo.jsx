import React, { useState } from 'react'
import s from './ListTodo.module.css'
import { TfiTrash } from 'react-icons/tfi'
import { GrEdit } from 'react-icons/gr'
import { RxLockClosed, RxLockOpen1 } from 'react-icons/rx'

function ListTodo({ todo, setTodo }) {
    // console.log(todo);

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {

        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        console.log(newTodo);
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }



    return (
        <section className={s.section_list}>
            <div className={s.list_todo}>
                {
                    todo.map(item => (
                        <div className={s.list} key={item.id}>
                            {
                                edit === item.id ?

                                    <input className={s.hidden_inp} value={value} onChange={(e) => setValue(e.target.value)} />

                                    :
                                    <div className={s.overclose}>
                                        <span className={!item.status ? s.close : ''}>{item.title}</span>
                                    </div>
                            }
                            {
                                edit === item.id ?

                                    <button className={s.hidden_btn} onClick={() => saveTodo(item.id)}>Save</button>

                                    :
                                    <div className={s.container_btn}>
                                        <div className={s.buttons}>
                                            <TfiTrash className={s.trash} onClick={() => deleteTodo(item.id)}>Delete</TfiTrash>
                                            <GrEdit className={s.edit} onClick={() => editTodo(item.id, item.title)}>Edit</GrEdit>
                                            <button onClick={() => statusTodo(item.id)}>
                                                {
                                                    item.status ? <RxLockOpen1 className={s.closed} /> : <RxLockClosed className={s.opened} />
                                                }
                                            </button>
                                        </div>
                                    </div>
                            }



                        </div>


                    ))
                }
            </div>
        </section >
    );
}

export default ListTodo;