import clsx from 'clsx'
import { LayoutContextProvider } from '@context/layout-context'
import { useCheck } from '@hooks/use-input'
import { ChildrenProps } from 'types/components'
import LeftBar from './left'
import RightContent from './right'

const Layout = ({ children }: ChildrenProps) => {
  const [isOpen, onChangeToggle, setIsOpen] = useCheck(false)

  return (
    <LayoutContextProvider isOpen={isOpen} onChange={onChangeToggle} setIsOpen={setIsOpen}>
      <div
        className={clsx('w-full max-w-[1280px] px-8 flex flex-1 mx-auto', 'max-md:w-screen max-md:gap-0 max-md:p-0')}
      >
        <div
          className={clsx(
            'fixed inset-0 transition-all duration-300 ease-in-out',
            isOpen ? 'z-20 bg-black/50' : 'z-[-1] bg-transparent',
          )}
        />
        {children}
      </div>
    </LayoutContextProvider>
  )
}

Layout.Left = LeftBar
Layout.Right = RightContent

export default Layout
