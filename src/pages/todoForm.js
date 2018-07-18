import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  card: {
    minWidth: 275,
  },
  todoList: {
    marginBottom: 50,
  },
  form: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
  }
});

class TodoForm extends React.Component {

    state = {
        noteToAdd: "",
    };

    handleChange = (e) => {
        this.setState({noteToAdd: e.target.value});
      }

    handleClick = (e) => {
        console.log(this.state)
        this.props.onNoteAdd(this.state.noteToAdd)
      }

  render() {
    const { classes } = this.props;

    return (
        <Card className={classes.form}>
            <Grid container>
                <Grid item xs={8}>
                    <TextField id="note" type="text" label="add a note" onChange={this.handleChange}/>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                        ADD NOTE
                    </Button>
                </Grid>
            </Grid>
        </Card>
                
    );
  }
}

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(TodoForm));
