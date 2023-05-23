import { Container, SectionStyle } from './Section.styled';

export const Section = ({ children, ...props }) => {
  return (
    <SectionStyle {...props}>
      <Container>{children}</Container>
    </SectionStyle>
  );
};
