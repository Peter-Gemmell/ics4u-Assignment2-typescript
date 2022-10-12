/**
 * The program makes rock paper scissors
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */
import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * @param {string} sentence sentence read
 * @returns {number} count count of the vowels in sentence
 */
function vowelCount(sentence: string): number {
  const vowelList = 'aeiouyAEIOUY'
  let count = 0
  const length = sentence.length

  for (let loop = 0; loop < length; loop++) {
    if (vowelList.includes(sentence[loop])) {
      count += 1
    }
  }
  return count
}
const sentence = prompt('Enter a Sentence: ')
try {
  const count = vowelCount(sentence)
  console.log(`Number of vowels in the given sentence is ${count}`)
} catch (e) {
  const result = (e as Error).message
  console.log('ERROR:' + result)
}

console.log('Done.')
