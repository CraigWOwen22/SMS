import react, { Component } from 'react';
import './App.css';
import AppNavBar from './AppNavBar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {

        return (
            <div>
                <AppNavBar/>
                <Container fluid>
                    <Button color="link"><Link to="/students">Students</Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;