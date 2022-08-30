import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <header>Menu</header>
      <Outlet />
    </>
  )
}
