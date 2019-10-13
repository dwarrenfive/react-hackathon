import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false
        }
    }


    componentDidMount() {
        this.fetchQuote()
    }

    fetchQuote() {
        fetch("https://api.kanye.rest")
            .then(responce => responce.json())
            .then(parsedJSON => console.log(parsedJSON))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { isLoading, items } = this.state;
        return (
            <div className="container">
                <h1 className='text-center text-white m-2'>Famous Kanye Quotes told by Master Yoda!</h1>
                <div>
                    <img src="./yoda.png" className="z-index:2 m-2" title="When 900 years you reach, look as good you will not." />
                </div>
                <div className="col text-center">
                    <button className="btn btn-success m-2">Action!</button>
                </div>
            </div>
        )
    }
}

export default App;