import React, { useState, useEffect } from 'react';

import { SearchIcon } from './icons/SearchIcon';

interface SearchButtonProps {
  onClick(): void;
}

const ACTION_KEY_DEFAULT = 'Ctrl';
const ACTION_KEY_APPLE = '⌘';

function isAppleDevice() {
  if (typeof navigator === 'undefined') {
    return ACTION_KEY_DEFAULT;
  }

  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

export function DocSearchButton(props: SearchButtonProps) {
  const [key, setKey] = useState(() =>
    isAppleDevice() ? ACTION_KEY_APPLE : ACTION_KEY_DEFAULT
  );

  useEffect(() => {
    if (isAppleDevice()) {
      setKey(ACTION_KEY_APPLE);
    }
  }, []);

  return (
    <button
      type="button"
      className="DocSearch-SearchButton"
      onClick={props.onClick}
    >
      <SearchIcon />
      <span className="DocSearch-SearchButton-Placeholder">Search</span>
      <span className="DocSearch-SearchButton-Key">{key}</span>
      <span className="DocSearch-SearchButton-Key">K</span>
    </button>
  );
}
