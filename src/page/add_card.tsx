import React, { useState } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'

import { DataProps, GetCardIDProps } from '../types/page'
import { styles } from '../style/page'

const AddCard = () => {
  const [ name, setName ] = useState('')
  const [ card, setCard ] = useState('')

  const handleSubmit = () => {
    const data: DataProps = {
      name: name,
      cardID: card,
      added: (new Date()).toLocaleString('en-US')
    }
    console.log(data)
  }

  const getCardID = () => {
    fetch('http://192.168.1.39:4000/api/getCard')
      .then(res => res.json())
      .then((data: GetCardIDProps) => setCard(data.cardID))
  }

  const getCardIDEmulation = () => {
    let cardID: string = ''
    for (let i = 1; i <= 8; i++){
      cardID += (Math.floor(Math.random()*(15-0+1))+0).toString(16).toUpperCase()
    }
    setCard(cardID)
  }

  const classes = styles()

  return (
    <Paper className={classes.container}>
      <TextField id='name' label='name' onChange={e => setName(e.target.value)}/>
      <br />
      <TextField id='card' label='Card ID' disabled value={card}/>
      <Button variant='contained' color='primary' onClick={getCardIDEmulation}>Get Card ID</Button>
      <br />
      <Button variant='contained' color='primary' onClick={handleSubmit}>Submit</Button>
    </Paper>
  )
}

export default AddCard