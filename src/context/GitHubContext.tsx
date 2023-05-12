import React, { createContext, useState, useEffect } from 'react'

import { getIssue, getIssues, getUser } from '../services/api'

export interface User {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  login: string
  followers: number
}

export interface Issue {
  id: number
  title: string
  body: string
  created_at: number
  html_url: string
  user?: {
    html_url: string
    login: string
  }
  comments: number
  repoId: string
}

interface GitHubContextData {
  users: User | null
  issues: Issue[]
  issue: Issue | null
  searchTerm: string
  selectedIssue: Issue | null
  getUsers: () => Promise<void>
  fetchIssues: () => Promise<void>
  fetchIssue: (repo: string, issueNumber: number) => void
  setSearchTerm: (term: string) => void
  setSelectedIssue: (issue: Issue | null) => void
}

export const GitHubContext = createContext<GitHubContextData>({
  users: null,
  issues: [],
  issue: null,
  searchTerm: '',
  selectedIssue: null,
  getUsers: async () => {},
  fetchIssues: async () => {},
  fetchIssue: async () => {},
  setSearchTerm: () => {},
  setSelectedIssue: () => {},
})

interface GitHubProviderProps {
  children: React.ReactNode
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [users, setUsers] = useState<User | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])
  const [issue, setIssue] = useState<Issue | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null)

  const getUsers = async () => {
    const response = await getUser()
    setUsers(response)
  }

  const fetchIssues = async () => {
    const response = await getIssues()
    setIssues(response.items)
  }

  const fetchIssue = async (repo: string, issueNumber: number) => {
    const response = await getIssue(repo, issueNumber)
    setIssue(response)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getUsers()
      fetchIssues()
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <GitHubContext.Provider
      value={{
        users,
        issues,
        issue,
        searchTerm,
        selectedIssue,
        getUsers,
        fetchIssues,
        fetchIssue,
        setSearchTerm,
        setSelectedIssue,
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}
