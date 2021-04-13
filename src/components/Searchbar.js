import React from 'react'

const Searchbar = (props) => {
    const [term, setTerm] = React.useState('')

    const handleChange = (event) => {
        setTerm(event.target.value);

    }

    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(term);
    }

    return (
        <>
            <h2 style={{ textAlign: "center" }}>
                <img
                style={{ width: '200px', height: '100px', justifyContent: 'center' }}
                src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png'
                alt="youtube logo"
                />
            </h2>
            <div>
                <form onSubmit={handleSubmit} className='ui form'>
                    <div className='field'>
                        <label
                        htmlFor="video-search"
                        style = {{height: '50px', fontSize: '20px'}}
                        >Ищем видео с YouTube</label>
                        <input
                        onChange={handleChange}
                        name='video-search'
                        type="text"
                        placeholder="Поиск.."
                        style = {{height: '50px', fontSize: '20px'}}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Searchbar
