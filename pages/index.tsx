import styled from "styled-components";
import separatorImg from "@/public/separator-line.svg";

const Main = () => {
  return (
    <>
      <h1>halo</h1>
      <Separator type="SMALL" />
      <h1>halo</h1>
    </>
  );
};

export default Main;

type SeparatorType = "SMALL" | "MEDIUM";
interface SeparatorProps {
  type: SeparatorType;
}

const StyledSeparator = styled("div")<{ type: SeparatorType }>(({ type }) => ({
  width: "fit-content",
  margin: type == "SMALL" ? "80px auto" : "120px auto",
}));

export const Separator = ({ type }: SeparatorProps) => (
  <StyledSeparator type={type}>
    <img src={separatorImg.src} alt="separator" />
  </StyledSeparator>
);
