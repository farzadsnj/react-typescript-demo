import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Input } from './Input';
import {ThemeContextProvider} from './components/Context/ThemeContext'
import { Box } from './components/Context/Box'

function App() {

  // const person ={
  //   fname:'farzad',
  //   lname: 'snj'
  // }

  // const personList =[
  //   {
  //     fname:'farzad1',
  //     lname:'sanjarani'
  //   },
  //   {
  //     fname:'farzad2',
  //     lname:'snj'
  //   },
  //   {
  //     fname:'farzad3',
  //     lname:'9376'
  //   }
  // ]

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      {/* <Greet name={'farzad'} messageCount={20} isLoggedIn={false}/>
      <Greet name={'farzadsnjNN'} isLoggedIn={false}/>
      <Person name={person} />
      <PersonList names={personList} />
      <Status status='loading' />
      <Heading>Hello farzad</Heading>
      <Oscar>
        <Heading>
          oscar goes to farzad sanjarani
        </Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log('button clicked',event,id)
      }} />
      <Input value='' handleOnchange={(event => console.log(event))} />
      <Container styles={{border: '1px solid red', padding: '1rem'}}/> */}
    </div>
  );
}

export default App;
