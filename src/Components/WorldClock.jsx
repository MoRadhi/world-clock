import React from "react";
import Clock from "./Clock";
import { Container, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const WorldClock = ({ clockData }) => {
    return (
        <Container className="mt-5">
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Clock</th>
                </tr>
                </thead>
                <tbody>
                {clockData.map((timezone) => {
                    // Extracting the city name
                    const cityName = timezone.split("/")[1]?.replace("_", " ");

                    return (
                        <tr key={timezone}>
                            <td className="align-middle">{cityName}</td>
                            <td>
                                <Clock timeZone={timezone} />
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </Container>
    );
};

export default WorldClock;
