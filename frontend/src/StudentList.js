import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavBar from './AppNavBar';
import { Link } from 'react-router-dom';

class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {students: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/students')
            .then(response => response.json())
            .then(data => this.setState({students: data}));
    }

    async remove(id) {
        await fetch(`/students/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedstudents = [...this.state.students].filter(i => i.id !== id);
            this.setState({students: updatedstudents});
        });
    }

    render() {
        const {students} = this.state;

        const studentList = students.map(student => {
            return <tr key={student.id}>
                <td style={{whiteSpace: 'nowrap'}}>{student.firstName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{student.firstName}</td>
                <td>{student.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/students/" + student.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(student.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavBar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/students/new">Add student</Button>
                    </div>
                    <h3>students</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">FirstName</th>
                            <th width="30%">SecondName</th>
                            <th width="30%">Email</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default StudentList;