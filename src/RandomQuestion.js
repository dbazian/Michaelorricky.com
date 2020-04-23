import React from 'react';




export default class RandomQuestion extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = {
    QuoteList : [
        'Sometimes I\'ll start a sentence and I don\'t even know where it\'s going.', 
        'Well, it\'s love at first sight. Actually, it was... No, it was when I heard her voice. It was love at first see with my ears',
        'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
        'I\'m not superstitious but I am a little stitious.',
        'I say dance, they say how high.',
        'Tell him to call me ASAP as possible.',
        'Any man who says he totally understands women is a fool. Because they are un-understandable.',
        'I had a great summer. I got west nile virus, lost a ton of weight. Then I went back to the lake. And I stepped on a piece of glass in the parking lot, which hurt. That got infected. Even though I peed on it...',
        'Friends joke with one another. Hey, you\'re poor. Hey, your momma\'s dead. That\'s what friends do.',
        'I don\'t come up with this stuff, I just forward it along. You wouldn\'t arrest the guy who was just passing drugs from one guy to another.',
        'Presents are the best way to show someone how much you care. It\'s like this tangible thing that you can point to and say, Hey, man, I love you this many dollars worth.',
        'I knew exactly what to do. But in a much more real sense, I had no idea what to do.',
        'Ok, too many different words from coming at me from too many different sentences.',
        'Is there something besides Mexican you prefer to be called? Something less offensive?',
        'Don\'t ever, for any reason, do anything for anyone, for any reason, ever, no matter what. No matter where. Or who, or who you are with, or where you are going or... or where you\'ve been... ever. For any reason, whatsoever.',
        'If we come across somebody with no arms or legs do we bother resuscitating them? I mean, what quality of life do we have there?',
        'How to take off a woman\'s bra: You just twist your hand until something breaks',
        'You cheated on me? When I specifically asked you not to?',
        'Oh God, my mind is going a mile an hour.',
        'It\'s not like booze ever killed anyone.',
        'Hate to see you leave but love to watch you go. Cause of your butt.',
        'Well, happy birthday Jesus. Sorry that your party\'s so lame.',
        'It\'s a good thing Russia doesn\'t exist anymore.',
        'I hate so much about the things you choose to be.',
        'It\'s simply beyond words. It\'s incalculable.',
    

        
        'What, are ya filmin more episodes of Happy Days there, Fonzie?',
        'Why do you start doing your job instead of making false incriminations all the time?'
    ],
    selectedQuote: 'null'
}
    }

handleClick = () => {
    this.setState({
        selectedQuote: this.state.QuoteList[Math.floor(Math.random() * this.state.QuoteList.length)]
    })
}

render() {
    return(
        <div>
        <p>Quote: "{this.state.selectedQuote}"</p>
        <button onClick={this.handleClick}>Quote</button>
        </div>

)}
}