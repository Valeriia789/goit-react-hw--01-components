import React from 'react'
import PropTypes from 'prop-types'
import {
  Section,
  SectionTitle,
  StatsList,
  StatsListItem
} from './Statistics.styles'

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>

      <StatsList>
        {stats.map(stat => (
          <StatsListItem key={stat.id}>
            <span>
              <b>{stat.label}</b>
            </span>
            <span>{stat.percentage}%</span>
          </StatsListItem>
        ))}
      </StatsList>
    </Section>
  )
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string
}
