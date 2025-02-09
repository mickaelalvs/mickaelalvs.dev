import {parserElementIdFromSlug} from '../../../modules/speaking/types/speakingSlug';
import {speaking} from '../../../modules/speaking/types/speaking';
import React from 'react';
import {SpeakingDetails} from '../../../modules/speaking/speakingDetails/SpeakingDetails';
import {notFound} from 'next/navigation';

export default async function SpeakingDetailsPage({
  params,
}: {
  params: { talkName: string };
}) {
  const talkId = parserElementIdFromSlug({slug: params.talkName});
  const talk = speaking.find(speaking => speaking.id === talkId);

  if (!talk) {
    notFound();
  }

  return (
    <SpeakingDetails talkData={talk} />
  )
}