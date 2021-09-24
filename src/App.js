import { Container, Typography } from '@material-ui/core';
import './App.css';
import RegForm from './components/RegForm/RegForm';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography component="h1" variant="h4" align="center">
        Registration Form
      </Typography>
      <RegForm />
    </Container>
  );
}

export default App;
