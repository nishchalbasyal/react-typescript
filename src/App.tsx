import "./App.css";
import { Button } from "./components/Button";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Input } from "./components/Input";
import Container from "./components/Container";
import { ThemeContextProvider } from "./context/ThemeContext";
import Box from "./context/Box";
import { UserContextProvider } from "./context/UserContext";
import { User } from "./context/User";
import { Counter } from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";
import CustomButton from "./components/html/Button";
import Text from "./components/polymorphic/Text";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Brice",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greet name="Nishchal" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscaar gos to Nishchal Basyal</Heading>
      </Oscar>
      <Greet name="Nishchal" isLoggedIn={false} />

      <Button
        handleClick={(event, id) => {
          console.log("Clicked", event, id);
        }}
      />

      <Input value="" handleChanged={(event) => console.log(event)} />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Counter message="The Count value is" />
      <Private isLoggedIn={true} Component={Profile} />
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} /> */} 

       <List  items={
  [
     {
      id:1,
      first:'Bruce',
      last: 'wayne'

    },
    {
      id:2,
      first:'Clark',
      last:'Kent'
    },
    {
      id:3,
      first:'Clark',
      last:'Kent'
    }

    
  ]
}
onClick={((item)=> console.log(item))}

      />


      <RandomNumber value={10}   isNegative/>
      <Toast position="center" />
      <CustomButton variant="primary" onClick={()=> console.log(`Clicked`)}>
        
        Primary Buttom
       
      </CustomButton>

      <Text as='h1' id='1'   size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor="someId" size='sm' color="secondary">Label</Text>
 
    </div>
  );
}

export default App;
