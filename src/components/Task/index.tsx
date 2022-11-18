
import styles from './style.module.css'
import { TrashSimple, CheckCircle } from 'phosphor-react'
import { ITask } from '../../App'

interface TaskProps {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {

  return(
    <div className={styles.taskContainer}>
      <button 
        className={styles.checkButton} 
        onClick = {() => {onComplete(task.id)}}>
          {task.isCompleted ? <CheckCircle size={18} weight={'bold'} /> : <div /> }
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <button className={styles.deleteButton} onClick = {() => {onDelete(task.id)}} >
        <TrashSimple size={18} />
      </button>
    </div>
  )
}