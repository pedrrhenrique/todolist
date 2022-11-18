
import rocketLogo from '../../assets/rocketLogo.svg'
import styles from './style.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {

  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
     event.preventDefault();

     onAddTask(title);
     setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return(
    <header className={styles.header}>
      <img src={rocketLogo}></img>

      <form className={styles.newTask} onSubmit={handleSubmit}>
        <input
          type="text" placeholder='Adicione uma tarefa'
          onChange={onChangeTitle} 
          value={title} required />
        <button>
          Criar
          <PlusCircle size={16} weight={'bold'} />
        </button>
      </form>
    </header>
  )
}