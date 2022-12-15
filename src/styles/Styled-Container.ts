import styled from 'styled-components';

const BodyModel = styled.div`
    position: absolute;
    inset: 0;

    height: 100%;
    weight: 100%;

    background-color: transparent;
`

const TreeContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 500px;
`
const FormikContainer = styled.div`
    position: absolute;
    align: center;
    top: 100px;
    left: 100px;
`
const ContentContainer = styled.div`
    position: absolute;
    right: 0;
`
export { BodyModel, TreeContainer, FormikContainer, ContentContainer };