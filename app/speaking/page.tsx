import React from 'react';
import TalksList from '../../modules/speaking/TalksList';
import {Home} from '../../modules/home/Home';
import WorkshopList from '../../modules/speaking/WorkshopList';
import PodcastList from '../../modules/speaking/PodcastList';
import {SpeakingList} from '../../modules/speaking/SpeakingList';
import {Summary} from '../../modules/speaking/Summary';

export default function SpeakingPage() {
  return (
    <Home>
      <SpeakingList>
        <TalksList />
        <WorkshopList />
        <PodcastList />
        <Summary />
      </SpeakingList>
    </Home>
  );
}
