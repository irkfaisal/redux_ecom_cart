import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import "./SearchBar.scss";
const SearchBarComponents = () => {
    const navigate = useNavigate();
    let elemSearch = useRef('')
    const handlerSubmit = (e) => {
        e.preventDefault();
        let searchValue = elemSearch.current.value;
        navigate(`/search/${searchValue.trim()}`);
    }
    return (
        <Form onSubmit={handlerSubmit} className='searchProducts'>
            <Form.Control ref={elemSearch} type="text" placeholder="Search for products ..." />
            <Button type="submit" style={{ background: "#343F71" }}>
                <span className='submitIcon'>
                    <BsSearch />
                </span>
            </Button>
        </Form>
    )
}
export default SearchBarComponents;