// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Center, Container, Heading, List, ListItem } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  )
}

function Home() {
  const { colorMode } = useColorMode();
  return (
    <>
      <header>
        <title>ricksterhd123 - Home</title>
      </header>
      <body>
        <Center className={colorMode === "light" ? styles.HeaderLight : styles.HeaderDark} padding="1rem" margin="1rem">
          <Container>
            <Heading>ricksterhd123</Heading>
            <Text fontSize="md">22 year old software developer studying Mathematics BSc</Text>
          </Container>
          <ThemeSwitcher/>
        </Center>

        <Container marginBottom="1rem">
          <Heading as="h3" size="1xl">Skills</Heading>
          <List>
            <ListItem><Text>Software engineering</Text></ListItem>
            <ListItem><Text>Database design</Text></ListItem>
            <ListItem><Text>System administration</Text></ListItem>
            <ListItem><Text>Basic knowledge of cybersecurity and cryptography</Text></ListItem>
            <ListItem><Text>Basic knowledge of computer architecture and electronics</Text></ListItem>
            <ListItem><Text>MTA:SA scripting</Text></ListItem>
            <ListItem><Text>Notoriously bad at CSS</Text></ListItem>
          </List>
        </Container>
        
        <Container marginBottom="1rem">
          <Heading as="h3" size="1x1">Education</Heading>
          <List>
            <ListItem><Text>BSc (Hons) Mathematics, on going, started in October 2021</Text></ListItem>
            <ListItem><Text>BSc (Hons) Computer Science, 2.1, graduated on July 2021</Text></ListItem>
          </List>
        </Container>
        
        <Container>
          <Heading as="h3" size="1x1">Interests</Heading>
          <List>
            <ListItem><Text>Reading</Text></ListItem>
            <ListItem><Text>Skateboarding</Text></ListItem>
            <ListItem><Text>Mathematics</Text></ListItem>
            <ListItem><Text>Programming</Text></ListItem>
          </List>
        </Container>
      </body>
    </>
  );
}

export default Home;
