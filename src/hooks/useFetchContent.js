import { useCallback, useState } from 'react'


export const useFetchContent = () => {
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState({})
    const [imgList, setImgList] = useState([])
    const fetchData = useCallback(async (value) => {
        try {
            if (!value) {
                setLoading(true)
                const response = await fetch(`https://rickandmortyapi.com/api/character/`)
                const data = await response.json()
                setInfo(data.info)
                setImgList(data.results.slice(0, 10))
                window.scrollTo(0, 0)
                setLoading(false)
            } else {
                setLoading(true)
                const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
                const data = await response.json()
                setInfo(data.info)
                setImgList(data.results)
                window.scrollTo(0, 0)
                setLoading(false)
            }
        }
        catch (e) {
            console.log(e, 'ОШИБОЧКА')
        }
    }, [imgList])

    const fetchMoreData = async () => {
        setLoading(true)
        const response = await fetch(`${info.next}`)
        const data = await response.json()
        const moreImg = data.results.slice(0, 10)
        setInfo(data.info)
        setImgList([...imgList, ...moreImg])
        console.log(info.next)
        console.log(imgList, moreImg)
        setLoading(false)
    }

    return [imgList, fetchData, fetchMoreData, info, loading]
}
