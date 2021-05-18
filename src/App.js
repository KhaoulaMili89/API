import  './App.css' ;
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from './UserList';

function  App ( )  {
  return (
    <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={UserList} />
        </Switch>
      </BrowserRouter>
    </div>
  ) ;
}

export  default  App ;