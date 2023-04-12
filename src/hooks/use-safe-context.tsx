import { Context, useContext } from 'react'

/**
 * context를 안전하게 사용하기 위한 useContext
 * 상위에 contextProvider가 없으면 context가 에러를 투척함
 * context의 기본값은 null 이여야 함
 * @param context
 */
const useSafeContext = <T,>(context: Context<T>): NonNullable<T> => {
  const contextState = useContext(context)
  if (contextState == null) {
    throw Error(`해당 Context의 Provider가 상위에 없습니다`)
  }
  return contextState as NonNullable<T>
}

export default useSafeContext
