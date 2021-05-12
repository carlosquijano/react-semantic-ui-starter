import React from "react";
import {Divider, Header, Segment, Table, TableCell, TableRow} from "semantic-ui-react";

const HelloWorld: React.FC = () => (
    <Segment>
        <Header size="large">Hello World</Header>
        <Divider />
        <Header size="small">Environmental variables:</Header>
        <Table>
            <TableRow>
                <TableCell>process.env.PRODUCTION:</TableCell>
                <TableCell>{process.env.PRODUCTION.toString()}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>process.env.NAME:</TableCell>
                <TableCell>{process.env.NAME}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>process.env.VERSION:</TableCell>
                <TableCell>{process.env.VERSION}</TableCell>
            </TableRow>
        </Table>
    </Segment>
);

export default HelloWorld;
