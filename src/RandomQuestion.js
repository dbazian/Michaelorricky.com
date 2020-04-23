import React from 'react';

export default class RandomQuestion extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            QuoteList : [
                //Michael Quotes
                {quote: 'Sometimes I\'ll start a sentence and I don\'t even know where it\'s going.', name: 'Michael'},
                {quote: 'Well, it\'s love at first sight. Actually, it was... No, it was when I heard her voice. It was love at first see with my ears', name: 'Michael'},
                {quote: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.', name: 'Michael'},
                {quote: 'I\'m not superstitious but I am a little stitious.', name: 'Michael'},
                {quote: 'I say dance, they say how high.', name: 'Michael'},
                {quote: 'Tell him to call me ASAP as possible.', name: 'Michael'},
                {quote: 'Any man who says he totally understands women is a fool. Because they are un-understandable.', name: 'Michael'},
                {quote: 'I had a great summer. I got west nile virus, lost a ton of weight. Then I went back to the lake. And I stepped on a piece of glass in the parking lot, which hurt. That got infected. Even though I peed on it...', name: 'Michael'},
                {quote: 'Friends joke with one another. Hey, you\'re poor. Hey, your momma\'s dead. That\'s what friends do.', name: 'Michael'},
                {quote: 'I don\'t come up with this stuff, I just forward it along. You wouldn\'t arrest the guy who was just passing drugs from one guy to another.', name: 'Michael'},
                {quote: 'Presents are the best way to show someone how much you care. It\'s like this tangible thing that you can point to and say, Hey, man, I love you this many dollars worth.', name: 'Michael'},
                {quote: 'I knew exactly what to do. But in a much more real sense, I had no idea what to do.', name: 'Michael'},
                {quote: 'Ok, too many different words from coming at me from too many different sentences.', name: 'Michael'},
                {quote: 'Is there something besides Mexican you prefer to be called? Something less offensive?', name: 'Michael'},
                {quote: 'Don\'t ever, for any reason, do anything for anyone, for any reason, ever, no matter what. No matter where. Or who, or who you are with, or where you are going or... or where you\'ve been... ever. For any reason, whatsoever.', name: 'Michael'},
                {quote: 'If we come across somebody with no arms or legs do we bother resuscitating them? I mean, what quality of life do we have there?', name: 'Michael'},
                {quote: 'How to take off a woman\'s bra: You just twist your hand until something breaks', name: 'Michael'},
                {quote: 'You cheated on me? When I specifically asked you not to?', name: 'Michael'},
                {quote: 'Oh God, my mind is going a mile an hour.', name: 'Michael'},
                {quote: 'It\'s not like booze ever killed anyone.', name: 'Michael'},
                {quote: 'Hate to see you leave but love to watch you go. Cause of your butt.', name: 'Michael'},
                {quote: 'Well, happy birthday Jesus. Sorry that your party\'s so lame.', name: 'Michael'},
                {quote: 'It\'s a good thing Russia doesn\'t exist anymore.', name: 'Michael'},
                {quote: 'I hate so much about the things you choose to be.', name: 'Michael'},
                {quote: 'It\'s simply beyond words. It\'s incalculable.', name: 'Michael'},
                //Ricky Quotes
                {quote: 'What, are ya filmin more episodes of Happy Days there, Fonzie?', name: "Ricky"},
                {quote: 'Why do you start doing your job instead of making false incriminations all the time?', name: "Ricky"}
            ],

            selectedQuote: {quote: 'Click New Quote To Start'},

            answer: '',

            correctAnswers: 0,

            total: 0
        }
    }

    handleClick = () => {
        this.setState({
            selectedQuote: this.state.QuoteList[Math.floor(Math.random() * this.state.QuoteList.length)]
        })
        this.setState({
            answer: ''
        })
    }

    handleClickMichael = () => {
        if (this.state.selectedQuote.name === "Michael") { 
            this.setState({ answer: "Correct"});
            this.setState({ correctAnswers: this.state.correctAnswers + 1});
            this.setState({ total: this.state.total + 1})
        }
        else { 
            this.setState({ answer: "Wrong"});
            this.setState({ total: this.state.total + 1})
        }
    }

    handleClickRicky = () => {
        if (this.state.selectedQuote.name === "Ricky") { 
            this.setState({ answer: "Correct"});
            this.setState({ correctAnswers: this.state.correctAnswers + 1});
            this.setState({ total: this.state.total + 1})
        }
        else { 
            this.setState({ answer: "Wrong"});
            this.setState({ total: this.state.total + 1})
        }
    }
    
    render() {
        return(
            <div>
                <p>Quote: "{this.state.selectedQuote.quote}"</p>
                <button onClick={this.handleClick}>New Quote</button>
                <div className="mike-or-ricky-buttons">
                    <button onClick={this.handleClickMichael}>Michael</button>
                    <button onClick={this.handleClickRicky}>Ricky</button>
                </div>
                <p>Your answer is: {this.state.answer}</p>
                <p>Your score is: {this.state.correctAnswers} of {this.state.total} </p>
            </div>
        )
    }
}