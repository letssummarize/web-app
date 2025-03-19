import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';
import Restart from './Icon/Restart';

interface ReadAloudButtonProps {
  audioUrl?: string;
}

function ReadAloudButton({ audioUrl }: ReadAloudButtonProps) {
  if (!audioUrl) return null;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setIsPlaying(false);
    setError(null);
    setIsLoading(false);
  }, [audioUrl]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' && isPlaying && audioRef.current) {
        event.preventDefault();
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
        setIsPlaying(!isPlaying);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [audioUrl, isPlaying]);

  const togglePlayback = async () => {
    if (!audioUrl || !audioRef.current) return;

    try {
      setError(null);
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      setError('Failed to play audio');
      console.error('Error playing audio:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const restartPlayback = () => {
    if (!audioUrl || !audioRef.current) return;

    audioRef.current.currentTime = 0;
    togglePlayback();
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const getButtonContent = () => {
    if (isLoading) {
      return (
        <div className='flex items-center'>
          <LoadingSpinner size='sm' label='' />
          <span className='ml-2'>Loading...</span>
        </div>
      );
    }
    if (audioRef.current && audioRef.current.currentTime > 0) {
      return isPlaying ? 'Pause' : 'Resume';
    }
    return error ? 'Retry' : (isPlaying ? 'Pause' : 'Read aloud');
  };

  const getButtonIconName = () => {
    if (isLoading) {
      return 'sound';
    }
    if (audioRef.current && audioRef.current.currentTime > 0) {
      return isPlaying ? 'pause' : 'resume';
    }
    return error ? 'restart' : (isPlaying ? 'pause' : 'sound');
  };

  return (
    <div className='relative'>
      <div className='flex'>
        <Button
          variant='outlined'
          radius='full'
          size='sm'
          icon={getButtonIconName()}
          onClick={togglePlayback}
          disabled={!audioUrl || isLoading}
        >
          {getButtonContent()}
        </Button>
        <Button
          variant='ghost'
          radius='full'
          size='sm'
          onClick={restartPlayback}
          disabled={!audioUrl || isLoading}
        >
          <Restart className='w-5 h-auto cursor-pointer' />
        </Button>
      </div>
      {error && (
        <div className='absolute -bottom-6 left-0 text-xs text-red-500'>
          {error}
        </div>
      )}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={handleAudioEnded}
          onError={() => setError('Failed to load audio')}
        />
      )}
    </div>
  );
}

export default ReadAloudButton;
