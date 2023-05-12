import { useNavigate } from 'react-router-dom'

import { marked } from 'marked'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import {
  Card,
  CardContainer,
  Description,
  DescriptionContainer,
  Title,
} from './styles'
import { useContext } from 'react'
import { GitHubContext } from '../../../../context/GitHubContext'

export function Cards({ id, title, description, createdAt }: any) {
  const { issues } = useContext(GitHubContext)

  const navigate = useNavigate()

  const handleCardClick = (issueNumber: number) => {
    const selectedIssue = issues.find((issue) => issue.id === issueNumber)

    if (selectedIssue && selectedIssue.html_url) {
      const urlParts = selectedIssue.html_url.split('/')

      if (urlParts.length >= 7) {
        const [, , , , repo, , issueNum] = urlParts
        navigate(`/blog/${repo}/${issueNum}`)
      } else {
        console.error('Invalid URL format:', selectedIssue.html_url)
      }
    }
  }

  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  const formattedDescription = marked(description, {
    mangle: false,
    headerIds: false,
  })

  return (
    <CardContainer key={id}>
      <Card onClick={() => handleCardClick(id)}>
        <Title>
          <h1>{title}</h1>
          <span>{formattedDate}</span>
        </Title>

        <DescriptionContainer>
          <Description
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></Description>
        </DescriptionContainer>
      </Card>
    </CardContainer>
  )
}
