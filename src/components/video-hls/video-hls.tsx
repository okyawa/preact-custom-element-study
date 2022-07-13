import Hls from 'hls.js';
import { h, JSX } from 'preact';
import register from 'preact-custom-element';
import { useEffect, useRef } from 'preact/hooks';

type Props = JSX.HTMLAttributes<HTMLVideoElement>;

export const VideoHls = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && ref.current != null) {
      const hls = new Hls();
      hls.loadSource(props.src || '');
      hls.attachMedia(ref.current);
    }
  }, []);

  return <video ref={ref} {...props} controls></video>;
};

register(
  VideoHls,
  'video-hls',
  ['src', 'autoplay', 'controls', 'width', 'height', 'loop', 'muted', 'poster', 'preload', 'style', 'class'],
  { shadow: true },
);
