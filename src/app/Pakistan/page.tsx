import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

const Pakistan =async  () => {
  const newsPakistan = await getNewsSearch("Pakistan")
  const filterArticles = removeDuplicateData(newsPakistan)

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

export default Pakistan