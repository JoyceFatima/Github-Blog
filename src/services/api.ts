import axios from 'axios'

const GITHUB_BASE_URL = 'https://api.github.com'
const GITHUB_USERNAME = 'JoyceFatima'

const api = axios.create({
  baseURL: GITHUB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  },
})

export const getUser = async () => {
  const response = await api.get(`/users/${GITHUB_USERNAME}`)
  return response.data
}

export const getRepo = async (repo: string) => {
  const response = await axios.get(`/repos/${GITHUB_USERNAME}/${repo}`)
  return response.data
}

export const getIssues = async () => {
  const query = `type:issue user:${GITHUB_USERNAME}`
  const response = await api.get('/search/issues', {
    params: {
      q: query,
    },
  })
  return response.data
}

export const getIssue = async (repo: string, issueNumber: number) => {
  const response = await api.get(
    `/repos/${GITHUB_USERNAME}/${repo}/issues/${issueNumber}`,
  )
  return response.data
}
