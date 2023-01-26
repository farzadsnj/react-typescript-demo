import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Input } from "./Input";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import { Box } from "./components/Context/Box";
import { UserContextProvider } from "./components/UserContext";
import { User } from "./components/state/User";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./polymorphic/Text";

function App() {
  const person = {
    fname: "farzad",
    lname: "sanjarani",
  };

  const personList = [
    {
      fname: "farzad1",
      lname: "sanjarani",
    },
    {
      fname: "farzad2",
      lname: "snj",
    },
    {
      fname: "farzad3",
      lname: "9376",
    },
  ];
  
  return (
    <div className="App">
      <Person name={person} />
      <PersonList names={personList} />
      <Status status="loading" />
      <Heading>Hello farzad</Heading>
      <Oscar>
        <Heading>oscar goes to farzad sanjarani</Heading>
      </Oscar>
      <Greet name={"farzad"} messageCount={20} isLoggedIn={false} />
      <Greet name={"farzadsnjNN"} isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" handleOnchange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        label
      </Text>
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary button
      </CustomButton>
      <Toast position="center" />
      <RandomNumber value={10} isPositive />
      <List
        items={["farzad", "snj", "shiraz", "brisbane"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {
            id: 1,
            first: "farzad",
            last: "sanjarani",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <Private isLoggedIn={true} Component={profile} />
      <Counter message="the count value is" />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
