/**
 * Retrieves the percentage of similarity between two texts (it uses the Levenshtein Distance algorithm)
 *
 * @param _text
 * @returns string
 */
export const levenshteinDistance = (_textA: string, _textB: string): number => {
  const dp = Array(_textA.length + 1)
    .fill(null)
    .map(() => Array(_textB.length + 1).fill(0));

  for (let i = 0; i <= _textA.length; i++) {
    for (let j = 0; j <= _textB.length; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (_textA[i - 1] === _textB[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  const maxLen = Math.max(_textA.length, _textB.length);
  const similarity = 1 - dp[_textA.length][_textB.length] / maxLen;

  return similarity;
};
