import { Route, Routes } from 'react-router-dom'
import { paths } from './data'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function RoutesPage() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        {paths.map(({ path, content: Content }, index) => (
          <Route key={index} path={path} element={<Content />}></Route>
        ))}
      </Route>
    </Routes>
  )
}
