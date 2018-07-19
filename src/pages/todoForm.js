import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../withRoot';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux'
import { addNote , getNote } from '../actions'
import { bindActionCreators } from 'redux';



const styles = theme => ({
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
        this.props.addNote(this.state.noteToAdd)
      }
    
    handleFetch = () => {
        this.props.getNote()

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

                    <Button variant="contained" color="primary" onClick={this.handleFetch}>
                        Fetch NOTES
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

const mapDispatchToProps = dispatch => bindActionCreators({
    addNote,
    getNote
}, dispatch)

export default withStyles(styles)(connect(null, mapDispatchToProps)(TodoForm));
