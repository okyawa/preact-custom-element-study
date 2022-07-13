import { HooksForm } from './components/hooks-form/hooks-form';
import { NameField } from './components/name-field/name-field';
import { VideoHls } from './components/video-hls/video-hls';

// Webpackで読み込んでビルドされるよう、外部設置のコンポーネントの呼び出し
[VideoHls, NameField, HooksForm];
