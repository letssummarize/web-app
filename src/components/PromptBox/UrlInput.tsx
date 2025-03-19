import { useEffect, useRef } from 'react';
import { validateUrl } from '@/util/validateUrl';
import { validateYoutubeVideoUrl } from '@/util/validateYoutubeVideoUrl';

interface UrlInputProps {
  url: string;
  setUrl: (url: string) => void;
  allowOnlyYoutube?: boolean;
  shouldFocus?: boolean;

}

function UrlInput({ url, setUrl, allowOnlyYoutube = true, shouldFocus = true }: UrlInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const checkUrl = (input: string) => {
    if (allowOnlyYoutube) {
      return validateYoutubeVideoUrl(input);
    }
    return validateUrl(input);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
  };

  return (
    <input
      ref={inputRef}
      type='text'
      value={url}
      onChange={handleChange}
      placeholder={allowOnlyYoutube ? 'Enter YouTube Video URL' : 'Enter URL'}
      className={`w-full pl-10 py-6 bg-transparent text-white font-light placeholder-gray-300 focus:outline-none max-sm:pl-6 max-sm:py-4 placeholder:text-lg max-sm:placeholder:text-[12px] ${
        !checkUrl(url) && url ? 'border-red-500' : ''
      }`}
    />
  );
}

export default UrlInput;
