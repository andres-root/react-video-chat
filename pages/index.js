import Head from 'next/head';

import VideoChat from '../components/VideoChat';


export default function Home() {
  return (
    <div className={'app'}>
      <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <VideoChat />
      </main>
    </div>
  );
};
