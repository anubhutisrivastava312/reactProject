import React from 'react';
import Card from './components/card';
import Button from './components/Button';
import Button2 from './components/Button2';
import Students from './components/Students';
import UserGreetings from './components/UserGreetings';

function App() {
  return (
    <>
    <div>
      
      <Card />
      <Card />
      <Button/>
      <Button2/>
      <Students name="Doraemon!" age={24} isStudent={true}/>
      <Students name="Shinchan!" age={5} isStudent={false}/>
      <UserGreetings isLoggedIn={true} username="Srishti"/>



    </div>
    </>
  );
}

export default App;

