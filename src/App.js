import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";


class App extends Component {

  // Set our state variables
  state = {
    guessArray: [],
    message: "Click an image to begin!",
    score: 0,
    topScore: 0
  };

  // Card is clicked
  clickCard = card => {
    let guessArray = this.state.guessArray;
    let score = this.state.score;
    // If we already clicked this card...
    if (guessArray[card.id]) {
      this.setState({
        message: "You already guessed that! Start over!",
        topScore: Math.max(this.state.score, this.state.topScore),
        guessArray: [],
        score: 0
      })
    // Otherwise it was a good guess!
    } else {
      guessArray[card.id] = true;
      this.setState({
        message: "You guessed correctly!",
        guessArray: guessArray,
        score: ++score
      })
    }
  };

  // Render the page
  render() {
    return (
      <div id="imagesGrid">
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}/>
        <Jumbotron/>
        <Wrapper>
          {characters
            .sort(function (a, b) {
              return 0.5 - Math.random()
            })
            .map(randomCard => (<CharacterCard
              clickCard={this.clickCard}
              id={randomCard.id}
              key={randomCard.id}
              image={randomCard.image}/>))}
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
