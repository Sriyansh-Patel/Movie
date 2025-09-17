import React from 'react'
import Latest from '../components/Latest';
import Popular from '../components/Popular';
import Crousel from '../components/Crousel';
import Filter from '../components/Filter';
import Criterion from '../components/Criterion';

export default function Mob({ onVideoClick, selectedFilter, onFilterChange, selectedCriterion, onCriterionChange ,mockVideos}) {
  return (
    <div className="grid lg:hidden grid-rows-2 gap-4">
    <div>
      <Crousel onVideoClick={onVideoClick} mockVideos={mockVideos} />
      <Popular onVideoClick={onVideoClick} mockVideos={mockVideos} />
      <Latest onVideoClick={onVideoClick} mockVideos={mockVideos} />
    </div>
    <div>
      <Filter filter={selectedFilter} onFilterChange={onFilterChange} />
      <Criterion criterion={selectedCriterion} onCriterionChange={onCriterionChange} />
    </div>
  </div>
  )
}
