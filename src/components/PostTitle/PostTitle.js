
import React, { useState } from "react";
import {Header, SelectContainer, SelectorListContainer, SelectorList, ListItem, SelectorHeader} from './styles';


const options = ["List", "Grid"];

function PostTitle(props) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("List");

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    value==='List' ? props.onChange('list') : props.onChange('grid')
  };


  return (
    <Header>
      <h2 className="title">Previous Rulings</h2>
      <SelectContainer>
        <SelectorHeader 
          onClick={(e) => {
            setIsOpen(!isOpen)
          }}
        >
          {selectedOption}
        </SelectorHeader>
        {!!isOpen && (
          <SelectorListContainer>
            <SelectorList>
              {options.map((option, i) => (
                <ListItem onClick={onOptionClicked(option)} key={i}>
                  {option}
                </ListItem>
              ))}
            </SelectorList>
          </SelectorListContainer>
        )}       
      </SelectContainer>
    </Header>
  ); 
}

export default PostTitle;