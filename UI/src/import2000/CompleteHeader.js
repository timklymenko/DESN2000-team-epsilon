import React from 'react'
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles'

const sections = [
  { title: 'Home', url: '#/home' },
  { title: 'Lesson Plan', url: '#/lesson-plan' },
  { title: 'Leaderboard', url: '#/battery-leaderboard' },
  { title: 'About', url: '#/about' },
]

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

export default function CompleteHeader() {
  const classes = useStyles()

  return <Header title="DESN 2000 Group Epsilon" sections={sections} />
}
