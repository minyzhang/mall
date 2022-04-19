import React from 'react'

export default function Modal(props) {

  return (
    <Modal
        title="gitHun search"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <form>
          <input
            type="text"
            value={props.username}
            onChange={(e)=>props.changeVal(e)}
            placeholder="GitHub username"
            required
          />
        </form>
      </Modal>
  )
}
