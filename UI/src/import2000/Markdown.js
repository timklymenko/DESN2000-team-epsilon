import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Markdown(props) {
  return (
    <div>
      <br />
      <h1>The RE educational generation session</h1>
      <h4>
        Currently over a billion people around the world have limited or no
        access to electricity. Climate change is accelerating, mainly driven by
        the use of fossil fuels in our energy systems. These are just a couple
        of examples of the existential challenges facing the world today.
        Challenges that can be tackled by the continued uptake of renewable
        energy technology. However, to support this uptake we need to inspire
        the best minds of the next generation to enter the RE industry, as
        currently not enough students are pursuing RE engineering. This is due
        to schools, universities and organisations being limited in how they
        educate about renewables. Fortunately, our solution will help solve this
        issue...
      </h4>
      <ul>
        <li style={{ fontSize: '16px' }}>
          We have created an interactive and inspiring educational set which
          presents multiple renewable energy generation methods and allows
          students to apply the RE theory knowledge we’ve taught them to
          physically charge batteries. These batteries will then be used to
          power simple modelled cars to race each other, capitalising on their
          competitive spirits and bringing excitement to their interaction with
          renewables.
        </li>
        <li style={{ fontSize: '16px' }}>
          We have also designed each generator with educational features in
          mind. By giving students the freedom to alter critical parameters, we
          not only engage the students, but get them thinking about the effects
          of their alterations.
        </li>
        <li style={{ fontSize: '16px' }}>
          Including a comprehensive lesson plan in our system UI to allow our
          educational kit to be purchased by schools and organisations, and have
          teachers with no technical background run these educational RE
          sessions, which allows a scalability in our solution to educate and
          inspire as many students as possible!
        </li>
      </ul>
    </div>
  )
}
