import {parserElementIdFromSlug} from '../../../modules/speaking/types/speakingSlug';
import {speaking, talks} from '../../../config/speaking/speaking';
import React from 'react';
import {SpeakingDetails} from '../../../modules/speaking/speakingDetails/SpeakingDetails';

export default function TalkPage({ params }: { params: { talkName: string } }) {
  const talkId = parserElementIdFromSlug({slug: params.talkName});
  const talk = speaking.find(speaking => speaking.id === talkId);

  //TODO: Adding redirection errors
  if (!talk) return <>Coucou</>

  return (
    <SpeakingDetails talkData={talk} />
  )
}