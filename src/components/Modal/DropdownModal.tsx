import React from 'react'
import ModalPortal from '@components/Modal/ModalPortal'

const DropdownModal = () => {
  return (
    <>
      <ModalPortal>
        <div
          className="fixed z-[5] left-0 top-0 h-full w-full text-center"
          onClick={(e: Event | React.MouseEvent) => {
            e.stopPropagation()
            // onClose();
          }}
        >
          <div
            className="z-[204] h-[min(85vh,820px)] max-w-[580px] w-4/5 rounded-lg bg-white relative overflow-scroll inline-block"
            onClick={(e: Event | React.MouseEvent) => e.stopPropagation()}
          >
            <div style={{ height: '104px' }}>안녕</div>
          </div>
        </div>
      </ModalPortal>
    </>
  )
}

export default DropdownModal
