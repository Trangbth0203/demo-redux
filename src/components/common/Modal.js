/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalExample = (props) => {
    const { className, openModal, setOpenModal, children, onClickSave } = props

    return (
        <div>
            <Modal isOpen={openModal} toggle={() => setOpenModal(false)} className={className}>
                <ModalHeader toggle={() => setOpenModal(false)}>Update</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setOpenModal(false)}>
                        Đóng
                    </Button>{' '}
                    <Button color="secondary" onClick={onClickSave}>
                        Lưu
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalExample
