<template>
  <div id='readability-sandbox' :class="colorCombo">
    
    <div id="control-panel" :class="{open:cpVisible}">
      <header>
        <img src="../assets/images/tune-your-text.png" alt="Tune Your Text">
        <button id='cp-show-hide' type="button" @click="cpVisible = !cpVisible">
          <template v-if="cpVisible">&gt;</template>
          <template v-else>&lt;</template>
        </button>
      </header>
      
      <label for="select-font-button">Font</label>
      <b-dropdown v-model="fontFamily" :mobile-modal="false" @change="resetToDefaults()">
        <button id="select-font-button" type="button" slot="trigger" :style="{fontFamily:cssFontFamily(fontFamily)}">
          {{currentFont.name}}
        </button>
        <b-dropdown-item v-for="fontname in fontNames" :key="fontname" :value="fontname">
          <div class="select-font-item" :style="{fontFamily:cssFontFamily(fontname)}">
            {{allFonts[fontname].name}}
          </div>
        </b-dropdown-item>
      </b-dropdown>
      
      <label for="select-size">Size</label>
      <input id="select-size" type="range" min="9" max="24" v-model="fontSize">

      <label for="letter-spacing">Character spacing</label>
      <input id="letter-spacing" type="range" min="-0.2" max="0.5" v-model="charSpacing" step="0.01">

      <label for="select-width">Width</label>
      <input id="select-width" type="range" :min="currentFont.widths[0]" :max="currentFont.widths[2]" v-model="fontWidth" :disabled="currentFont.widths[0] == currentFont.widths[2]">

      <label for="select-width">Weight</label>
      <input id="select-width" type="range" :min="currentFont.weights[0]" :max="currentFont.weights[2]" v-model="fontWeight">

      <label for="line-height">Line spacing</label>
      <input id="line-height" type="range" min="0.8" max="2.5" v-model="lineSpacing" step="0.01">

<!-- 
      <label for="word-spacing">Word spacing</label>
      <input id="word-spacing" type="range" min="-1" max="3" v-model="wordSpacing" step="0.01">
 -->
      <label for="column-width">Column width</label>
      <input id="column-width" type="range" min="15" max="60" v-model="columnWidth" step="0.1">
      
      <input id="theme-black-on-white" type="radio" name="color-combo" value="black-on-white" :checked="colorCombo=='black-on-white'" v-model="colorCombo">
      <label for="theme-black-on-white" class="color-combo black-on-white">A</label>

      <input id="theme-white-on-black" type="radio" name="color-combo" value="white-on-black" :checked="colorCombo=='white-on-black'" v-model="colorCombo">
      <label for="theme-white-on-black" class="color-combo white-on-black">A</label>

      <input id="theme-black-on-blue" type="radio" name="color-combo" value="black-on-blue" :checked="colorCombo=='black-on-blue'" v-model="colorCombo">
      <label for="theme-black-on-blue" class="color-combo black-on-blue">A</label>

    </div>

    <article id='tuned-text' :style="sandboxCSS">
      <h2 :style="{fontWeight:fontWeight+300}">Down the Rabbit-Hole</h2>
      <p>
        Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'
      </p>
      <p>
        So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.
      </p>
      <p>
        There was nothing so <em>very</em> remarkable in that; nor did Alice think it so <em>very</em> much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually <em>took a watch out of its waistcoat</em>-<em>pocket</em>, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge. <img src="https://www.cs.cmu.edu/~rgs/alice02th.gif" style="float: left; margin: 0px 15px 15px 0px;" /> In another moment down went Alice after it, never once considering how in the world she was to get out again.
      </p>
      <p>
        The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.
      </p>
      <p>
        Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled 'ORANGE MARMALADE', but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
      </p>
      <p>
        'Well!' thought Alice to herself, 'after such a fall as this, I shall think nothing of tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't say anything about it, even if I fell off the top of the house!' (Which was very likely true.)
      </p>
      <p>
        Down, down, down. Would the fall <em>never</em> come to an end! 'I wonder how many miles I've fallen by this time?' she said aloud. 'I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think--' (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a <em>very</em> good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) '--yes, that's about the right distance--but then I wonder what Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)
      </p>
      <p>
        Presently she began again. 'I wonder if I shall fall right <em>through</em> the earth! How funny it'll seem to come out among the people that walk with their heads downward! The Antipathies, I think--' (she was rather glad there <em>was</em> no one listening, this time, as it didn't sound at all the right word) '--but I shall have to ask them what the name of the country is, you know. Please, Ma'am, is this New Zealand or Australia?' (and she tried to curtsey as she spoke--fancy <em>curtseying</em> as you're falling through the air! Do you think you could manage it?) 'And what an ignorant little girl she'll think me for asking! No, it'll never do to ask: perhaps I shall see it written up somewhere.'
      </p>
      <p>
        Down, down, down. There was nothing else to do, so Alice soon began talking again. 'Dinah'll miss me very much to-night, I should think!' (Dinah was the cat.) 'I hope they'll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I'm afraid, but you might catch a bat, and that's veryoing to do <em>that</em> in a hurry. 'No, I'll look first,' she said, 'and see whether it's marked "poison" or not'; for she had read several nice little histories about children who had got burnt, and eaten up by wild beasts and other unpleasant things, all because they <em>would</em> not remember the simple rules their friends had taught them: such as, that a red-hot poker will burn you if you hold it too long; and that if you cut your finger <em>very</em> deeply with a knife, it usually bleeds; and
      </p>
    </article>
  </div>
</template>

<style lang="scss" src="./Sandbox.scss"></style>
<script src="./Sandbox.js"></script>
