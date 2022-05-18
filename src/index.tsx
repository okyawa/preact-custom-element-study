import { h, JSX, render } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Hls from "hls.js";

type Props = JSX.HTMLAttributes<HTMLVideoElement>;

const App = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && ref.current != null) {
      const hls = new Hls();
      hls.loadSource(props.src || "");
      hls.attachMedia(ref.current);
    }
  }, []);

  return <video ref={ref} {...props} src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"></video>;
}

// render(<App/>, document.getElementById('app'));
