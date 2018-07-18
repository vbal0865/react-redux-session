import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  todoList: {
    marginBottom: 50,
  }
});

class TodoList extends React.Component {

  render() {
    const { classes } = this.props
    return (
        <Card className={classes.todoList}>
            <CardContent>
                <List>
                {this.props.noteList.map((value, i) => (
                    <ListItem key={`listItem${i}`} dense button className={classes.listItem}>
                    <ListItemText primary={`${value}`} />
                    </ListItem>
                ))}
                </List>
            </CardContent>
        </Card>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(TodoList));
