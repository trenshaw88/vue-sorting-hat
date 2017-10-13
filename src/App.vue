<template>
  <div id="app" class="container" v-cloak>
    <img src="./assets/hw.png">
    <h1>{{ title }}</h1>
    <h2>Get yourself sorted and find out where you belong in the world of witchcraft and wizardry.</h2>

    <div v-for="question in questions"> 
      <div v-show="index === questionIndex">
            <h3>{{question.text}}</h3>
              <ol>
                <li v-for="answer in question.answers">
                  <label>
                    <button>{{question.answers.text}}</button>
                  </label>
                </li>
              </ol>
        </div>
      </div>
     
 

    <ul>
      <li v-for="house in houses">{{house.name}} -{{house.description}} </li>


      <li></li>
    </ul>

    <h2></h2>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue Sorting Hat',
      houses: [ { name: 'Gryffindor', description: 'The house of the brave, loyal, courageous, adventurous, daring and chivalrous. Those who stand up for others are typically Gryffindors. Brave-hearted is the most well-known Gryffindor characteristic, and Gryffindors are also known for having a lot of nerve.'}, 
                { name: 'Hufflepuff', description: 'This house values hard work, dedication, fair play, patience, and loyalty. Hufflepuff’s are known for being just and true. "Do what is nice" is their motto.'},
                { name: 'Ravenclaw', description: 'The house is known for their wisdom, intelligence, creativity, cleverness and knowledge. Those who value brains over brawn can be found here. Ravenclaws often tend to be quite quirky as well. "Do what is wise" is the motto they strive to follow.'},
                { name: 'Slytherin', description: 'This is the house of the cunning, prideful, resourceful, ambitious, intelligent, and determined. Slytherin\'s love to be in charge and crave leadership. \'Do what is necessary\'is the motto of this house.'}
      ],
      questions: [ 
          { text: 'What is your favorite color?', 
          answers: [ { text: 'Scarlet', house: "Gryffindor"}, { text: 'Yellow',house: "Hufflepuff"}, { text: 'Blue', house: "Ravenclaw"}, { text: 'Green', house: "Slytherin"} ] 
          },
          { text: 'What is your favorite animal?', 
          answers: [ { text: 'Lion', house: "Gryffindor"}, { text: 'Badger', house: "Hufflepuff"}, { text: 'Eagle', house: "Ravenclaw"}, { text: 'Snake', house: "Slytherin"} ] 
          },
          { text: 'What kind of person do you try to be?', 
          answers: [ { text: 'Brave', house: "Gryffindor"}, { text: 'Loyal', house: "Hufflepuff"}, { text: 'Witty', house: "Ravenclaw"}, { text: 'Cunning', house: "Slytherin"} ] 
          },
          { text: 'Who is your favorite witch or wizard?', 
          answers: [ { text: 'Albus Dumbledore', house: "Gryffindor"}, { text: 'Newt Scamander', house: "Hufflepuff"}, { text: 'Garrick Ollivander', house: "Ravenclaw"}, { text: 'Tom Riddle', house: "Slytherin"} ]
           },
          { text: 'What is your favorite Berty Bott\'s flavor?', 
          answers: [ { text: 'Grape', house: "Gryffindor"}, { text: 'Horseradish', house: "Hufflepuff"}, { text: 'Roast Beef', house: "Ravenclaw"}, { text: 'Spinach', house: "Slytherin"} ]
           }      
      ],
      computed: {
        question: function () {
          return this.questions[this.questionIndex];
    }
  },
      methods: {
        next: function (event) {
          var next = this.questionIndex;
            if (next = this.questionIdex.length) {
              this.questionIndex++;
            } else {
              this.questionIndex--;
            }
        }
      }

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

img {
align-content: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
