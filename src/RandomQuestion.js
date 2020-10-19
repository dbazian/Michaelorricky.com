import React from 'react';
import Mike from "./Images/Michael.jpg";
import Ricky from "./Images/Ricky.jpg";

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
                {quote: 'Why do you start doing your job instead of making false incriminations all the time?', name: "Ricky"},
                {quote: 'I can\'t believe you just did that! Those are the good kind! Eight bucks!', name: 'Ricky'},
                {quote: 'I\'m moving to Toronto and I\'m gonna be a street person! I don\'t care.', name: 'Ricky'},
                {quote: 'What comes around is all around!', name: 'Ricky'},
                {quote: 'I\'ve been sexually assaulted here! That man tried to abuse me at a party.', name: 'Ricky'},
                {quote: 'The thing is when you\'re shopping for a ring you gotta take your time because you know it\'s my wife we\'re talking about. She\'s not gonna be wearing one of those Cubic Zarcarbian things-- she\'s gotta have a nice ring', name: 'Ricky'},
                {quote: 'You know Jim or Jim knows you?', name: 'Ricky'},
                {quote: 'Think you\'re so big with your little suit and all your little college reading and stuff like that', name: 'Ricky'},
                {quote: 'I mean, they had good lyrics like, "Gimme an R-O-C-K", and the crowd yells "ROCK" really loud.', name: 'Ricky'},
                {quote: 'You say a word about this and I\'m gonna tell everyone you sexually assaulted me.', name: 'Ricky'},
                {quote: 'Well, play that Diane Sawyer song! ', name: 'Ricky'},
                {quote: 'Why do you look like Indianapolis Jones?', name: 'Ricky'},
                {quote: 'Fine, fine, go ahead and quit, I don\'t care. But I can\'t give you your vacation pay until we get paid, you know that.', name: 'Ricky'},
                {quote: 'I don\'t have the right people words to make you understand the way it means to me.', name: 'Ricky'},
                {quote: 'What person ever moved like that in the history of people?', name: 'Ricky'},
                {quote: 'Sounds like someone\'s a little bit jealous about me being supervisor.', name: 'Ricky'},
                {quote: 'What if he has radies?', name: 'Ricky'},
                {quote: 'This is all I got left. I\'m telling you right now, I\'ll give him some, but... I\'m eating half those fajitas.', name: 'Ricky'},
                {quote: 'Well I was plannin on takin the blame, cuz I mean there is a pretty good chance that I did it. Well, I mean I did do it.', name: 'Ricky'},
                {quote: 'Cookin some bacon for you, buddy. There\'s only 3 pieces left, but I\'ll give it to you so long as I can have the grease.', name: 'Ricky'},
                {quote: 'I mean...nobody wants to admit they ate 9 cans of ravioli.', name: 'Ricky'},
                {quote: 'I can\'t do this, man. My brain doesn\'t work this way. It\'s not college level.', name: 'Ricky'},
                {quote: 'The thing with me is that I AM smart and I’m smelf, I’m self smarted, basically, by myself', name: 'Ricky'},
                {quote: 'One of the things he taught me was "One man\'s garbage is another man person\'s good ungarbage.', name: 'Ricky'}
            ],

            selectedQuote: {quote: 'Click New Quote To Start'},

            answer: '',

            correctAnswers: 0,

            total: 0,

            clickState: 'active',

            finalResults: ''
        }
    }

    handleClick = () => {
        if (this.state.clickState === 'active' && this.state.total === 10) {
        this.setState({ selectedQuote: this.state.QuoteList[Math.floor(Math.random() * this.state.QuoteList.length)] })
        this.setState({ answer: '' })
        this.setState({ clickState: "not-active" })
        this.setState({ total: 0});
        this.setState({ correctAnswers: 0});
        } else if
        (this.state.clickState === 'active' && this.state.total < 10) {
        this.setState({ selectedQuote: this.state.QuoteList[Math.floor(Math.random() * this.state.QuoteList.length)] })
        this.setState({ answer: '' })
        this.setState({ clickState: "not-active" })
        }
    }

    handleClickMichael = () => {
        if (this.state.selectedQuote.name === "Michael" && this.state.clickState === "not-active") { 
            this.setState({ answer: "Correct" });
            this.setState({ correctAnswers: this.state.correctAnswers + 1 });
            this.setState({ total: this.state.total + 1 });
            this.setState({ clickState: "active"});
        } else if (this.state.selectedQuote.name === "Ricky" && this.state.clickState === "not-active") {
            this.setState({ answer: "Wrong"})
            this.setState({ total: this.state.total + 1 });
            this.setState({ clickState: "active"});
        }
    }

    handleClickRicky = () => {
        if (this.state.selectedQuote.name === "Ricky" && this.state.clickState === "not-active") { 
            this.setState({ answer: "Correct" });
            this.setState({ correctAnswers: this.state.correctAnswers + 1 });
            this.setState({ total: this.state.total + 1 });
            this.setState({ clickState: "active"});
        } else if (this.state.selectedQuote.name === "Michael" && this.state.clickState === "not-active") { 
            this.setState({ answer: "Wrong"});
            this.setState({ total: this.state.total + 1 });
            this.setState({ clickState: "active"});
        }
    }
    
    render() {
        return(
            <div className="app">
                <h1>Who Said It?<br />Michael Scott or Ricky</h1>
                <h2>Best of 10!</h2>
                <div className="row-container">
                    <img className="mike" src={Mike} alt="Michael Scott"></img>
                    <img className="ricky" src={Ricky} alt="Ricky"></img>
                </div>
                <div className="row-container">
                    <button onClick={this.handleClickMichael}>Michael</button>
                    <button onClick={this.handleClickRicky}>Ricky</button>
                </div>
                <div className="quote-box">
                <p>Quote: "{this.state.selectedQuote.quote}"</p>
                </div>
                <button className="quote-button" onClick={this.handleClick}>New Quote</button>
                <div className="answer-container">
                <p>{this.state.answer}</p>
                </div>
                <p className="score">Your score is: {this.state.correctAnswers} of {this.state.total}</p>
            </div>
        )
    }
}