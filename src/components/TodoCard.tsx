import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from 'react-bootstrap/Button';

/* card design from: https://material-ui.com/components/cards/ */
// checkboxes https://material-ui.com/components/lists/

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export type TodoItem = {
  title: string,
  dueDate: Date,
  tagList: string[],
  completed: boolean,
}

interface TodoCardProps {
  todo: TodoItem;
  handleCheck: () => void;
}
const TodoCard: React.FC<TodoCardProps> = ({todo, handleCheck}) => {
  const classes = useStyles();
  
  return (
    <div>
      <Card onClick={handleCheck} className={classes.root} variant="outlined">
        <Checkbox
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          // inputProps={{ 'aria-labelledby': labelId }}
        />

        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
            
          </Typography> */}
          <Typography variant="h5" component="h2">
          {todo.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Due Date: {todo.dueDate.toLocaleDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            {todo.tagList.map((tag, index) => <Button key={index} variant="primary">{tag}</Button>)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TodoCard;
