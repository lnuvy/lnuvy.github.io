import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById('portal')

  return ReactDOM.createPortal(<>{children}</>, el!)
  // return el && children ? ReactDOM.createPortal(children, el) : null;
}

export default ModalPortal
