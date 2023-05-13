import { useState, useContext } from 'react'
import { GitHubContext } from '../../context/GitHubContext'

import { Loading } from '../../components/Loading'
import { Cards } from './components/Cards'
import { SearchInput } from './components/SearchInput'

import {
  BlogContainer,
  CardContainer,
  Content,
  FormAndCards,
  InfoPublis,
  Links,
  NameAndLink,
  ProfileCard,
  ProfileImg,
  SearchForm,
  Title,
} from './styles'

import CompanyThumb from '../../assets/images/Company.svg'
import GithubThumb from '../../assets/images/Github.svg'
import LinkThumb from '../../assets/images/Link.svg'
import UsersThumb from '../../assets/images/Users.svg'

export function Home() {
  const { users, issues } = useContext(GitHubContext)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const filteredIssues = issues?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const isFilteredIssuesEmpty = filteredIssues?.length === 0

  const isIssuesLength = issues ? issues.length : 0

  return (
    <BlogContainer>
      {users && (
        <ProfileCard>
          <ProfileImg>
            <img src={users.avatar_url} alt="Profile" />
          </ProfileImg>
          <Content>
            <NameAndLink>
              <h2>{users.name}</h2>
              <a rel="stylesheet" href={users.html_url}>
                GITHUB
                <img src={LinkThumb} alt="Link" />
              </a>
            </NameAndLink>

            <div>
              <span>{users.bio}</span>
            </div>

            <Links>
              <li>
                <a href={users.html_url}>
                  <img src={GithubThumb} alt="User" />
                  <span>{users.login}</span>
                </a>
              </li>
              <li>
                <a>
                  <img src={CompanyThumb} alt="Company" />
                  <span>Rocketseat</span>
                </a>
              </li>
              <li>
                <a>
                  <img src={UsersThumb} alt="Followers" />
                  <span>{users.followers} seguidores</span>
                </a>
              </li>
            </Links>
          </Content>
        </ProfileCard>
      )}

      {isFilteredIssuesEmpty ? (
        <Loading />
      ) : (
        <FormAndCards>
          <SearchForm>
            <InfoPublis>
              <Title>Publicações</Title>
              <span>{isIssuesLength} publicações</span>
            </InfoPublis>

            <SearchInput onSearch={handleSearch} />
          </SearchForm>
          <CardContainer>
            {filteredIssues?.map((issue) => (
              <Cards
                key={issue.id}
                id={issue.id}
                title={issue.title}
                description={issue.body}
                createdAt={issue.created_at}
              />
            ))}
          </CardContainer>
        </FormAndCards>
      )}
    </BlogContainer>
  )
}
