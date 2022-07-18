import 'antd/dist/antd.css';
import {Dropdown, Menu } from 'antd';
import Button from 'react-bootstrap/Button';


const DropDownFilter = ({onChangeFilter}) => {
    return(
        <Dropdown overlay={<ArrowMenu onChangeFilter={onChangeFilter}/>} placement="bottomLeft" arrow>
            <Button variant="dark" style={{margin: "20px 10px"}}>Filter</Button>
        </Dropdown>
    );
}

const ArrowMenu = ({onChangeFilter}) => {
    return(
        <Menu items={[
            {
                key: '1',
                label: (
                <Button variant="dark" value="Name" onClick={(e) => onChangeFilter(e.target.value)}>
                    Name
                </Button>
                )
            },
            {
                key: '2',
                label: (
                <Button variant="dark" value="City" onClick={(e) => onChangeFilter(e.target.value)}>
                    City
                </Button>
                )
            },
            {
                key: '3',
                label: (
                <Button variant="dark" value="Email" onClick={(e) => onChangeFilter(e.target.value)}>
                    Email
                </Button>
                )
            },
            {
                key: '4',
                label: (
                <Button variant="dark" value="Job" onClick={(e) => onChangeFilter(e.target.value)}>
                    Job
                </Button>
                )
            },
            {
                key: '5',
                label: (
                <Button variant="dark" value="Date created" onClick={(e) => onChangeFilter(e.target.value)}>
                    Date created
                </Button>
                )
            },
            {
                key: '6',
                label: (
                <Button variant="dark" value="Phone Number" onClick={(e) => onChangeFilter(e.target.value)}>
                    Phone Number
                </Button>
                )
            }
        ]}/>
    );
}

export default DropDownFilter;