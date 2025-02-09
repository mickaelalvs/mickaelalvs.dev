import React from 'react';
import {Home} from '../../modules/home/Home';
import {ResumeList} from '../../modules/resume/ResumeList';
import ExperienceList from '../../modules/resume/ExperienceList';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Resume | Mickaël Alves',
};

export default function Experiences() {
  return (
    <Home>
      <ResumeList>
        <ExperienceList />
      </ResumeList>
    </Home>
  );
}
