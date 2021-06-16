import './ContentList.css'

const ContentList = ({content, loading}) => {

    return (
        <div className='content-list'>
            <h1>Simple content list</h1>
            <ul className='content-container'>
                {
                    !loading
                        ? (
                            content
                                ? content.map(char => {
                                    const {id, name, status, species, gender, image} = char
                                    return (
                                        <li key={id} className='char-card'>
                                            <div className='char-data'>
                                                <h3> {name}</h3>
                                                <p>status: {status}</p>
                                                <p>species: {species}</p>
                                                <p>gender: {gender}</p>
                                            </div>
                                            <div>
                                                <img src={image} alt={name}/>
                                            </div>
                                        </li>
                                    )
                                })
                                : <h1>Sorry pal, there no character with that name</h1>
                        )
                        : <h1>LOADNIG...</h1>
                }

            </ul>
        </div>

    )
}

export default ContentList
