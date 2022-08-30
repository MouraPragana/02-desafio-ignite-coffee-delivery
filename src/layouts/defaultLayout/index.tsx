import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/index'
import { LayoutContainer, LayoutContent } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Header />
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  )
}
