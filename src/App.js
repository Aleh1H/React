
import './App.css';
import Character from "./components/character";

function App() {
  return (
    <div>
      <Character name = {'Homer'}
      story = {'Homer Jay Simpson (born May 12, 1956)[36] is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn\'t. He also serves as the main protagonist of the The Simpsons Movie.'}
      picture = {'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
      />

        <Character name = {'Marge'}
      story = {'Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. Marge is 37 years of age. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'}
      picture = {'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
      />

        <Character name = {'Bart'}
      story = {'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'}
      picture = {'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
      />

        <Character name = {'Lisa'}
      story = {'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
      picture = {'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
      />

        <Character name = {'Maggie'}
      story = {'Margaret Evelyn[10] Lenny "Maggie" Simpson[11] (born January 12, 1989) is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'}
      picture = {'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
      />


    </div>
  );
}

export default App;
