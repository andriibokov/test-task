import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { Header } from './components/Header/header';
import { routes } from './core/router/routerList';

const reactLocation = new ReactLocation();

const App = () => (
  <Router location={reactLocation} routes={routes}>
    <Header />
    <Outlet />
  </Router>
);

export default App;
