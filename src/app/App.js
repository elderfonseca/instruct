import React from 'react';
import '../scss/App.scss';

import UserList from '../component/list-user.component';

function App() {
  return (
    <div className="App">
      <header className="header-content">
        <h2>User list</h2>
      </header>
      <main className="cards-users">
        <UserList></UserList>
      </main>
    </div>
  );
}

export default App;
