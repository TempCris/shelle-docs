// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import FBLogo from 'Images/messenger.png';
import { ownerData } from 'AppConfig/globalConfig';

const { domain, facebookUrl } = ownerData;

// ------------------------------------------ COMPONENT-----------------------------------------
function ButtonFB() : ReactElement {
  return (
    <button
      type="button"
      className="png-button"
    >
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <img width="100%" src={FBLogo} alt={domain} />
      </a>
    </button>
  );
}

export default ButtonFB;
