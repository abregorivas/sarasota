import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Card,
  Icon,
  CardHeader,
  CardContent,
  Container,
  Chip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    backgroundColor: 'white',
    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`,
    border: `1px solid transparent`,
    padding: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%'
  },
  chip: { margin: theme.spacing(1), fontSize: 12 },
  button: {
    lineHeight: '1rem',
    border: `1px solid #5BABB5`,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    borderRadius: 0,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#5BABB5',
      color: 'white'
    }
  },
  sendIcon: {
    marginLeft: theme.spacing(1),
    width: '1rem'
  }
}));

const ContactForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Send us an Email" />
        <CardContent>
          <Chip label="Bible Study" className={classes.chip} />
          <Chip label="Spiritual Counseling" className={classes.chip} />
          <Chip label="General Questions" className={classes.chip} />
          <form
            className={classes.container}
            action="https://formspree.io/kensarasota@gmail.com"
            method="POST"
          >
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  type="text"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange('email')}
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows="4"
                  value={values.message}
                  onChange={handleChange('message')}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              type="submit"
              value="Send"
            >
              Send Email
              <Icon>
                <Send className={classes.sendIcon} />
              </Icon>
            </Button>
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactForm;
