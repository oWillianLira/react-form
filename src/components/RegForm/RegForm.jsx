import { useState } from 'react';
import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';

export default function RegForm(props) {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [sin, setSin] = useState();
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({ sin: { valid: true, tip: '' } });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.whenSubmit({ name, lastname, sin, promo, news });
      }}
    >
      <TextField
        // value={name}
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
        // value={lastname}
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
        // value={sin}
        onChange={(e) => {
          setSin(e.target.value);
        }}
        onBlur={(e) => {
          const isValid = props.validateSin(sin);
          setErrors({ sin: isValid });
        }}
        error={!errors.sin.valid}
        helperText={errors.sin.tip}
        id="sin"
        label="SIN"
        fullWidth
        margin="dense"
        variant="outlined"
      />

      <FormControlLabel
        label="Promotions"
        control={
          <Switch
            onChange={(e) => {
              setPromo(e.target.checked);
            }}
            id="promo"
            name="promo"
            checked={promo}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="News"
        control={
          <Switch
            onChange={(e) => {
              setNews(e.target.checked);
            }}
            id="news"
            name="news"
            checked={news}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
