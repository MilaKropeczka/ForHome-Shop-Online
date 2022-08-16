import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import Col from 'react-bootstrap/Col';
import styles from './Accordions.module.sass';

function Accordions(props) {
	return (
		<Col xs={12}>
			<Accordion allowZeroExpanded>
				<AccordionItem className={styles.box}>
					<AccordionItemHeading>
						<AccordionItemButton>
							<h4 className={styles.hover}>{props.title}</h4>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<p>{props.content}</p>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</Col>
	);
}

export default Accordions;
