import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 400px;
  margin: 30px;

  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
`
const SectionTitle = styled.h2`
  text-transform: uppercase;
`

const StatsList = styled.ul`
  display: flex;
  width: 100%;
  height: 50%;

  margin: 0;
  padding: 0;
  list-style: none;
`

const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20%;
  padding: 15px;
  border: 1px solid rgba(197, 203, 203, 1);
  background-color: rgba(238, 246, 246, 0.59);
`

export { Section, SectionTitle, StatsList, StatsListItem }
