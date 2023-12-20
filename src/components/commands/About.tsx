import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>AIRbauer aka Vik</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a front-end developer</HighlightAlt> based in Germany.
      </p>
      <p>
        I am passionate about writing codes and <br />
        playing Videogames like Hitman WoA and many more.
      </p>
    </AboutWrapper>
  );
};

export default About;
