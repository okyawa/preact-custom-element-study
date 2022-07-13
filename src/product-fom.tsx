import { ReactHookForm } from './components/subscription-form/react-hook-form';
import { SubscriptionForm } from './components/subscription-form/subscription-form';

// Webpackで読み込んでビルドされるよう、外部設置のコンポーネントの呼び出し
[SubscriptionForm, ReactHookForm];
