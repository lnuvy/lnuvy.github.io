import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react'

type ReturnTypes<T = any> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
]

export const useInput = <T = any>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData)
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T)
  }, [])
  return [value, handler, setValue]
}

export const useInputs = <T = any>(initialData: T): ReturnTypes => {
  const [values, setValues] = useState(initialData)

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((val) => ({ ...val, [name]: value }))
  }, [])
  return [values, handler, setValues]
}

export const useCheck = <T = any>(init: T): ReturnTypes => {
  const [check, setCheck] = useState(init)
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked as unknown as T)
  }, [])
  return [check, handler, setCheck]
}
