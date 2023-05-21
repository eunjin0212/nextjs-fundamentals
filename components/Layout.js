import { useRouter } from 'next/router';
import NavBar from './NavBar';
import Seo from './Seo';

const titles = {
  '/': 'Home',
  '/about': 'About'
}
export default function Layout({ children }) {
  const router = useRouter()
  return (
    <>
      <Seo title={titles[router.pathname]} />
      <NavBar />
      <div>{children}</div>
    </>
  )
}