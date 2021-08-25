import React, { useState, useEffect } from 'react'
import todoApi from '../api/TodoApi'
import ModalExample from '../components/common/Modal'
import store from '../redux/store'
import {
    Table,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
} from 'reactstrap'
import {
    deleteTodo,
    updateTodo,
} from '../redux/actionCreators/todoActionCreator'

function Todo(props) {
    const { todo } = props
    const [openModal, setOpenModal] = useState(false)
    const [updateId, setUpdateId] = useState('')
    const [inputValue, setInputValue] = useState({
        id: '',
        department_name: ''
    })
    const onDeleteItem = async (id) => {
        // eslint-disable-next-line no-restricted-globals
        if (!confirm('Bạn có chắc chắn xóa không?')) return
        try {
            // await todoApi.deleteByID(id)
            store.dispatch(deleteTodo(id))
        } catch (error) {
            console.log(error)
        }
    }
    const onUpdateItem = (id) => {
      store.dispatch(updateTodo(inputValue))
    }
    let updateItem = {}
    if (updateId) {
      const idx = todo?.findIndex(item => item.id === updateId)
      if (idx > -1) {
        updateItem = todo[idx]
      }
    }
    useEffect(() => {
      setInputValue(updateItem)
    }, [updateId])

    const onChangeValue = (e) => {
      const { name, value } = e.target
      setInputValue(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>#No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Manager</th>
                    <th>Manager other</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todo?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{item.department_name}</td>
                            <td>{item.department_phone}</td>
                            <td>{item.department_manager}</td>
                            <td>{item.department_manager_other}</td>
                            <th>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => onDeleteItem(item.id)}
                                >
                                    Xóa
                                </span>{' '}
                                |
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setOpenModal(!openModal)
                                        setUpdateId(item.id)
                                    }}
                                >
                                    {' '}
                                    Sửa
                                </span>
                            </th>
                        </tr>
                    )
                })}
            </tbody>
            <ModalExample
                openModal={openModal}
                setOpenModal={setOpenModal}
                onClickSave={() => onUpdateItem(updateId)}
            >
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>
                            Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="department_name"
                                placeholder="Name"
                                onChange={onChangeValue}
                                value={inputValue.department_name || ''}
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </ModalExample>
        </Table>
    )
}

export default Todo
