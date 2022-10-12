import React from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from "styled-components";



function Todo({ todo, onEdit, onDelete }) {

 return (
        <Todobox color={todo.isDone ? "#e2d3c4" : "#ffefe0"} border={todo.isDone ? "#ffefe0" : "#004d40;"}>
          <div className="todo-cont">
              <Title> 
                <div className="todo-tit">{todo.title}</div>
                <BtnSet>
                  <Btn 
                  onClick={() => onEdit(todo.id)}>
                  {todo.isDone ? "⬅️" : "➡️"}  
                  </Btn>
                  <Btn 
                  className="btn del"
                  onClick={() => onDelete(todo.id)}
                  >✖️ 
                  </Btn>
                </BtnSet>
              </Title>
              <Hr />
              <Body>{todo.body}</Body>
              
          </div>
          <StyledLink to={`/${todo.id}`} style={{textDecoration: 'none'}}key={todo.id}> view more </StyledLink>

      </Todobox>
      );
    
};
export default Todo;

const Todobox = styled.article`
  margin: 10px;
  padding: 20px;
  width: 80%;
  border: 1px solid ${props => props.border || "#39796b"};
  /** done */
  background-color: ${props => props.color || "blue"};
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2;
  color: #39796b;
  `
  const Body = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  color: #00251a;
  margin: 15px 5px;
`

const Btn = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  background-color:transparent;
  border: 0;
  border-radius: 20px;
  font-size: 1.1rem;
  line-height: 1.75;
  margin: 5px;
  
  &:hover {
    background-color: #fff;
  }
`
const Hr = styled.hr`
  border-top: 1px solid #39796b;
  border-bottom: 0;
  
`

const BtnSet = styled.div`
  
`
const Link = ({children, ...props}) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
}

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 24px;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.9;
  border: 1px solid #39796b;
  margin-top: 30px;
  color: #39796b;

  &:hover{
    background-color: #39796b;
    color: #fff
  }
`


