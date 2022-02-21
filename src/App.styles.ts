import styled  from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
    margin:30px;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    top: 2px;
    right: 2px
`;
