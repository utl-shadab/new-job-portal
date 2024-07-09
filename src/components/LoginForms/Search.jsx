import React from 'react';
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import './Search.css'; 

const Search = () => {
  return (
    <div className="search-bar">
      <InputGroup>
        <Input type="text" placeholder="Search..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>
           <i className="fa fa-search"></i>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default Search;
