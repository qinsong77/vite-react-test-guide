import * as React from 'react'
import axios from 'axios'

const URL = 'http://hn.algolia.com/api/v1/search'

type TStory = {
  url: string
  title: string
  objectID: string
}

const StoryList: React.FC = () => {
  const [stories, setStories] = React.useState<TStory[]>([])
  const [error, setError] = React.useState(null)

  async function handleFetch(event: React.UIEvent) {
    try {
      const result = await axios.get<{
        hits: TStory[]
      }>(`${URL}?query=React`)

      setStories(result.data.hits)
    } catch (error: any) {
      setError(error)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleFetch}>
        Fetch Stories
      </button>

      {error && <span>Something went wrong ...</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoryList
