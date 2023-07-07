import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

interface IError extends Error {
  status?: number
}

const Error = () => {
  const error = useRouteError() as IError

  if (error instanceof Error) {
    if (error.status === 404) {
      return (
        <Wrapper>
          <div>
            <img src={img} alt="not found" />
            <h3>Ohh!</h3>
            <p>We can't seem to find page you are looking for</p>
            <Link to="/">Back Home</Link>
          </div>
        </Wrapper>
      )
    }
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
