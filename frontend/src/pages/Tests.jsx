import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../global.style";

import { useState } from "react";
import { Icon } from "@react-native-material/core";

const questions1 = [
  {
    title: "_____________ name is John.",
    variants: ["Mine", "Me", "I", "My"],
    correct: 1,
  },
  {
    title: "They _____________ from Italy.",
    variants: ["is", "are", "do", "does"],
    correct: 1,
  },
  {
    title: "_____________ are you from?",
    variants: ["What", "Who", "Where", "How"],
    correct: 2,
  },
  {
    title: "Sam _____________ at seven o’clock",
    variants: ["goes up", "gets", "gets up", "get up"],
    correct: 2,
  },
  {
    title: "_____________ you like this music?",
    variants: ["Are", "Have", "Do", "Got"],
    correct: 2,
  },
  {
    title: "Have you _____________ a dog?",
    variants: ["any", "do", "have", "got"],
    correct: 2,
  },
  {
    title: "We don’t have _____________ cheese.",
    variants: ["a", "any", "got", "some"],
    correct: 1,
  },
  {
    title: "_____________ some butter here.",
    variants: ["There`re", "There", "There`s", "There were"],
    correct: 2,
  },
  {
    title: "It is a busy, _____________ street.",
    variants: ["traffic", "quite", "noisy", "mine"],
    correct: 2,
  },
  {
    title: "The children _____________ at home yesterday.",
    variants: ["was", "is", "are", "were"],
    correct: 3,
  },
  {
    title: "Do you like the red _____________ ?",
    variants: ["it", "that", "one", "the"],
    correct: 2,
  },
  {
    title: "He _____________ to China on business.",
    variants: ["went", "did", "go", "goed"],
    correct: 1,
  },
  {
    title: "Yesterday was the _____________ of May.",
    variants: ["third", "three", "day three", "number"],
    correct: 1,
  },
  {
    title: "I _____________ in front of your house at the moment.",
    variants: ["standing", "am standing", "is standing", "stand"],
    correct: 2,
  },
  {
    title: "My sister is younger _____________ me.",
    variants: ["then", "that", "than", "with"],
    correct: 2,
  },
  {
    title: "My sister is younger _____________ me.",
    variants: ["then", "that", "than", "with"],
    correct: 2,
  },
  {
    title: "It is _____________ country in the world.",
    variants: ["the best", "the bestest", "better", "the better"],
    correct: 0,
  },
  {
    title: "My phone’s ringing: _____________ answer it.",
    variants: ["I`ll", "I", "will", "me"],
    correct: 0,
  },
  {
    title: "He has _____________ breakfast.",
    variants: ["ate", "eaten", "eat", "did eat"],
    correct: 1,
  },
  {
    title: "I never met a politician _____________ .",
    variants: ["before", "already", "after", "ago"],
    correct: 0,
  },
];

const questions2 = [
  {
    title: "Are you _____________ for two or three weeks?",
    variants: ["staying", "stayed", "stay", "have stayed"],
    correct: 0,
  },
  {
    title: "Natasha _____________ to visit her parents.",
    variants: ["will", "going", "is planned", "is planning"],
    correct: 3,
  },
  {
    title: "We _____________ like to see Lake Ontario.",
    variants: ["would", "will", "are", "could"],
    correct: 0,
  },
  {
    title: "My friends won’t come, _____________ they?",
    variants: ["won`t", "come", "will", "did"],
    correct: 2,
  },
  {
    title: "I enjoyed this story. _____________ did I.",
    variants: ["Either", "So", "Neither", "Or"],
    correct: 3,
  },
  {
    title: "This is the market _____________ we bought the vegetables.",
    variants: ["when", "which", "that", "where"],
    correct: 3,
  },
  {
    title: "This is _____________ than I thought.",
    variants: ["bad", "badder", "worse", "worst"],
    correct: 2,
  },
  {
    title: "Were you _____________ to run the marathon?",
    variants: ["could", "can", "able", "possible"],
    correct: 0,
  },
  {
    title: "Everybody _____________ wear a seat belt in the car.",
    variants: ["must", "mustn`t", "don`t have to", "doesn`t have to"],
    correct: 0,
  },
  {
    title: "We _____________ to have a lot of Math classes at school.",
    variants: ["use to", "was", "used", "than"],
    correct: 2,
  },
  {
    title: "I think it _____________ be cloudy tomorrow.",
    variants: ["will probably", "probably", "can", "will to"],
    correct: 0,
  },
  {
    title: "If we arrive in time, _____________ the train.",
    variants: ["we catch", "we caught", "we had caught", "we`ll catch"],
    correct: 3,
  },
  {
    title: "She is working _____________ to pass her exam.",
    variants: ["hardly", "much", "hard", "good"],
    correct: 2,
  },
  {
    title:
      "Earthquakes _____________ by the movement of the earth's tectonic plates.",
    variants: ["cause", "caused", "are caused", "were causing"],
    correct: 2,
  },
  {
    title: "Basketball _____________ in most countries.",
    variants: ["plays", "players", "is played", "is playing"],
    correct: 2,
  },
  {
    title: "Who are you listening _____________? I do not see anybody.",
    variants: ["to", "at", "on", "for"],
    correct: 0,
  },
  {
    title: "Nina _____________ lunch when you called.",
    variants: ["was having", "had", "were having", "are having"],
    correct: 0,
  },
  {
    title: "She _____________ here for ten years.",
    variants: ["has been living", "was living", "has live", "lived"],
    correct: 0,
  },
  {
    title: "The computer task was _____________ solved.",
    variants: ["easy", "easy to", "an easy", "easily"],
    correct: 3,
  },
  {
    title: "It was a difficult trip, but I _____________ get home.",
    variants: ["not", "managed to", "at last", "can"],
    correct: 1,
  },
];

const questions3 = [
  {
    title: "We have not heard the news _____________.",
    variants: ["already", "always", "yet", "just"],
    correct: 2,
  },
  {
    title: "When I came home, I realised I _____________ my phone at work.",
    variants: ["has left", "had leave", "has leave", "had left"],
    correct: 3,
  },
  {
    title: "If I _____________ enough money, I’d buy a lovely isolated island.",
    variants: ["had", "would", "did", "shall"],
    correct: 0,
  },
  {
    title:
      "You wouldn’t have failed the exam, if you had been more _____________ .",
    variants: ["careful", "carefully", "careless", "caring"],
    correct: 0,
  },
  {
    title:
      "All the members of my team _____________ to go to work at seven in the morning.",
    variants: ["must", "would", "had", "did"],
    correct: 0,
  },
  {
    title: "I _____________ I had been able to meet the dream lady of my life.",
    variants: ["hope", "want", "think", "wish"],
    correct: 3,
  },
  {
    title: "We’ll have taken our exams _____________ this time next year.",
    variants: ["by", "on", "during", "for"],
    correct: 0,
  },
  {
    title: "I _____________ wasted my time when I was at school.",
    variants: ["regret", "shouldnt", "ought not to", "shouldnt have"],
    correct: 3,
  },
  {
    title: "This is going to be my chance to _____________ any difficulties",
    variants: ["repair", "sort out", "improve", "delete"],
    correct: 1,
  },
  {
    title: "I do it once in a blue moon.",
    variants: [
      "I do it very often.",
      "I do it very seldom.",
      "I never do it.",
      "I like doing it.",
    ],
    correct: 1,
  },
  {
    title: "How did you manage to see _____________ a nice gown?",
    variants: ["so", "that", "absolutely", "such"],
    correct: 3,
  },
  {
    title: "He is a mean human being.",
    variants: [
      "He is very extravagant.",
      "He is very tight fisted.",
      "He is generous.",
      "He is light hearted.",
    ],
    correct: 1,
  },
  {
    title:
      "The captain and crew _____________ done something wrong, because the plane suddenly descended.",
    variants: ["must have", "must", "might", "could"],
    correct: 0,
  },
  {
    title: "You should set _____________ some money for a difficult day.",
    variants: ["for", "aside", "after", "apart"],
    correct: 1,
  },
  {
    title:
      "I decided to start doing _____________ my bedroom because it was filthy.",
    variants: ["up", "over", "-", "through"],
    correct: 0,
  },
  {
    title:
      "I decided to start doing _____________ my bedroom because it was filthy.",
    variants: ["up", "over", "-", "through"],
    correct: 3,
  },
  {
    title:
      "Copper tubing is the preferred choice of plumbers _____________ noncorrosive.",
    variants: ["since it is", "because of", "it is", "insofar as"],
    correct: 0,
  },
  {
    title:
      "The life of William Summerset Maugham, a practical man _____________ many stories have been told, was unusually productive.",
    variants: ["of", "about whom", "about", "which"],
    correct: 2,
  },
  {
    title: "Have you _____________ tried rock climbing?",
    variants: ["always", "ever", "soon", "never"],
    correct: 1,
  },
];

function TestsElement({ questions }) {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const percentage = Math.round((step / questions.length) * 100);

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const handleClick = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <View style={styles.test_element_main}>
      {step !== questions.length ? (
        <View style={styles.test_main}>
          <View style={styles.progress}>
            <View
              style={[styles.progress__inner, { width: `${percentage}%` }]}
            ></View>
          </View>
          <View style={styles.test_question}>
            <Text style={styles.test_title}>{question.title}</Text>
            <View style={styles.test_answer_main}>
              {question.variants.map((e, id) => (
                <TouchableOpacity
                  style={styles.question__button}
                  onPress={() => onClickVariant(id)}
                  key={id}
                >
                  <Text style={styles.test_answer}>
                    {id + 1}) {e}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.result}>
          <Text style={styles.result__text}>
            Нәтиже {correct} \ {questions.length}
          </Text>
          <Image
            style={styles.questions__image}
            source={
              correct < 5
                ? require("../assets/sheldon.png")
                : correct < 10
                ? require("../assets/sheldon2.png")
                : correct < 15
                ? require("../assets/sheldon3.png")
                : require("../assets/sheldon4.png")
            }
          />
          <View style={[styles.buttons, {justifyContent: 'space-between'}]}>
            <TouchableOpacity style={[styles.button, {width: '49%'}]} onPress={handleClick}>
              <Text style={[styles.button__text, {fontSize: 16}]}>Кайтадан</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {width: '49%'}]} onPress={handleClick}>
              <Text style={[styles.button__text, {fontSize: 16}]}>Нәтиженi жіберу</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

export default function Tests() {
  const [tab, setTab] = useState("test1");
  return (
    <View>
      <View style={[styles.games__header]}>
        <TouchableOpacity
          style={[
            styles.games__text,
            tab === "test1" && styles.games__text__active,
          ]}
          onPress={() => setTab("test1")}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="star-face" size={18} color="#fff" />
          </View>
          <Text style={styles.games__text__text}>Жеңіл</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.games__text,
            tab === "test2" && styles.games__text__active,
          ]}
          onPress={() => setTab("test2")}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="star-face" size={18} color="#fff" />
            <Icon name="star-face" size={18} color="#fff" />
          </View>
          <Text style={styles.games__text__text}>Орташа</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.games__text,
            tab === "test3" && styles.games__text__active,
          ]}
          onPress={() => setTab("test3")}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="star-face" size={18} color="#fff" />
            <Icon name="star-face" size={18} color="#fff" />
            <Icon name="star-face" size={18} color="#fff" />
          </View>
          <Text style={styles.games__text__text}>Қиын</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tests}>
        {tab === "test1" && <TestsElement questions={questions1} />}
        {tab === "test2" && <TestsElement questions={questions2} />}
        {tab === "test3" && <TestsElement questions={questions3} />}
      </View>
    </View>
  );
}
