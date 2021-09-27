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
      <RegForm whenSubmit={submitForm} validateSin={sinValidator} />
    </Container>
  );
}

function submitForm(data) {
  console.log(data);
}

function sinValidator(sin) {
  if (!sin || sin.length !== 9) {
    return { valid: false, tip: 'A valid SIN must contain 9 numbers.' };
  } else {
    return { valid: true, tip: '' };
  }
}

export default App;
