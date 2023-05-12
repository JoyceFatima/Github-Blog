import { BeatLoader } from 'react-spinners'

import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <BeatLoader color="#3294F8" size={30} />
      <span>Loading...</span>
    </LoadingContainer>
  )
}
