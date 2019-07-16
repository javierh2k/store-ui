import React from 'react';
import { withTheme } from 'styled-components';

import { TableHeader } from './styles';

import { Table, Thead, Tr, Th, Tbody, Td } from '@bootstrap-styled/v4';

function Rows({ rows }) {
    const heads = Object.keys(rows.shift());
    console.log(heads);
    return rows.map((row, key) => (
        <Tr key={`tr-${key}`}>
            <Td>{key + 1}</Td>{' '}
            {heads.map(head => <Td key={`td-${key}`}>{row[head]}</Td>)}
        </Tr>
    ));
}

const ReactTable = ({ theme, headers, rows, title }) => {
    console.log('theme: ', theme);
    return (
        <React.Fragment>
            <TableHeader> {title}</TableHeader>
            <Table hover>
                <Thead>
                    <Tr color="info">
                        <Th>#</Th>
                        {Object.values(headers).map((header, key) => (
                            <Th key={`th-${key}`}>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    <Rows rows={rows} />
                </Tbody>
            </Table>
        </React.Fragment>
    );
};

export default withTheme(ReactTable);
