/* eslint-disable react/prop-types */
import * as C from './styles'


const Section = ({ id, header, content }) => {
  console.log(id, header, content)
  return (
    <C.SectionContainer className="main-section" id={id}>
      <C.Header>{header}</C.Header>
      <C.Article>
        {content.map((text, index) => (
          <div dangerouslySetInnerHTML={{__html: text }} key={index}/>
        ))}
      </C.Article>
    </C.SectionContainer>
  );
};

export default Section;
