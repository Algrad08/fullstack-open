import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const MostVotedAnecdote = ({anecdote, votes}) => {
    const maxNumOfVotes = Math.max(...votes)
    const maxVoted = votes.findIndex(max => max === maxNumOfVotes)
    return (
      <div>
        {maxNumOfVotes ? <p>{anecdote[maxVoted]}<br/><br/>{`Has ${maxNumOfVotes} votes`}</p> : "Please vote for your favorite anecdote."}
      </div>
    )
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const vote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    return setVotes([...copyVotes])
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}<br/><br/>Has {votes[selected]} votes</p>
      <Button handleClick={getRandomAnecdote} text="Next Anecdote" />
      <Button handleClick={vote} text="vote" />
      <h2>Anecdote with most votes</h2>
      <MostVotedAnecdote anecdote={anecdotes} votes={votes}/>
    </div>
  )
}

export default App