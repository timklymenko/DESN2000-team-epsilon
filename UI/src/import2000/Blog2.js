import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import GitHubIcon from '@material-ui/icons/GitHub'
import ChatIcon from '@material-ui/icons/Chat'
import BallotIcon from '@material-ui/icons/Ballot'
import FaceIcon from '@material-ui/icons/Face'
import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Main from './Main'
import Sidebar from './Sidebar'
import Footer from './Footer'
import network from '../assets/global-network.png'
import cloud from '../assets/cloud.png'
// import solarCellsPdf from '../assets/Solar_Cells.pdf'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const mainFeaturedPost = {
  title: 'Reneweable Energy Generation Race',
  description:
    'Learn about renewable energy generators, and then use this knowledge to compete against each other to charge your batteries and race your cars!',
}

const featuredPosts = [
  {
    title: 'Lesson Plan',
    date: 'Check me out first!',
    url: '#/lesson-plan',
    description:
      'Look through the RE theory that you will teach the kids with our so that they can get the most out of the educational session. This section will also provide some guidelines of how to run the session',
    image:
      'https://ae01.alicdn.com/kf/Hf22352f5d4124313ab089940d94d6946l/Laeacco-Photographic-Backdrop-Cartoon-Blackboard-Child-Baby-Chalks-School-Customize-For-Photography-Backgrounds-For-Photo-Studio.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Battery charging session',
    url: '#/battery-leaderboard',
    date: "Check me out once you've gone through the lesson plan!",
    description:
      "Watch our battery portal to see in real time as you're batteries are charged! Make sure to remember the theory you learnt from the lesson to optimise how much power you can generate!",
    image:
      'https://cdn3.vectorstock.com/i/thumb-large/04/92/battery-superhero-vector-7570492.jpg',
    imageText: 'Image Text',
  },
]

const sidebar = {
  title: 'Resources',
  description:
    'Check out the archive: a collection of resources from throughout DESN2000, T3 2020',
  archives: [
    {
      title: 'Construction photos of the project',
      url: '#',
    },
    {
      title: 'Summary slide of the key project capabilties and features',
      url: '#/about',
    },
  ],
  social: [
    {
      name: 'GitHub Repo',
      icon: GitHubIcon,
      url: 'https://github.com/timklymenko/miniSolarRepo/tree/master',
    },
    {
      name: 'The DESN2000 UNSW handbook page',
      icon: BallotIcon,
      url:
        'https://www.handbook.unsw.edu.au/undergraduate/courses/2021/DESN2000/',
    },
    {
      name: 'The man, the myth, the legend...',
      icon: FaceIcon,
      url: '#/Ivan',
    },
  ],
}

export default function Blog() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Read more about the project..." />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="RE Educational Kit"
        description="Teaching the best minds of the next generation about RE!"
      />
    </React.Fragment>
  )
}
