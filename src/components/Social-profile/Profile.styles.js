import styled from 'styled-components'

const ProfileContainer = styled.div`
  max-width: 300px;

  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  font-size: large;
`

const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 0;

  list-style: none;
`

const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  padding: 15px;
  border: 1px solid rgba(197, 203, 203, 1);
  background-color: rgba(238, 246, 246, 0.59);
`

export { ProfileContainer, ProfileInfo, StatsList, StatsListItem }
