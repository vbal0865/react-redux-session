import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Grid from '@material-ui/core/Grid';
import TodoList from './todoList';
import TodoForm from './todoForm';

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

class Dashboard extends React.Component {

    state = {
        noteList: [],
    };

    onNoteAdd = (note) => {
        this.setState({
            noteList: [...this.state.noteList, note],
        })
    }
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={3}/>
        <Grid item xs={6}>
            <TodoList noteList={this.state.noteList}/>
            <Grid container>
                <Grid item xs={4}/>
                <Grid item xs={8}>
                    <TodoForm onNoteAdd={this.onNoteAdd}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Dashboard));
