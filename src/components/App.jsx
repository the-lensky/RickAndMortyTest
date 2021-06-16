import Header from './Header'
import ContentList from './ContentList'
import { useFetchContent } from '../hooks/useFetchContent'
import './App.css'
import { useEffect } from 'react'
import FetchMoreButton from './FetchMoreButton'


const App = () => {
    const [imgList, fetchData, fetchMore,info] = useFetchContent()

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="App">
            <Header onSearch={fetchData} info={info}/>
            <ContentList content={imgList} fetchMore={fetchMore}/>
            {
                imgList && info?.next
                    ? <FetchMoreButton onClick={fetchMore}>Fetch More </FetchMoreButton>
                    : null
            }
        </div>
    )
}

export default App
