// ---Dependencys
import React from 'react';

/**
 * Generate a fragment with date
 * @param {string} label
 * @param {number} value
 * @return {ReactComponentElement}
 */
// -----------------------------------------TYPES-----------------------------------
interface Props {
  label: string;
  value: number;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function DateBox(props: Props) : React.ReactElement {
  const { label, value } = props;
  return (
    <div>
      <section>
        {value}
      </section>
      <span>{label}</span>
    </div>
  );
}
