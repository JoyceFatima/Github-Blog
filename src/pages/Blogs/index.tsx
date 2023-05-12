import { useContext, useEffect, useRef } from 'react'
import { GitHubContext } from '../../context/GitHubContext'

import { marked } from 'marked'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Link, useParams } from 'react-router-dom'

import {
  CardContainer,
  Container,
  Description,
  Links,
  Nagivation,
} from './styles'

import VectorBackThumb from '../../assets/images/VectorBack.svg'
import LinkThumb from '../../assets/images/Link.svg'
import GithubThumb from '../../assets/images/Github.svg'
import CalenderThumb from '../../assets/images/Calender.svg'
import CommentsThumb from '../../assets/images/Comments.svg'

import { Loading } from '../../components/Loading'

interface RouteParams {
  [key: string]: string | undefined
  repo: string
  issueNum: string
}

export function Blogs() {
  const { repo, issueNum } = useParams<RouteParams>()
  const { issue, fetchIssue } = useContext(GitHubContext)

  const isFetched = useRef(false)

  useEffect(() => {
    if (repo && issueNum && !isFetched.current) {
      fetchIssue(repo, parseInt(issueNum))
      isFetched.current = true
    }
  }, [fetchIssue, issueNum, repo])

  if (!issue) {
    return <Loading />
  }

  const formattedDate = formatDistanceToNow(new Date(issue.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  const issueBody = issue.body
  const formattedIssueBody = marked(issueBody, {
    mangle: false,
    headerIds: false,
  })

  return (
    <Container>
      <CardContainer>
        <Nagivation>
          <Link to={'/'}>
            <img src={VectorBackThumb} alt="To back" />
            VOLTAR
          </Link>
          <Link to={issue.html_url}>
            VER NO GITHUB
            <img src={LinkThumb} alt="Link" />
          </Link>
        </Nagivation>

        <h2>{issue.title}</h2>

        <Links>
          <li>
            <a href={issue.user?.html_url}>
              <img src={GithubThumb} alt="Profile" />
              <span>{issue.user?.login}</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={CalenderThumb} alt="Profile" />
              <span>{formattedDate}</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={CommentsThumb} alt="Profile" />
              <span>{issue.comments} comentários</span>
            </a>
          </li>
        </Links>
      </CardContainer>

      <Description>
        <div dangerouslySetInnerHTML={{ __html: formattedIssueBody }}></div>
      </Description>
    </Container>
  )
}
