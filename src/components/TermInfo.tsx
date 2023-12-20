import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>airbauer.ch</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
