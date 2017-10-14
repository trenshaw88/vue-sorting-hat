<template>
  <div id="app" v-cloak>
    <img src="./assets/hw.png">
    <div class="row">
      <div class="large-12 columns">
        <h1>{{ title }}</h1>
        <div class="container">
          <div v-for="(question, index) in questions">
            <div v-show="index === questionIndex">
              <h2>{{ question.text }}</h2>
              <ol>
                <li v-for="answer in question.answers">
                  <label>
                    <input type="radio"
                           v-bind:value="answer.value"
                           v-bind:name="index"
                           v-model="userAnswers[index]"> {{ answer.text }}
                  </label>
                </li>
              </ol>
              <button class="secondary button" v-if="questionIndex > 0" v-on:click="prev">
              prev
              </button>
              <button class="success button" v-on:click="next">
              next
              </button>
            </div>
          </div>
          <div v-show="questionIndex === questions.length">
            <h3>Your Results</h3>
            <p>
              House: {{ score() }} 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue Sorting Hat',
      questionIndex: 0,
      questions: [{
                text: 'What is your favorite color?', 
                answers: [{
                        text: 'Scarlet',
                        value: 'Gryffindor'
                    },
                    {
                        text: 'Yellow',
                        value: 'Hufflepuff'
                    },
                    {
                        text: 'Blue',
                        value: 'Ravenclaw'
                    },
                    {
                        text: 'Green',
                        value: 'Slytherin'
                    }
                ]
            },
            {
                text: 'What is your favorite animal?',
                answers: [{
                        text: 'Lion',
                        value: 'Gryffindor'
                    },
                    {
                        text: 'Badger',
                        value: 'Hufflepuff'
                    },
                    {
                        text: 'Eagle',
                        value: 'Ravenclaw'
                    },
                    {
                        text: 'Snake',
                        value: 'Slytherin'
                    }
                ]
            },
            {                
                text: 'What kind of person do you try to be?', 
                answers: [{ 
                        text: 'Brave', 
                        value: "Gryffindor"
                    },       
                    { 
                        text: 'Loyal', 
                        value: "Hufflepuff"
                    }, 
                    { 
                        text: 'Witty', 
                        value: "Ravenclaw"
                    }, 
                    { 
                        text: 'Cunning', 
                        value: "Slytherin"
                    }      
                ]
            },            
            {
                text: 'Who is your favorite witch or wizard?',
                answers: [{
                        text: 'Albus Dumbledore',
                        value: 'Gryffindor'
                    },
                    {
                        text: 'Newt Scamander',
                        value: 'Hufflepuff'
                    },
                    {
                        text: 'Garrick Ollivander',
                        value: 'Ravenclaw'
                    },
                    {
                        text: 'Tom Riddle',
                        value: 'Slytherin'
                    }
                ]
            },
            {
                text: 'What is your favorite Berty Bott\'s flavor?',
                answers: [{
                        text: 'Grape',
                        value: 'Gryffindor'
                    },
                    {
                        text: 'Horseradish',
                        value: 'Hufflepuff'
                    },
                    {
                        text: 'Roast Beef',
                        value: 'Ravenclaw'
                    },
                    {
                        text: 'Spinach',
                        value: 'Slytherin'
                    }
                ]
            }
        ],
      userAnswers: Array(),
      houses: [{ 
                name: 'Gryffindor', 
                description: 'The house of the brave, loyal, courageous, adventurous, daring and chivalrous. Those who stand up for others are typically Gryffindors. Brave-hearted is the most well-known Gryffindor characteristic, and Gryffindors are also known for having a lot of nerve.'
                }, 
                { 
                  name: 'Hufflepuff', 
                  description: 'This house values hard work, dedication, fair play, patience, and loyalty. Hufflepuff’s are known for being just and true. "Do what is nice" is their motto.'
                },
                { 
                  name: 'Ravenclaw', 
                  description: 'The house is known for their wisdom, intelligence, creativity, cleverness and knowledge. Those who value brains over brawn can be found here. Ravenclaws often tend to be quite quirky as well. "Do what is wise" is the motto they strive to follow.'
                },
                { 
                  name: 'Slytherin', 
                  description: 'This is the house of the cunning, prideful, resourceful, ambitious, intelligent, and determined. Slytherin\'s love to be in charge and crave leadership. \'Do what is necessary\'is the motto of this house.'
                }
              ],
            next: function() {
                this.questionIndex++;
                console.log(this.userAnswers);
            },
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                var modeMap = {};
                var maxEl = this.userAnswers[0],
                    maxCount = 1;
                for (var i = 0; i < this.userAnswers.length; i++) {
                    var el = this.userAnswers[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
              
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  font-weight: normal;
  font-size: 2.5rem;
}
h2 {
  font-weight: bold;
  font-size: 1.6rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-size: 1.3rem;
}

a {
  color: #42b983;
}
</style>
