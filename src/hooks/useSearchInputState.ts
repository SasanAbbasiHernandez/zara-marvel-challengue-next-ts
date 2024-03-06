import { useEffect, useRef, useState } from 'react';

type SearchHandler = () => void;

export default function useSearchInputState(
  searchHandler: SearchHandler
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const didMountRef = useRef(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let delayDebounceFn: NodeJS.Timeout;

    if (didMountRef.current) {
      delayDebounceFn = setTimeout(searchHandler, 700);
    } else {
      didMountRef.current = true;
    }

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return [searchValue, setSearchValue];
}
