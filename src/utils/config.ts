import recordIcon from 'assets/record.svg';
import challengeIcon from 'assets/challenge.svg';
import notificationIcon from 'assets/notification.svg';
import barsIcon from 'assets/bars.svg';

export const SITE = {
  title: 'Healthy',
  itemPerPage: 8,
  logoWidth: 100,
};

export const MAIN_MENU = [
  { id: '1', title: '自分の記録', link: '/my-record', icon: recordIcon },
  { id: '2', title: 'チャレンジ', link: '/my-record', icon: challengeIcon },
  { id: '3', title: 'お知らせ', link: '/my-record', icon: notificationIcon },
  { id: '4', title: '', link: '#', icon: barsIcon },
];

export const FOOTER_MENU = [
  { id: '1', title: '会員登録', link: '#' },
  { id: '2', title: '運営会社', link: '#' },
  { id: '3', title: '利用規約', link: '#' },
  { id: '4', title: '個人情報の取扱について', link: '#' },
  { id: '5', title: '特定商取引法に基づく表記', link: '#' },
  { id: '6', title: 'お問い合わせ', link: '#' },
];
