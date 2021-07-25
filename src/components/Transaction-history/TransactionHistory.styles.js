import styled from 'styled-components'

const Table = styled.table`
  margin: 30px;
  border-collapse: collapse;
  text-align: center;

  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
`

const TableHead = styled.thead`
  padding: 20px;
  text-transform: uppercase;
  background-color: DarkTurquoise;
  color: white;
`

const HeadItem = styled.th`
  padding: 10px;
  border: 1px solid #2a2a2a;
`

const TableItem = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-transform: capitalize;
`

export { Table, TableHead, HeadItem, TableItem }
