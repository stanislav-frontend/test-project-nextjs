import { device } from "@const/cssMedia";
import Title from "@ui/Title";
import styled from "styled-components";

export const StyledExploreTitle = styled(Title)`
  font-size: 2.8rem;

  @media ${device.laptop} {
    font-size: 3.3rem;
  }
`;