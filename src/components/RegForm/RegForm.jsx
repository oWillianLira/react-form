import { useState } from 'react';
import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';

export default function RegForm() {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [sin, setSin] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(name + ' ' + lastname + ' ' + sin);
      }}
    >
      <TextField
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        id="name"
        label="Name"
        fullWidth
        margin="dense"
        variant="outlined"
      />

      <TextField
        value={lastname}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        id="lastname"
        label="Last Name"
        fullWidth
        margin="dense"
        variant="outlined"
      />

      <TextField
        value={sin}
        onChange={(e) => {
          setSin(e.target.value);
        }}
        id="sin"
        label="SIN"
        fullWidth
        margin="dense"
        variant="outlined"
      />

      <FormControlLabel
        label="Promotions"
        control={<Switch id="promo" name="promo" defaultChecked color="primary" />}
      />

      <FormControlLabel label="News" control={<Switch id="news" name="news" defaultChecked color="primary" />} />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
