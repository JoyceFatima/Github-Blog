import { useCallback, ChangeEvent } from 'react'

import { InputComponent } from './styles'

interface SearchProps {
  onSearch: (term: string) => void
}

export function SearchInput({ onSearch }: SearchProps) {
  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value
      onSearch(term)
    },
    [onSearch],
  )

  return (
    <InputComponent type="text" placeholder="Buscar" onChange={handleSearch} />
  )
}
