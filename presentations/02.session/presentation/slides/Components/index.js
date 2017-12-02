import React from "react";
import { Heading, Slide, Text, Table, TableHeader, TableRow, TableHeaderItem, TableBody, TableItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading margin="0 0 0.2em 0" size={2} textColor="secondary">
      Components
    </Heading>
    <Text textSize="1em" textAlign="left" margin="0 0 0.5em 0" textColor="tertiary" >
      React bindings for Redux embrace the idea of separating presentational and container components. 
    </Text>
    <Table textAlign="left" textColor="tertiary" >
      <TableHeader >
        <TableRow >
          <TableHeaderItem></TableHeaderItem>
          <TableHeaderItem textSize="0.8em">Presentational Components</TableHeaderItem>
          <TableHeaderItem textSize="0.8em">Container Components</TableHeaderItem>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow bgColor="#455161">
          <TableItem bold textSize="0.8em">Purpose</TableItem>
          <TableItem textSize="0.7em">How things look (markup, styles)</TableItem>
          <TableItem textSize="0.7em">How things work (data fetching, state updates)</TableItem>
        </TableRow>
        <TableRow>
          <TableItem bold textSize="0.8em">Aware of Redux</TableItem>
          <TableItem textSize="0.7em">No</TableItem>
          <TableItem textSize="0.7em">Yes</TableItem>
        </TableRow>
        <TableRow bgColor="#455161">
          <TableItem bold textSize="0.8em">To read data</TableItem>
          <TableItem textSize="0.7em">Read data from props</TableItem>
          <TableItem textSize="0.7em">Subscribe to Redux state</TableItem>
        </TableRow>
        <TableRow>
          <TableItem bold textSize="0.8em">To change data</TableItem>
          <TableItem textSize="0.7em">Invoke callbacks from props</TableItem>
          <TableItem textSize="0.7em">Dispatch Redux actions</TableItem>
        </TableRow>
        <TableRow bgColor="#455161">
          <TableItem bold textSize="0.8em">Are written</TableItem>
          <TableItem textSize="0.7em">By hand</TableItem>
          <TableItem textSize="0.7em">Usually generated by React Redux</TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);
