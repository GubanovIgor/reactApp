import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Import components
import Main from './pages/Main';
import Todos from './pages/Todos';
import Auth from './pages/Auth';
import Registration from './pages/Registration';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </head>

      <Router>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/"><MenuItem onClick={handleClose}>Главная</MenuItem></Link>
          <Link to="/todos"><MenuItem onClick={handleClose}>Ваши todos</MenuItem></Link>
          <Link to="/auth"><MenuItem onClick={handleClose}>Вход</MenuItem></Link>
          <Link to="/registration"><MenuItem onClick={handleClose}>Регистрация</MenuItem></Link>
        </Menu>

        <Switch>
        <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/todos">
            <Todos />
          </Route>

          <Route path="/auth">
            <Auth/>
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
