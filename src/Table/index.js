import React from 'react';
import { withTheme } from 'styled-components';

import { TableHeader } from './styles';

import { Table, Thead, Tr, Th, Tbody, Td } from '@bootstrap-styled/v4';

function Rows({ rows }) {
    const heads = Object.keys(rows.shift());
    console.log(heads);
    return rows.map((row, key) => (
        <Tr key={`tr-${key}`}>
            <Td key={`td-00`}>{key + 1}</Td>{' '}
            {heads.map((head, k) => (
                <Td key={`td-${key + 1}${k}`}>{row[head]}</Td>
            ))}
        </Tr>
    ));
}

const ReactTable = ({ headers, rows, title, ...props }) => {
    console.log('theme table: ', props);
    return (
        <React.Fragment>
            <TableHeader> {title}</TableHeader>
            <Table hover>
                <Thead>
                    <Tr color="info">
                        <Th key={`th-0`}>#</Th>
                        {Object.values(headers).map((header, key) => (
                            <Th key={`th-${key + 1}`}>{header}</Th>
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
