import React from 'react'
import ModalPortal from '@components/Modal/ModalPortal'
import { Background, Content } from './DropdownStyles'

const DropdownModal = () => {
  return (
    <>
      <ModalPortal>
        <Background
          onClick={(e: Event | React.MouseEvent) => {
            e.stopPropagation()
            // onClose();
          }}
        >
          <Content
            onClick={(e: Event | React.MouseEvent) => e.stopPropagation()}
          >
            <div style={{ height: '104px' }}>안녕</div>
          </Content>
        </Background>
      </ModalPortal>
    </>
  )
}

export default DropdownModal
