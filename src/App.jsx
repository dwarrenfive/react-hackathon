import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kQuotes: [],
            tQuotes: [],
            isLoading: true,
        }
    }

    fetchKanye() {
        fetch("https://api.kanye.rest")
            .then(responce => responce.json())
            .then(parsedJSON => parsedJSON)
            .then(kQuotes => this.setState({
                kQuotes: kQuotes,
                isLoading: false
            }))
            .catch(error => console.log('parsing failed', error))
    }

    fetchTrump() {
        fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
            .then(responce => responce.json())
            .then(parsedJSON => parsedJSON)
            .then(sQuotes => this.setState({
                tQuotes: sQuotes,
                isLoading: false
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { tQuotes, kQuotes, isLoading } = this.state;
        return (
            <div className="container">
                <h1 className='text-center text-white m-2'>Trump & Kanye</h1>
                <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939" className="z-index:2 m-2 rounded mx-auto d-block" />
                <div className="col text-center">
                    <button onClick={() => { this.fetchTrump(); this.fetchKanye(); }} className="btn btn-success m-2">Action!</button>
                </div>
                <div className='mt-2'>
                    {
                        !isLoading ? <div><h6>Trump!</h6><p>{tQuotes.message}</p><br /><h6>Kanye!</h6><p>{kQuotes.quote}</p></div> : null
                    }
                </div>
            </div >
        )
    }
}

export default App;
