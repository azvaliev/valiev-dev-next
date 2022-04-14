import styled from "styled-components";

export const Main = styled.div`
	box-shadow: 0px 0px 8px 4px rgba(160, 160, 160, 0.3);
`;

export const TimelineBubble = styled.span`
	width: 2vw;
	height: 2vw;
	position: absolute;
	left: 43.5vw;
	margin-right: auto;
	border-radius: 999px;
	z-index: 20;
	border-width: 6px;
	@media (max-width: 1024px) {
		left: -1vw;
	}
`;

export const ViewWorkButton = styled.button`
	width: fit-content;
	margin: 0 auto;
	padding: 0.5rem 1rem;
	border-width: 2px;
	border-radius: 0.375rem;
`;
