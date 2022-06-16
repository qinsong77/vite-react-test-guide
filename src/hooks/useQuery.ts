import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

// 获取查询参数
const useQuery = () => {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

export default useQuery
