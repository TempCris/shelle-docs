/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
// ---Dependencys
import React from 'react';
// ---Others
import { getWordsArray, makeWordsArray } from 'AppConfig/otherMethods';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  someTitle?: string
}
// ------------------------------------------ COMPONENT-----------------------------------------
function TitleStyler(props: Props): React.ReactElement | null {
  // ----------------------- hooks, const, props y states
  const { someTitle } = props;
  const wordsArray = someTitle ? getWordsArray(someTitle) : [];

  // ----------------------- Render
  if (wordsArray.length === 0) {
    return null;
  }
  if (wordsArray.length > 1) {
    const firstWord = wordsArray[0];
    const otherWordsArray = wordsArray.splice(1, wordsArray.length);
    const otherWords = makeWordsArray(otherWordsArray);
    return (
      <>
        <span>{firstWord}</span>
        {` ${otherWords}`}
      </>
    );
  }
  return (
    <>
      {someTitle}
    </>
  );
}

export default TitleStyler;
