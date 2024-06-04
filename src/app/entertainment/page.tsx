import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

const Entertainment =async  () => {
  const newsEntertainment = await getNewsSearch("Entertainment")
  const filterArticles = removeDuplicateData(newsEntertainment)

  return (
    <div className='w-[700px]'>
      {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default Entertainment