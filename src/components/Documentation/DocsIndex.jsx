/* eslint-disable react/prop-types */
import * as C from './styles'

const DocsIndex = ({ sections, setContentId }) => {
    return (
      <C.Nav id="navbar">
        <C.Header>Project Documentation</C.Header>
        <C.HR />
        <C.Ul>
          {sections.map((section) => (
            <>
            <C.Li key={section.id} onClick={() => setContentId(section.id)}>
              <C.A>{section.header}</C.A>
              
            </C.Li>
            <C.HR />
            </>
          ))}
        </C.Ul>
      </C.Nav>
    );
  };
  
  export default DocsIndex;
