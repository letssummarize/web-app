import { validateUrl } from '@/util/validateUrl';
import { validateYoutubeVideoUrl } from '@/util/validateYoutubeVideoUrl';

interface UrlInputProps {
  url: string;
  setUrl: (url: string) => void;
  allowOnlyYoutube?: boolean;
}

function UrlInput({ url, setUrl, allowOnlyYoutube = true }: UrlInputProps) {
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
      type='text'
      value={url}
      onChange={handleChange}
      placeholder={allowOnlyYoutube ? 'Enter YouTube Video URL' : 'Enter URL'}
      className={`w-full pl-10 py-6 bg-transparent text-white font-light placeholder-gray-300 focus:outline-none ${
        !checkUrl(url) && url ? 'border-red-500' : ''
      }`}
    />
  );
}

export default UrlInput;
